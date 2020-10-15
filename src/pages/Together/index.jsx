/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Button, Input, DatePicker, Spin, Select, Modal, Form
} from 'antd';
import { request } from '../../api/request'
import { message } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import DragSortingTable from '../../component/DragSortingTable'
import './style.less';


const { confirm } = Modal;

  

const Together = (props) => {
  const history = useHistory();
  const [loading2, setLoading2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const [list, setList] = useState([
    { id: 1, name: '正在生产', mm: [1, 2, 3] },
    { id: 2, name: '将要生产', mm: [4, 5, 6] },
    { id: 3, name: '已完成生产', mm: [7, 8, 9] },
    { id: 4, name: '生产异常', mm: [10, 11, 12] },
  ]);
  console.log(list);
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
    const data = await getList(obj);
    if (data) {
      setList(data.list);
    }
  }
  const columns=[ 
    {
    title: '序号',
    dataIndex: '1',
    key: '1',
    width:200
  },
  {
    title: '销售订单',
    dataIndex: '2',
    key: '2',
    width:200
  },
  {
    title: '购货单位',
    dataIndex: '3',
    key: '3',
    width:200
  },
  {
    title: '规格型号',
    dataIndex: '4',
    key: '4',
    width:200
  },
  {
    title: '产品规格(厚*宽*长*只)',
    dataIndex: '5',
    key: '5',
    width:200
  },
  {
    title: '交货日期',
    dataIndex: '6',
    key: '6',
    width:200
  },
  {
    title: '开始时间',
    dataIndex: '7',
    key: '7',
    width:200
  },
  {
    title: '预计完成时间',
    dataIndex: '8',
    key: '8',
    width:200
  },
  {
    title: '完成时间',
    dataIndex: '9',
    key: '9',
    width:200
  },
  {
    title: '投料单单号',
    dataIndex: '10',
    key: '10',
    width:200
  },
  {
    title: '总平方数',
    dataIndex: '11',
    key: '11',
    width:200
  },
  {
    title: '提供生产批号',
    dataIndex: '12',
    key: '12',
    width:200
  },
  {
    title: '是否可接膜',
    dataIndex: '13',
    key: '13',
    width:200
  },
  {
    title: '是否可多米',
    dataIndex: '14',
    key: '14',
    width:200
  },
  {
    title: '是否可少米',
    dataIndex: '15',
    key: '15',
    width:200
  },
  {
    title: '是否可彩纹印',
    dataIndex: '16',
    key: '16',
    width:200
  },
  {
    title: '是否可换规格',
    dataIndex: '17',
    key: '17',
    width:200
  },
  {
    title: '备注',
    dataIndex: '18',
    key: '18',
    width:200
  },
  {
    title: '异常备注',
    dataIndex: '19',
    key: '19',
    width:200
  },
  {
    title: '操作',
    dataIndex: '19',
    key: '19',
    width:200,
    fixed:'right',
  render:(text)=><div>
    <Button size="small" type="primary" onClick={()=>setVisible(true)}>QC</Button>
    <Button size="small" type="primary">完成</Button>
    <Button size="small" danger>异常</Button>
    
    </div>
  },
  ];

  //调用数据


  //店铺id
  const handleGetShop = async () => {
    const data = await getShopInfo();
    if (data) {
      const obj = {
        shop_id: data.shop.shop_id,
      }
      handleGetList(obj);

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

  const data1=[
    {
      key: '1',
      1: 'John Brown',
      2: 32,
      3: 'New York ',
      4:'hhh',
      5:2122,
      6:'hjhj',
      7:'www',
      8:12,
      9:'hjuhju',
      10:'jweiwj',
      11: 'John Brown',
      12: 32,
      13: 'New Yo',
      14:'hhh',
      15:2122,
      16:'hjhj',
      17:'www',
      18:12,
      19:'hjuhju',
    },
  ]
const data=[
    {key: '1',
      1: 'John Brown',
      2: 32,
      3: 'New York ',
      4:'hhh',
      5:2122,
      6:'hjhj',
      7:'www',
      8:12,
      9:'hjuhju',
      10:'jweiwj',
      11: 'John Brown',
      12: 32,
      13: 'New Yo',
      14:'hhh',
      15:2122,
      16:'hjhj',
      17:'www',
      18:12,
      19:'hjuhju',
    },
    {key: '2',
    1: 'John Brown',
    2: 32,
    3: 'New York ',
    4:'hhh',
    5:2122,
    6:'hjhj',
    7:'www',
    8:12,
    9:'hjuhju',
    10:'jweiwj',
    11: 'John Brown',
    12: 32,
    13: 'New Yo',
    14:'hhh',
    15:2122,
    16:'hjhj',
    17:'www',
    18:12,
    19:'hjuhju',
  },
  {key: '3',
  1: 'John Brown',
  2: 32,
  3: 'New York ',
  4:'hhh',
  5:2122,
  6:'hjhj',
  7:'www',
  8:12,
  9:'hjuhju',
  10:'jweiwj',
  11: 'John Brown',
  12: 32,
  13: 'New Yo',
  14:'hhh',
  15:2122,
  16:'hjhj',
  17:'www',
  18:12,
  19:'hjuhju',
},
]

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

  const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const [form] = Form.useForm();
  const onFinish = values => {
    console.log(values);
  };

//选择table项
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
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
            <Button type='primary' className='btn' onClick={()=>setVisible3(true)}>导出为Excel</Button>
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
                <Button className="pic" type="primary" htmlType="button" style={{ lineHeight: '0' }}
                onClick={()=>setVisible2(true)}
                >
                  切换为下一班
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
                <div className="table_container">
                  <div className='table_line'>
                    <div className='tabel_type'><p>正在生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={true}  data={data1} columns={columns} pagination={false}/></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>将要生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false}   data={data} columns={columns} pagination={false}/></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>已完成生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false}   data={data} columns={columns}  pagination={false}/></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>生产异常</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false}  data={data} columns={columns}  /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Modal title="qc数据显示"
          visible={visible}
          okText='确认'
          cancelText="取消"
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
        >
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="生产批号" label="生产批号" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="要求离型力" label="客户类型" rules={[{ required: true }]}>
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
            <Form.Item name="实测离型力" label="实测离型力" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="涂布离型力" label="涂布离型力" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="内管" label="内管" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name="收卷 不良" label="收卷 不良" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="擦花" label="擦花" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="压痕/褶皱" label="压痕/褶皱" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="脏污/白印" label="脏污/白印" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="接头/批号说明" label="接头/批号说明" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="生产卷数" label="生产卷数" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="判定" label="判定" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="检验员" label="检验员" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="备注" label="备注" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
        <Modal title="下一班将要生产"
          visible={visible2}
          okText='确认'
          cancelText="取消"
          onOk={() => setVisible2(false)}
          onCancel={() => setVisible2(false)}
          width={1080}
        >
          <DragSortingTable showHeader={true} columns={columns} data={data} rowSelection={{
          ...rowSelection,
        }}/>
        </Modal>
        <Modal title='请选择日期'
          visible={visible3}
          okText='下载异常清单'
          cancelText="下载已完成清单"
          onOk={() => setVisible3(false)}
          onCancel={() => setVisible3(false)}
          width={400}
        >
      <DatePicker placeholder='请选择时间' style={{ marginLeft: 15, width: 300 }} />
        </Modal>
      </div>

    </Spin>


  );
};
export default Together;
