import React, { useState, useEffect } from 'react';
import {
  Button, Input, DatePicker, Table, Spin, Select, Modal,Form
} from 'antd';
import { request } from '../../api/request'
import moment from 'moment';
import { message } from 'antd'
import HeaderAccount from '../../component/HeaderAccount'
import { ExclamationCircleOutlined } from '@ant-design/icons';


import './style.less';
import { useHistory } from 'react-router-dom';


const { confirm } = Modal;

const { Search } = Input;
const Together = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [shopId, setShopId] = useState(0);
  const [visible,setVisible]=useState(false);
  const [list, setList] = useState([
    { id: 1, name: '正在生产', mm: [1, 2, 3] },
    { id: 2, name: '将要生产', mm: [4, 5, 6] },
    { id: 3, name: '已完成生产', mm: [7, 8, 9] },
    { id: 4, name: '生产异常', mm: [10, 11, 12] },

  ]);
  const [pageobj, setPageObj] = useState({
    page: 1,
    pageSize: 6
  })
  const [total, setTotal] = useState(1)
  //请求数据
  const getList = (params) => {
    return request({
      method: 'post',
      url: '/merchant/v1/shop/shop/together/list',
      params: params  //post data:
    })
  }
  const getShopInfo = () => {
    return request({
      method: 'post',
      url: '/merchant/v1/shop/shop/info',
    })
  }
  const handleGetList = async (obj) => {
    setLoading(true)
    const data = await getList(obj);
    if (data) {
      setList(data.list);
      setTotal(data.total);
    }
    setLoading(false)
  }


  //调用数据


  //店铺id
  const handleGetShop = async () => {
    const data = await getShopInfo();
    if (data) {
      const obj = {
        shop_id: data.shop.shop_id,
        page: pageobj.page,
        pageSize: pageobj.pageSize,
      }
      handleGetList(obj);
      setShopId(data.shop.shop_id)

    }
  }

  useEffect(() => {
    handleGetShop();
    if (!JSON.parse(localStorage.getItem('loginInfo'))) {
      message.error('请先登录！');
      history.replace('/login');

    }
    setLoading2(false)
  }, [])
  const [keyValue, setKeyValue] = useState('');
  const [orderNum, setOrderNum] = useState('');
  // const [timeRange, setTimeRange] = useState(null);
  const clearPage = () => {
    setPageObj({
      page: 1,
      pageSize: 6,
    })
  }
  const onReset = () => {
    setKeyValue(new Date());
    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 6,
    });
    clearPage();
  };
  const onResetOrder = () => {
    setOrderNum(null);
    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 6,
    });
    clearPage();

  };



  const Actionrender = (text, record) => {

    let val = <Button>qc</Button>;
    if (record.id === 1) val =<div><Button type='primary'>完成</Button><Button danger>异常</Button></div> 
    if (record.id === 2) val = <div><Button type='primary'>完成</Button><Button danger>异常</Button></div>
    if (record.id === 3) val =<Button onClick={()=>setVisible(true)} type='primary'>qc</Button>
    if (record.id === 4) val = <Button type='primary'>恢复</Button>;
    return val;
  }

  const columns = [
    {
      dataIndex: 'name',
      key: 'name',
      width: 120,
      align: 'center',
      fixed: 'left',
    },
    {
      title: '序号',
      dataIndex: 'mm',
      key: 'mm',
      width: 80,
      align: 'center',
      render: (text, record) => {
        return <div className={text.length > 3 ? 'scroll' : 'hidden'}>
          {
            text.map(e => <div>{e}</div>
            )
          }

        </div>
      }
    },
    {
      title: '客户类型',
      dataIndex: 'ee',
      key: 'ee',
      width: 100,
      align: 'center',
    },
    {
      title: '客户要求交期',
      dataIndex: 'rr',
      key: 'rr',
      width: 120,
      align: 'center',
    },
    {
      title: '型号',
      dataIndex: 'tt',
      key: 'tt',
      width: 80,
      align: 'center',
    },
    {
      title: '开始时间',
      dataIndex: 'yy',
      key: 'yy',
      width: 100,
      align: 'center',
    },
    {
      title: '预计完成时间',
      dataIndex: 'uu',
      key: 'uu',
      width: 120,
      align: 'center',
    },
    {
      title: '完成时间',
      dataIndex: 'ii',
      key: 'ii',
      width: 100,
      align: 'center',
    },
    {
      title: '厚度',
      dataIndex: 'oo',
      key: 'oo',
      width: 80,
      align: 'center',
    },
    {
      title: '宽度',
      dataIndex: 'pp',
      key: 'pp',
      width: 80,
      align: 'center',
    },
    {
      title: '长度',
      dataIndex: 'll',
      key: 'll',
      width: 80,
      align: 'center',
    },
    {
      title: '支数',
      dataIndex: 'kk',
      key: 'kk',
      width: 80,
      align: 'center',
    },
    {
      title: '实际平方',
      dataIndex: 'jj',
      key: 'jj',
      width: 100,
      align: 'center',
    },
    {
      title: '备注',
      dataIndex: 'hh',
      key: 'hh',
      width: 80,
      align: 'center',
    },
    {
      title: '异常原因',
      dataIndex: 'gg',
      key: 'gg',
      width: 100,
      align: 'center',
    },
    {
      title: '操作',
      dataIndex: 'action',
      key: 'action',
      width: 200,
      align: 'center',
      fixed: 'right',
      render: (text, record) => Actionrender(text, record)

    },
  ]

  const changeTime = (e) => {
    const time1 = e && e[0].format('YYYY-MM-DD HH:mm:ss');
    const time2 = e && e[1].format('YYYY-MM-DD HH:mm:ss');
    // setTimeRange(`${time1}|${time2}`);
    clearPage();

    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 6,
      date: e ? `${time1}|${time2}` : null,
    });
  };

  const refresh = () => {
    setKeyValue(new Date());

    setOrderNum(null);
    clearPage();

    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 6,
    });
  };

  const changePage = (e) => {
    setPageObj({
      page: e.current,
      pageSize: e.pageSize
    })
    handleGetList({
      page: e.current,
      pageSize: e.pageSize,
      shop_id: shopId
    })

  }
  const { Option } = Select;

  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  function onSearch(val) {
    console.log('search:', val);
  }
  function showConfirm() {
    confirm({
      title: <div>请选择日期<DatePicker placeholder='请选择时间' style={{ marginLeft: 15, width: 200 }} /></div>,
      icon: <ExclamationCircleOutlined />,
      content: <div style={{ height: 50 }}>
      </div>,
      okText: '下载异常清单',
      cancelText: '下载已完成清单',
      placeholder: '请选择时间',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log(values);
  };


  return (
    <Spin
      spinning={loading2}
    >
      <div className="together2">
        {/* <HeaderAccount /> */}
        <div className="menu-header">
          <div className="header-top">
            <div className="top-time"><span>10</span>月<span>5</span>日</div>
            <div className="top-time">星期<span>日</span></div>
            <div className="top-time"><span>夜班</span></div>
          </div>
          <div className="header_center">
            <div className="center_select line">
              <Select
                showSearch
                style={{ width: 160, marginRight: 15 }}
                placeholder="请选择"
                optionFilterProp="children"
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                <Option value="new">新线</Option>
                <Option value="old">旧线</Option>
              </Select>
            </div>
            <div className="center_number line"> 完成率(<span>10</span>%)
            <Button type='primary' className='btn' onClick={showConfirm}>导出为Excel</Button>
            </div>
          </div>
        </div>
        <div className="pan">
          <div className="search">
            <div className="line">
              <p className="pic">生产线</p>
              <div className='input_wrap'>
                <Select
                  className="pic"
                  showSearch
                  style={{
                    width: 300,
                    height: 32,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255, 255, 255, 1) ',
                    marginRight: 15
                  }}
                  placeholder="请选择生产线"
                  optionFilterProp="children"
                  onChange={onChange}
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option value="C09">C09</Option>
                  <Option value="C10">C10</Option>
                  <Option value="C11">C11</Option>
                </Select>
                <Button className="pic" type="default" htmlType="button" style={{ lineHeight: '0' }}
                  onClick={onResetOrder}
                >
                  重置
              </Button>
              </div>

            </div>
          </div>

        </div>
        <div className="together-content">


          <div className="showTable_mobile">
            <div className='table'>
              <div className='table_left'>
                <Input className='line_input' placeholder='请输入维护时间'></Input>
                <Input className='line_input' placeholder='请输入异常停机时间'></Input>
                <div className='product_name line_input'>C09</div>
                <div className='success_percent line_input'>完成率(<span>10</span>%)</div>

              </div>
              <div className='table_right'>
                <Table
                  columns={columns}
                  bordered
                  dataSource={list}
                  rowKey={(row) => row.listpay_order_id}
                  scroll={{ x: '100%' }}
                  loading={loading}
                  onChange={changePage}
                  pagination={{
                    current: pageobj.page,
                    pageSize: pageobj.pageSize,
                    total: total
                  }}
                />
              </div>
            </div>
          </div>

        </div>
        <Modal title="qc数据显示"
          visible={visible}
          okText='确认'
          cancelText="取消"
          onOk={  ()=>setVisible(false)}
          onCancel={()=>setVisible(false)}
          >
        <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
      <Form.Item name="序号" label="序号" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="客户类型" label="客户类型" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="客户要求交期" label="客户要求交期" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="型号" label="型号" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="开始时间" label="开始时间" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="预计完成时间" label="预计完成时间" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="完成时间" label="完成时间" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="厚度" label="厚度" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="宽度" label="宽度" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="长度" label="长度" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="支数" label="支数" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="实际平方" label="实际平方" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="备注" label="备注" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="异常原因" label="异常原因" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
    </Form>
        </Modal>
      </div>

    </Spin>


  );
};
export default Together;
