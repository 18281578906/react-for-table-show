/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Button, Input, DatePicker, Spin, Select, Modal, Form
} from 'antd';
import DragSortingTable from '../../component/DragSortingTable'
import { request } from '../../api/request'
import moment from 'moment'
import './style.less';

const { Search } = Input;

const Together = (props) => {
  const [loading2, setLoading2] = useState(false);
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);


  const [isLight, setIsLight] = useState(null)

  const [info, setInfo] = useState({});
  //选择新旧线
  const [rateLine, setRateLine] = useState(null)
  //选择生产线
  //时间
  const [time, setTime] = useState(null)
  const columns = [
    {
      title: '序号',
      dataIndex: '1',
      key: '1',
      width: 200
    },
    {
      title: '销售订单',
      dataIndex: 'order_id',
      key: 'order_id',
      width: 200
    },
    {
      title: '购货单位',
      dataIndex: 'customer_name',
      key: 'customer_name',
      width: 200
    },
    {
      title: '规格型号',
      dataIndex: 'customer_model',
      key: 'customer_model',
      width: 200
    },
    {
      title: '产品规格(厚*宽*长*只)',
      dataIndex: 'product_model',
      key: 'product_model',
      width: 200
    },
    {
      title: '交货日期',
      dataIndex: 'customer_require_date',
      key: 'customer_require_date',
      width: 200
    },
    {
      title: '开始时间',
      dataIndex: 'start',
      key: 'start',
      width: 200
    },
    {
      title: '预计完成时间',
      dataIndex: 'pre_date',
      key: 'pre_date',
      width: 200
    },
    {
      title: '完成时间',
      dataIndex: 'complete_date',
      key: 'complete_date',
      width: 200
    },
    {
      title: '投料单单号',
      dataIndex: 'feed_id',
      key: 'feed_id',
      width: 200
    },
    {
      title: '总平方数',
      dataIndex: 'square',
      key: 'square',
      width: 200
    },
    {
      title: '提供生产批号',
      dataIndex: 'support_create_number',
      key: 'support_create_number',
      width: 200
    },
    {
      title: '是否可接膜',
      dataIndex: 'is_add_membran',
      key: '13',
      width: 200
    },
    {
      title: '是否可多米',
      dataIndex: '14',
      key: '14',
      width: 200
    },
    {
      title: '是否可少米',
      dataIndex: '15',
      key: '15',
      width: 200
    },
    {
      title: '是否可彩纹印',
      dataIndex: '16',
      key: '16',
      width: 200
    },
    {
      title: '是否可换规格',
      dataIndex: '17',
      key: '17',
      width: 200
    },
    {
      title: '备注',
      dataIndex: '18',
      key: '18',
      width: 200
    },
    {
      title: '异常备注',
      dataIndex: '19',
      key: '19',
      width: 200
    },
    {
      title: '操作',
      dataIndex: '19',
      key: '19',
      width: 200,
      fixed: 'right',
      render: (text) => <div>
        <Button size="small" type="primary" onClick={() => setVisible(true)}>QC</Button>
        <Button size="small" type="primary">完成</Button>
        <Button size="small" danger>异常</Button>
        <Button size="small" danger>二维码</Button>

      </div>
    },
  ];

  //调用数据
  const getInfo = (params) => {
    return request({
      method: 'get',
      url: '',
      params: params  //post data:
    })
  }

  const handleGetInfo = async (obj) => {
    const data = await getInfo(obj);
    setInfo(data);
    setIsLight(data.shift)
    setTime(data.date)

  }

  useEffect(() => {
    setLoading2(false);
    handleGetInfo({
      page: 1,
      pageSize: 10
    });
  }, [])

  const data1 = [
    {
      key: '1',
      1: 'John Brown',
      2: 32,
      3: 'New York ',
      4: 'hhh',
      5: 2122,
      6: 'hjhj',
      7: 'www',
      8: 12,
      9: 'hjuhju',
      10: 'jweiwj',
      11: 'John Brown',
      12: 32,
      13: 'New Yo',
      14: 'hhh',
      15: 2122,
      16: 'hjhj',
      17: 'www',
      18: 12,
      19: 'hjuhju',
    },
  ]

  const data = [
    {
      key: '1',
      1: 'John Brown',
      2: 32,
      3: 'New York ',
      4: 'hhh',
      5: 2122,
      6: 'hjhj',
      7: 'www',
      8: 12,
      9: 'hjuhju',
      10: 'jweiwj',
      11: 'John Brown',
      12: 32,
      13: 'New Yo',
      14: 'hhh',
      15: 2122,
      16: 'hjhj',
      17: 'www',
      18: 12,
      19: 'hjuhju',
    },
    {
      key: '2',
      1: 'John Brown',
      2: 32,
      3: 'New York ',
      4: 'hhh',
      5: 2122,
      6: 'hjhj',
      7: 'www',
      8: 12,
      9: 'hjuhju',
      10: 'jweiwj',
      11: 'John Brown',
      12: 32,
      13: 'New Yo',
      14: 'hhh',
      15: 2122,
      16: 'hjhj',
      17: 'www',
      18: 12,
      19: 'hjuhju',
    },
    {
      key: '3',
      1: 'John Brown',
      2: 32,
      3: 'New York ',
      4: 'hhh',
      5: 2122,
      6: 'hjhj',
      7: 'www',
      8: 12,
      9: 'hjuhju',
      10: 'jweiwj',
      11: 'John Brown',
      12: 32,
      13: 'New Yo',
      14: 'hhh',
      15: 2122,
      16: 'hjhj',
      17: 'www',
      18: 12,
      19: 'hjuhju',
    },
  ]

  const { Option } = Select;

  function onChange1(value) {
    console.log(`selected ${value}`);
    setRateLine(value)
  }

  function onChange2(value) {
    console.log(`selected ${value}`);
  }

  function onChange3(value) {
    console.log(`selected ${value}`);
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift:value
    })
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
  const dateFormat = 'YYYY年MM月DD日';

  return (
    <Spin
      spinning={loading2}
    >
      <div className="together2">
        <div className="menu-header">
          <div className="header-top">
            <div className="top-time">
              {time && <DatePicker style={{ width: '160px' }} defaultValue={moment('2020年' + time, dateFormat)} format={dateFormat} />}            </div>
            <div className="top-time">{info.week}</div>
            <div className="top-time">
              <Select
                className="pic"
                showSearch
                style={{
                  width: 90,
                  height: 32,
                  borderRadius: 3,
                  backgroundColor: 'rgba(255, 255, 255, 1) ',
                  marginRight: 15
                }}
                placeholder="请选择班次"
                optionFilterProp="children"
                onChange={onChange3}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                value={isLight}
              >
                {info.shifts && info.shifts.map(e => <Option key={e.value} value={e.key}>{e.value}</Option>
                )}

              </Select>
            </div>
          </div>
          <div className="header_center">
            <div className="center_select line">
              <Select
                showSearch
                style={{ width: 160, marginRight: 15 }}
                placeholder="请选择"
                optionFilterProp="children"
                onChange={onChange1}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                value={rateLine}
              >{
                  console.log(info.complete_rate)
                }
                {info.complete_rate && info.complete_rate.map(
                  (e, index) => <Option key={e.equipment_type_message} value={e.equipment_type_message}>{e.equipment_type_message}</Option>
                )}
              </Select>
            </div>
            <div className="center_number line"> 完成率({
              (rateLine === '旧线') ? info.complete_rate && info.complete_rate[0].rate : info.complete_rate && info.complete_rate[1].rate
            })
            <Button type='primary' className='btn' onClick={() => setVisible3(true)}>导出为Excel</Button>
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
                  onChange={onChange2}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {info.equipment && info.equipment.map(e => <Option key={e.name} value={e.name}>{e.name}</Option>
                  )}

                </Select>
                <Search placeholder="请输入客户名或规格型号"
                />
              </div>

            </div>
          </div>

        </div>
        <div className="together-content">
          <div className="showTable_mobile">
            <div className='table'>
              <div className='table_left'>
                <DatePicker className='line_input' placeholder='请输入维护时间' format={dateFormat} />
                <DatePicker className='line_input' placeholder='请输入异常停机时间' format={dateFormat} />
                <div className='product_name line_input'>C09</div>
                <div className='success_percent line_input'>完成率(<span>10</span>%)</div>
              </div>
              <div className='table_right'>
                <div className="table_container">
                  <div className='table_line'>
                    <div className='tabel_type'><p>正在生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={true} data={data1} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>将要生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false} data={data} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>已完成生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false} data={data} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>生产异常</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false} data={data} columns={columns} /></div>
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
          }} />
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
