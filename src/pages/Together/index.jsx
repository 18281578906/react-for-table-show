/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Button, Input, DatePicker, Spin, Select, Modal, Form, message
} from 'antd';
import DragSortingTable from '../../component/DragSortingTable'
import { request } from '../../api/request'
import moment from 'moment'
import './style.less';
//二维码
const QRCode = require('qrcode.react');

const { Search } = Input;
const { RangePicker } = DatePicker;

const Together = (props) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [loading, setLoading] = useState(false);

  //info过滤
  const [dateTime, setDateTime] = useState(null);
  const [isLight, setIsLight] = useState(null)

  const [info, setInfo] = useState({});
  //选择新旧线
  const [rateLine, setRateLine] = useState(null)
  //选择生产线 //设备id
  const [lineId, setLineId] = useState(null)
  //list数据
  const [task, setTask] = useState([])
  //生产状态
  const [type1, setType1] = useState(null)//1 将要生产 2.正在生产 3.已完成生产 4.生产异常
  const [type2, setType2] = useState(null)
  const [type3, setType3] = useState(null)
  const [type4, setType4] = useState(null)
  //时间
  const [time, setTime] = useState(null)

  //下载时间
  const [changeTime, setChangeTime] = useState(null)
  const [showWeima, setShowWeima] = useState(null)

  //显示二维码
  const [showDislog, showDialog] = useState(false)
  //qc数据
  const [QCData, setQCDate] = useState(null)
  const handleGetInfo = async (obj) => {
    setLoading(true)
    const data = await getInfo(obj);
    setInfo(data);
    setIsLight(data.shift === '白班' ? 1 : 2)
    setTime(data.date);
    const mm = data.list && data.list.list[0] && data.list.list[0].task;
    setTask(data.list && data.list.list[0] && data.list.list[0])
    if (mm) {
      mm.forEach(e => {
        if (Number(e.status) === 1) setType1(e.item)
        if (Number(e.status) === 2) setType2(e.item)
        if (Number(e.status) === 3) setType3(e.item)
        if (Number(e.status) === 4) setType4(e.item)
      })
    }
    else {
      setType1(null);
      setType2(null)
      setType3(null)
      setType4(null)
    }
    setLoading(false)

  }
  //调用数据
  const getInfo = (params) => {
    return request({
      method: 'get',
      url: '',
      params: params  //post data:
    })
  }

  const getComplete = (params) => {
    return request({
      method: 'get',
      url: '/task/complete',
      params: params  //post data:
    })
  }
  const handleCOmplete = async (obj) => {
    await getComplete(obj);
    message.success('状态更新成功！')
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
    })
  }

  const getError = (params) => {
    return request({
      method: 'get',
      url: '/task/anomaly',
      params: params  //post data:
    })
  }
  const handleError = async (obj) => {
    await getError(obj);
    message.success('状态更新成功！')
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
    })

  }
  const getStart = (params) => {
    return request({
      method: 'get',
      url: '/task/start',
      params: params  //post data:
    })
  }
  const handleStart = async (obj) => {
    await getStart(obj);
    message.success('状态更新成功！');
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
    })

  }

  const getRenew = (params) => {
    return request({
      method: 'get',
      url: '/task/renew',
      params: params  //post data:
    })
  }
  const handleRenew = async (obj) => {
    await getRenew(obj);
    message.success('状态更新成功！');
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
    })

  }
  //QC
  const getQC = (params) => {
    return request({
      method: 'get',
      url: '/task/qc',
      params: params  //post data:
    })
  }
  const handleGetQC = async (obj) => {
    const data = await getQC(obj);
    if (data) {
      form.setFieldsValue({
        create_number: data.qc.create_number,
        order_id: obj.order_id,
        request_release_force: data.qc.request_release_force,
        ply: data.qc.ply,
        width: data.qc.width,
        length: data.qc.length,
        release_force: data.qc.release_force,
        coat_release_force: data.qc.coat_release_force,
        pipe: data.qc.pipe,
        winding_bad: data.qc.winding_bad,
        scratch: data.qc.scratch,
        wrinkled: data.qc.wrinkled,
        dirty: data.qc.dirty,
        batch_number: data.qc.batch_number,
        create_roll_number: data.qc.create_roll_number,
        judgment: data.qc.judgment,
        user: data.qc.user,
        comment: data.qc.comment,
        customer_name: data.info.customer_name,
        equipment_name: data.info.equipment_name,
        product_model: data.info.product_model,
      })
    }

  }

  //下载已完成
  const getHadComplete = (params) => {
    return request({
      method: 'get',
      url: '/task/export/complete',
      params: params  //post data:
    })
  }
  const handleGetHadComplete = async (obj) => {
    const data = await getHadComplete(obj);
    if (Object.keys(data).length > 0) {
      setLoading(true)

      const ali = document.createElement('a');
      ali.download = "已完成清单";
      ali.href = data.file;
      const event = new MouseEvent('click');
      ali.dispatchEvent(event);
      setLoading(false);
    }
    else {
      message.error('当前时间暂无数据')
    }
  }

  //下载 异常清单
  const getHadError = (params) => {
    return request({
      method: 'get',
      url: '/task/export/anomaly',
      params: params  //post data:
    })
  }
  const handleGetHadError = async (obj) => {
    const data = await getHadError(obj);
    if (Object.keys(data).length > 0) {
      setLoading(true)

      const ali = document.createElement('a');
      ali.download = "异常清单";
      ali.href = data.file;
      const event = new MouseEvent('click');
      ali.dispatchEvent(event);
      setLoading(false);
    } else {
      message.error('当前时间暂无数据')
    }
  }

  //维护时间
  const getWeihu = (params) => {
    return request({
      method: 'get',
      url: '/task/export/anomaly',
      params: params  //post data:
    })
  }
  const handleGetWeihu = async (obj) => {
    await getWeihu(obj);
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
    })
  }
  //qc更新
  const getQc = (params) => {
    return request({
      method: 'post',
      url: '/task/qc/update',
      params: params  //post data:
    })
  }
  const handleGetQc = async (obj) => {
    await getQc(obj);
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
    })
    message.success('更新成功！')
  }



  useEffect(() => {
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId
    });
  }, [])

  const { Option } = Select;

  function onChange1(value) {
    console.log(`selected ${value}`);
    setRateLine(value)
  }

  function onChange2(value) {
    console.log(`selected ${value}`);
    setLineId(value);
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: value,
      date: dateTime,
      equipment_id: value
    })
  }

  function onChange3(value) {
    console.log(`selected ${value}`);
    setIsLight(value)
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: value,
      date: dateTime,
      equipment_id: lineId
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
    delete values.customer_name;
    delete values.equipment_name;
    delete values.product_model;
    handleGetQc({...values,order_id:QCData })
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
  const changeTime1 = (e) => {
    const time = e.format('YYYY-MM-DD');
    const timePicker = new Date(time).getTime() / 1000;
    setDateTime(timePicker)
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: timePicker,
      equipment_id: lineId
    })
  }
  //search for
  const changeSearch = (e) => {
    const val = e.target.value;
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
      search: val
    })
  }
  const changeSearch2 = (e) => {
    handleGetInfo({
      page: 1,
      pageSize: 10,
      day_shift: isLight,
      date: dateTime,
      equipment_id: lineId,
      search: e
    })
  }

  const showQC = (record) => {
    setVisible(true);
    handleGetQC({
      order_id: record.order_id
    })
    setQCDate(record.order_id)
  }
  const showReset = (record) => {
    handleRenew({
      order_id: record.order_id,

    })
  }
  const showComplete = (record) => {
    handleCOmplete({
      order_id: record.order_id
    })
  }
  const showError = (record) => {
    handleError({
      order_id: record.order_id,
      abnormal_comment: record.abnormal_comment

    })
  }
  const showCard = (record) => {
    console.log(record);
    setShowWeima(record.feed_id)
    showDialog(true)

  }
  const showStart = (record) => {
    handleStart({
      order_id: record.order_id,
    })
  }
  //删除
  // const showDelete = (record) => {
  // }
  const ActionRender = (text, record) => {
    const status = record.status;
    return (
      <div>

        {  status === 3 ? <Button size="small" type="primary" onClick={() => showQC(record)}>QC</Button> : ''}
        {  status === 4 ? <Button size="small" type="primary" onClick={() => showReset(record)}>恢复</Button> : ''}
        {  status === 1 ? <Button size="small" type="primary" onClick={() => showStart(record)}>开始</Button> : ''}

        {status === 2 ? <Button size="small" type="primary" onClick={() => showComplete(record)}>完成</Button> : ''}
        { (status === 2) ? <Button size="small" danger onClick={() => showError(record)}>异常</Button> : ''}
        { (status === 1 || status === 2 || status === 3) ? <Button size="small" danger onClick={() => showCard(record)}>二维码</Button> : ''}
        {/* {  status === 2 ? <Button size="small" type="primary" onClick={() => showDelete(record)}>删除</Button> : ''} */}


      </div>
    )

  }
  const columns = [
    {
      title: '序号',
      width: 200,
      render: (text, record, index) => <span>{index + 1}</span>
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
      width: 200,
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
      dataIndex: 'is_add_membrane',
      key: 'is_add_membrane',
      width: 200
    },
    {
      title: '是否可多米',
      dataIndex: 'is_more_mi',
      key: 'is_more_mi',
      width: 200
    },
    {
      title: '是否可少米',
      dataIndex: 'is_less_mi',
      key: 'is_less_mi',
      width: 200
    },
    {
      title: '是否可彩纹印',
      dataIndex: 'is_color_printing',
      key: 'is_color_printing',
      width: 200
    },
    {
      title: '是否可换规格',
      dataIndex: 'is_change_specification',
      key: 'is_change_specification',
      width: 200
    },
    {
      title: '备注',
      dataIndex: 'comment26',
      key: 'comment26',
      width: 200
    },
    {
      title: '异常备注',
      dataIndex: 'abnormal_comment',
      key: 'abnormal_comment',
      width: 200
    },
    {
      title: '操作',
      width: 300,
      fixed: 'right',
      render: (text, record) => ActionRender(text, record)
    },
  ];
  const handleOk = () => {
    setVisible3(false)
    handleGetHadError({
      date: changeTime
    })


  }
  const handleCancel = () => {
    setVisible3(false)
    handleGetHadComplete({
      date: changeTime
    })

  }

  //选择时间
  const handleChangeTime = (e) => {
    console.log(e);
    const time = e.format('YYYY-MM-DD');
    const timePicker = new Date(time).getTime() / 1000;
    setChangeTime(timePicker)
  }

  //维护
  const handleChangeWeihu = (e) => {
    const start = e[0].format('YYYY-MM-DD H:m');
    const end = e[1].format('YYYY-MM-DD H:m');
    handleGetWeihu({
      equipment_id: lineId,
      start,
      end

    })



  }
  //异常停机

  const handleChangeStop = (e) => {
    const start = e[0].format('YYYY-MM-DD H:m');
    const end = e[1].format('YYYY-MM-DD H:m');

    console.log(start, end);

  }

  const handleOk2 = () => {
    setVisible(false)
    form.submit();
  }
  return (
    <Spin
      spinning={loading}
    >
      <div className="together2">
        <div className="menu-header">
          <div className="header-top">
            <div className="top-time">
              {time && <DatePicker style={{ width: '160px' }} onChange={changeTime1} defaultValue={moment('2020年' + time, dateFormat)} format={dateFormat} />}            </div>
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
                style={{ width: 100, marginRight: 15 }}
                placeholder="请选择"
                optionFilterProp="children"
                onChange={onChange1}
                onSearch={onSearch}
                filterOption={(input, option) =>
                  option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
                value={rateLine}
              >
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
                  value={lineId}
                >
                  {info.equipment && info.equipment.map(e => <Option key={e.name} value={e.id}>{e.name}</Option>
                  )}

                </Select>
                <Search placeholder="请输入客户名或规格型号"
                  onChange={changeSearch}
                  onSearch={changeSearch2}
                />
              </div>

            </div>
          </div>

        </div>
        <div className="together-content">
          <div className="showTable_mobile">
            <div className='table'>
              <div className='table_left'>
                <p style={{margin:'0',position:'absolute',marginLeft:'10px',color:'#4e4b4b'}}>请输入维护时间:</p>
                <RangePicker showTime className='line_input' onChange={handleChangeWeihu} style={{marginTop:'30px'}}/>
                <p style={{margin:'0',position:'absolute',marginLeft:'10px',color:'#4e4b4b'}}>请输入异常停机时间:</p>

                <RangePicker showTime className='line_input' nChange={handleChangeStop}  style={{marginTop:'30px'}}/>
                <div className='product_name line_input'>{task && task.name}</div>
                {task && <div className='success_percent line_input'>完成率({task.rate})</div>
                }              </div>
              <div className='table_right'>
                <div className="table_container">
                  <div className='table_line'>
                    <div className='tabel_type'><p>正在生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={true} data={type2} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>将要生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false} data={type1} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>已完成生产</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false} data={type3} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    <div className='tabel_type'><p>生产异常</p></div>
                    <div className="type_table"> <DragSortingTable showHeader={false} data={type4} columns={columns} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <Modal title={'qc数据'}
          visible={visible}
          okText='确认'
          cancelText="取消"
          onOk={handleOk2}
          onCancel={() => setVisible(false)}
          bodyStyle={{
            height: '500px',
            overflowY: 'scroll'
          }}
        >
          <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>
            <Form.Item name="customer_name" label="购货单位" >
              <Input disabled />
            </Form.Item>
            <Form.Item name="equipment_name" label="设备名称" >
              <Input disabled />
            </Form.Item>
            <Form.Item name="product_model" label="产品规格(厚*宽*长*只)">
              <Input disabled />
            </Form.Item>
            <Form.Item name="create_number" label="生产批号" >
              <Input />
            </Form.Item>
            <Form.Item name="request_release_force" label="要求离型力" >
              <Input />
            </Form.Item>
            <Form.Item name="ply" label="厚度">
              <Input />
            </Form.Item>
            <Form.Item name="width" label="宽度">
              <Input />
            </Form.Item>
            <Form.Item name="length" label="长度">
              <Input />
            </Form.Item>
            <Form.Item name="release_force" label="实测离型力">
              <Input />
            </Form.Item>
            <Form.Item name="coat_release_force" label="涂布离型力">
              <Input />
            </Form.Item>
            <Form.Item name="pipe" label="内管" >
              <Input />
            </Form.Item>

            <Form.Item name="winding_bad" label="收卷 不良" >
              <Input />
            </Form.Item>
            <Form.Item name="scratch" label="擦花" >
              <Input />
            </Form.Item>
            <Form.Item name="wrinkled" label="压痕/褶皱" >
              <Input />
            </Form.Item>
            <Form.Item name="dirty" label="脏污/白印">
              <Input />
            </Form.Item>
            <Form.Item name="batch_number" label="接头/批号说明">
              <Input />
            </Form.Item>
            <Form.Item name="create_roll_number" label="生产卷数" >
              <Input />
            </Form.Item>
            <Form.Item name="judgmen" label="判定" >
              <Input />
            </Form.Item>
            <Form.Item name="user" label="检验员">
              <Input />
            </Form.Item>
            <Form.Item name="comment" label="备注" >
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
          <DragSortingTable showHeader={true} columns={columns} data={type1} rowSelection={{
            ...rowSelection,
          }} />
        </Modal>
        <Modal title='请选择日期'
          visible={visible3}
          okText='下载异常清单'
          cancelText="下载已完成清单"
          onOk={handleOk}
          onCancel={handleCancel}
          width={400}
        >
          <DatePicker placeholder='请选择时间' style={{ marginLeft: 15, width: 300 }} onChange={handleChangeTime} format={dateFormat} />
        </Modal>

        <Modal title='二维码'
          visible={showDislog}
          okText='确定'
          cancelText="取消"
          onOk={() => showDialog(false)}
          onCancel={() => showDialog(false)}
          width={300}
          bodyStyle={{
            textAlign: 'center',

          }}
          footer={null}
        >
          <QRCode value={showWeima} size={200} onClick={() => showDialog(true)} />
        </Modal>
      </div>

    </Spin>


  );
};
export default Together;
