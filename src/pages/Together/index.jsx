/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Button, Input, DatePicker, Spin, Select, Modal, Form, message, Tooltip, Pagination, Table
} from 'antd';
import DragSortingTable from '../../component/DragSortingTable'
import DragSortingTableMobile from '../../component/DragSortingTableMobile'
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import { sortableHandle } from 'react-sortable-hoc';
import { MenuOutlined } from '@ant-design/icons';
import FormModal from '../../component/FormModal';

import { request } from '../../api/request'
import moment from 'moment'

import './style.less';
//二维码
const QRCode = require('qrcode.react');

const DragHandle = sortableHandle(() => (
  <MenuOutlined style={{ cursor: 'pointer', color: '#999' }} />
));
const { Search } = Input;
const { RangePicker } = DatePicker;

const Together = (props) => {
  const [visible, setVisible] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);
  const [loading, setLoading] = useState(false);
  //分页
  const [current, setCurrent] = useState(1)
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
  const [type5, setType5] = useState(null)

  //时间
  const [time, setTime] = useState(null)

  //下载时间
  const [changeTime, setChangeTime] = useState(null)
  const [showWeima, setShowWeima] = useState(null)
  //导出维护时间xua
  const [changeTime3, setChangeTime3] = useState({ start: null, end: null })

  //导出异常时间
  const [changeTime4, setChangeTime4] = useState({ start: null, end: null })
  //显示二维码
  const [showDislog, showDialog] = useState(false)
  //qc数据
  const [QCData, setQCDate] = useState(null)

  //维护导出
  const [show3, setShow3] = useState(false)
  //异常导出
  const [show4, setShow4] = useState(false)
  //下一班的将要生产
  const [nextPre, setNextPre] = useState(null)
  //数据
  const [dataSource, setDataSource] = useState(null)
  //异常
  const [showReanson, setShowReason] = useState(false)
  //异常原因
  const [errorReason, setErrorReason] = useState(null)
  //异常的数据
  const [errdata, setErrdata] = useState(null)
  const handleGetInfo = async (obj) => {
    setLoading(true)
    const data = await getInfo(obj);
    setInfo(data);
    setType1(null)
    setType2(null)
    setType3(null)
    setType4(null)
    setDataSource(data)
    setIsLight(data.shift === '白班' ? 1 : 2)
    setTime(data.date);
    const ee = new Date().getFullYear() + '/' + data.date.split('月')[0] + '/' + data.date.split('月')[1].split('日')[0];
    setDateTime(new Date(ee).getTime() / 1000)
    const mm = data.list && data.list.list[0] && data.list.list[0].task;
    setTask(data.list && data.list.list[0] && data.list.list[0])
    if (mm) {
      mm.forEach((e, index) => {

        if (Number(e.status) === 1) {
          e.item.forEach((item, index) => {
            item.index = index;
          })
          setType1(e.item)
        }
        if (Number(e.status) === 2) {
          e.item.forEach((item, index) => {
            item.index = index;
          })
          setType2(e.item)
        }
        if (Number(e.status) === 3) {
          e.item.forEach((item, index) => {
            item.index = index;
          })
          setType3(e.item)
        }
        if (Number(e.status) === 4) {
          e.item.forEach((item, index) => {
            item.index = index;
          })
          setType4(e.item)
        }
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
  //下一班

  const handleGetInfoNext = async (obj) => {
    const data = await getInfo(obj);
    setType5(null)
    const mm = data.list && data.list.list[0] && data.list.list[0].task;
    if (mm) {
      mm.forEach(e => {
        if (Number(e.status) === 1) setType5(e.item)
      })
    }
    else {
      setType5(null)
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
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
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
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
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
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
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
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
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

  const handleGetHadCompletem = async (obj) => {
    const data = await getHadComplete(obj);
    if (Object.keys(data).length > 0) {
      setLoading(true)

      const ali = document.createElement('a');
      ali.download = "机器生产数据导出";
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

  //下载 qc
  const dowloadQc = (params) => {
    return request({
      method: 'get',
      url: '/task/export/qc',
      params: params
    })
  }

  const handleDowloadQc = async (obj) => {
    const data = await dowloadQc(obj);
    if (Object.keys(data).length > 0) {
      setLoading(true)
      const ali = document.createElement('a');
      ali.download = "qc数据";
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
      url: '/task/date/maintain',
      params: params  //post data:
    })
  }
  const getStop = (params) => {
    return request({
      method: 'get',
      url: '/task/date/anomaly',
      params: params  //post data:
    })
  }

  const handleGetWeihu = async (obj) => {
    await getWeihu(obj);
    handleGetInfo({
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
    })
  }
  const handleGetStop = async (obj) => {
    console.log(obj);
    await getStop(obj);
    handleGetInfo({
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
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
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
    })
    message.success('更新成功！')
  }



  useEffect(() => {
    handleGetInfo({
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId
    });
  }, [])

  const { Option } = Select;

  function onChange1(value) {
    setRateLine(value)
  }

  const onChange2 = (value) => {
    setLineId(value);
    handleGetInfo({
      page: current,
      pageSize: 1,
      day_shift: value,
      date: dateTime,
      equipment_id: value
    })
  }

  function onChange3(value) {
    setIsLight(value)
    handleGetInfo({
      page: current,
      pageSize: 1,
      day_shift: value,
      date: dateTime,
      // equipment_id: lineId
    })
  }

  function onSearch(val) {
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
    handleGetQc({ ...values, order_id: QCData })
  };

  //选择table项
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      const arr = [];
      selectedRows.forEach(e => {
        arr.push(e.order_id);
      }
      )
      setNextPre(arr.join('|'))
    },

    getCheckboxProps: record => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name,
    }),
  };

  const dateFormat = 'YYYY年MM月DD日';

  const changeTime1 = (e) => {
    if (e) {
      const time = e.format('YYYY-MM-DD');
      const timePicker = new Date(time).getTime() / 1000;
      setDateTime(timePicker)
      handleGetInfo({
        page: current,
        pageSize: 1,
        day_shift: isLight,
        date: timePicker,
        // equipment_id: lineId
      })
    }

  }

  //search for
  const changeSearch = (e) => {
    const val = e.target.value;
    handleGetInfo({
      page: 1,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
      search: val
    })
  }

  const changeSearch2 = (e) => {
    handleGetInfo({
      page: 1,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
      search: e
    })
  }

  const showQC = (record) => {
    setVisible(true);
    handleGetQC({
      order_id: record.order_id
    })
    setQCDate(record.order_id)
    setVisibleColumn(false)
  }

  const showReset = (record) => {
    handleRenew({
      order_id: record.order_id,
    })
    setVisibleColumn(false)

  }

  const showComplete = (record) => {
    handleCOmplete({
      order_id: record.order_id
    })
    setVisibleColumn(false)

  }

  const showError = () => {
    setShowReason(false)
    handleError({
      order_id: errdata.order_id,
      abnormal_comment: errorReason
    })
    setVisibleColumn(false)

  }

  const showCard = (record) => {
    setShowWeima(record.feed_id)
    setVisibleColumn(false)
    showDialog(true);

  }

  const showStart = (record) => {
    handleStart({
      order_id: record.order_id,
    })
    setVisibleColumn(false)

  }

  //删除
  // const showDelete = (record) => {
  // }


  //点击行
  const [clickData, setClickedData] = useState({});
  const [visibleColumn, setVisibleColumn] = useState(false);
  const clickColumn = (record) => {
    setVisibleColumn(true);
    setClickedData(record)
  }
  const handleClickerr = (record) => {
    setShowReason(true)
    setVisibleColumn(false)
    setErrdata(record)

  }

  const ActionRender = (text, record) => {
    const status = record.status;
    return (
      <div>

        {  (status === 3 || status === 2) ? <Button size="small" type="primary" onClick={() => showQC(record)}>QC</Button> : ''}
        {  status === 4 ? <Button size="small" type="primary" onClick={() => showReset(record)}>恢复</Button> : ''}
        {  status === 1 && !type2 ? <Button size="small" type="primary" onClick={() => showStart(record)}>开始</Button> : ''}

        {status === 2 ? <Button size="small" type="primary" onClick={() => showComplete(record)}>完成</Button> : ''}
        { (status === 2 || status === 1) ? <Button size="small" danger onClick={() => handleClickerr(record)}>异常</Button> : ''}
        { (status === 1 || status === 2 || status === 3) ? <Button size="small" danger onClick={() => showCard(record)}>二维码</Button> : ''}
        {/* {  status === 2 ? <Button size="small" type="primary" onClick={() => showDelete(record)}>删除</Button> : ''} */}


      </div>
    )

  }
  const columns = [
    {
      title: '序号',
      dataIndex: 'sort',
      key: 'sort',
      width: 100,
      className: 'drag-visible',
      render: (text, record, index) => <span> <DragHandle /> {text}</span>

    },
    {
      title: '销售订单',
      dataIndex: 'order_id',
      key: 'order_id',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: order_id => (
        <Tooltip placement="topLeft" title={order_id}>
          {order_id}
        </Tooltip>
      ),
    },
    {
      title: '购货单位',
      dataIndex: 'customer_name',
      key: 'customer_name',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: customer_name => (
        <Tooltip placement="topLeft" title={customer_name}>
          {customer_name}
        </Tooltip>
      ),
    },
    {
      title: '规格型号',
      dataIndex: 'customer_model',
      key: 'customer_model',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: customer_model => (
        <Tooltip placement="topLeft" title={customer_model}>
          {customer_model}
        </Tooltip>
      ),
    },
    {
      title: '产品规格(厚*宽*长*只)',
      dataIndex: 'product_model',
      key: 'product_model',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: product_model => (
        <Tooltip placement="topLeft" title={product_model}>
          {product_model}
        </Tooltip>
      ),
    },
    {
      title: '交货方式',
      dataIndex: 'delivery_type',
      key: 'delivery_type',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: delivery_type => (
        <Tooltip placement="topLeft" title={delivery_type}>
          {delivery_type}
        </Tooltip>
      ),
    },
    {
      title: '开始时间',
      dataIndex: 'start',
      key: 'start',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: start => (
        <Tooltip placement="topLeft" title={start}>
          {start}
        </Tooltip>
      ),
    },
    {
      title: '预计完成时间',
      dataIndex: 'pre_date',
      key: 'pre_date',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: pre_date => (
        <Tooltip placement="topLeft" title={pre_date}>
          {pre_date}
        </Tooltip>
      ),
    },
    {
      title: '完成时间',
      dataIndex: 'complete_date',
      key: 'complete_date',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: complete_date => (
        <Tooltip placement="topLeft" title={complete_date}>
          {complete_date}
        </Tooltip>
      ),
    },
    {
      title: '条码物料名称',
      dataIndex: 'code_materials_name',
      key: 'code_materials_name',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: code_materials_name => (
        <Tooltip placement="topLeft" title={code_materials_name}>
          {code_materials_name}
        </Tooltip>
      ),
    },
    {
      title: '投料单单号',
      dataIndex: 'feed_id',
      key: 'feed_id',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: feed_id => (
        <Tooltip placement="topLeft" title={feed_id}>
          {feed_id}
        </Tooltip>
      ),
    },
    {
      title: '总平方数',
      dataIndex: 'square',
      key: 'square',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: square => (
        <Tooltip placement="topLeft" title={square}>
          {square}
        </Tooltip>
      ),
    },
    // {
    //   title: '交货日期',
    //   dataIndex: 'customer_require_date',
    //   key: 'customer_require_date',
    //   width: 100,
    //   ellipsis: {
    //     showTitle: false,
    //   },
    //   render: customer_require_date => (
    //     <Tooltip placement="topLeft" title={customer_require_date}>
    //       {customer_require_date}
    //     </Tooltip>
    //   ),
    // },
    {
      title: '提供生产批号',
      dataIndex: 'support_create_number',
      key: 'support_create_number',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: support_create_number => (
        <Tooltip placement="topLeft" title={support_create_number}>
          {support_create_number}
        </Tooltip>
      ),
    },
    {
      title: '是否可接膜',
      dataIndex: 'is_add_membrane',
      key: 'is_add_membrane',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: is_add_membrane => (
        <Tooltip placement="topLeft" title={is_add_membrane}>
          {is_add_membrane}
        </Tooltip>
      ),
    },
    {
      title: '是否可多米',
      dataIndex: 'is_more_mi',
      key: 'is_more_mi',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: is_more_mi => (
        <Tooltip placement="topLeft" title={is_more_mi}>
          {is_more_mi}
        </Tooltip>
      ),
    },
    {
      title: '是否可少米',
      dataIndex: 'is_less_mi',
      key: 'is_less_mi',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: is_less_mi => (
        <Tooltip placement="topLeft" title={is_less_mi}>
          {is_less_mi}
        </Tooltip>
      ),
    },
    {
      title: '是否可彩纹印',
      dataIndex: 'is_color_printing',
      key: 'is_color_printing',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: is_color_printing => (
        <Tooltip placement="topLeft" title={is_color_printing}>
          {is_color_printing}
        </Tooltip>
      ),
    },
    {
      title: '是否可换规格',
      dataIndex: 'is_change_specification',
      key: 'is_change_specification',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: is_change_specification => (
        <Tooltip placement="topLeft" title={is_change_specification}>
          {is_change_specification}
        </Tooltip>
      ),
    },
    {
      title: '长',
      dataIndex: 'length',
      key: 'length',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: length => (
        <Tooltip placement="topLeft" title={length}>
          {length}
        </Tooltip>
      ),
    },
    {
      title: '宽',
      dataIndex: 'width',
      key: 'width',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: width => (
        <Tooltip placement="topLeft" title={width}>
          {width}
        </Tooltip>
      ),
    },
    {
      title: '扣减数',
      dataIndex: 'decuction_number',
      key: 'decuction_number',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: decuction_number => (
        <Tooltip placement="topLeft" title={decuction_number}>
          {decuction_number}
        </Tooltip>
      ),
    },
    {
      title: '仓库',
      dataIndex: 'store',
      key: 'store',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: store => (
        <Tooltip placement="topLeft" title={store}>
          {store}
        </Tooltip>
      ),
    },
    {
      title: '是否抵消',
      dataIndex: 'is_offset',
      key: 'is_offset',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: is_offset => (
        <Tooltip placement="topLeft" title={is_offset}>
          {is_offset}
        </Tooltip>
      ),
    },
    {
      title: '线别名称',
      dataIndex: 'code_materials',
      key: 'code_materials',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: code_materials => (
        <Tooltip placement="topLeft" title={code_materials}>
          {code_materials}
        </Tooltip>
      ),
    },
    {
      title: '预计入库时间',
      dataIndex: 'code_materials_befor',
      key: 'code_materials_befor',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: code_materials_befor => (
        <Tooltip placement="topLeft" title={code_materials_befor}>
          {code_materials_befor}
        </Tooltip>
      ),
    },

    {
      title: '管材类型',
      dataIndex: 'pipe_type',
      key: 'pipe_type',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: pipe_type => (
        <Tooltip placement="topLeft" title={pipe_type}>
          {pipe_type}
        </Tooltip>
      ),
    },
    {
      title: '行业',
      dataIndex: 'customer_use_industry',
      key: 'customer_use_industry',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: customer_use_industry => (
        <Tooltip placement="topLeft" title={customer_use_industry}>
          {customer_use_industry}
        </Tooltip>
      ),
    },

    {
      title: '备注',
      dataIndex: 'comment26',
      key: 'comment26',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: comment26 => (
        <Tooltip placement="topLeft" title={comment26}>
          {comment26}
        </Tooltip>
      ),
    },
    {
      title: '异常备注',
      dataIndex: 'abnormal_comment',
      key: 'abnormal_comment',
      width: 100,
      ellipsis: {
        showTitle: false,
      },
      render: abnormal_comment => (
        <Tooltip placement="topLeft" title={abnormal_comment}>
          {abnormal_comment}
        </Tooltip>
      ),
    },
    {
      title: '操作',
      width: 300,
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
      date: changeTime,

    })
  }
  const handleCancelm = () => {
    setVisible3(false)
    handleGetHadCompletem({
      date: dateTime,
      day_shift: isLight,
      equment_id: lineId || (dataSource.list && dataSource.list.list[0] && dataSource.list.list[0].id)
    })
  }

  //qc
  const handleQc = () => {
    setVisible3(false)
    handleDowloadQc({
      date: changeTime
    })
  }

  //选择时间
  const handleChangeTime = (e) => {
    if (e) {
      const time = e.format('YYYY-MM-DD');
      const timePicker = new Date(time).getTime() / 1000;
      setChangeTime(timePicker)
    } else {
      setChangeTime(null)

    }
  }

  //选择维护时间
  const handleChangeTime3 = (e) => {
    if (e) {
      const start = e[0].format('YYYY-MM-DD');
      const end = e[1].format('YYYY-MM-DD');
      setChangeTime3({ start, end })
    } else {
      setChangeTime3({ start: null, end: null })
    }

  }
  //输入异常原因
  const handleChangeReason = (e) => {
    const val = e.target.value;
    setErrorReason(val)
  }
  //选择异常时间
  const handleChangeTime4 = (e) => {
    if (e) {
      const start = e[0].format('YYYY-MM-DD');
      const end = e[1].format('YYYY-MM-DD');
      setChangeTime4({ start, end })
    } else {
      setChangeTime4({ start: null, end: null })
    }

  }
  //维护
  const handleChangeWeihu = (e) => {
    if (e) {
      const start = e[0].format('YYYY-MM-DD H:m');
      const end = e[1].format('YYYY-MM-DD H:m');
      handleGetWeihu({
        equipment_id: lineId || (dataSource.list && dataSource.list.list[0] && dataSource.list.list[0].id),
        start,
        end
      })
    }
  }
  //异常停机

  const handleChangeStop = (e) => {
    if (e) {
      const start = e[0].format('YYYY-MM-DD H:m');
      const end = e[1].format('YYYY-MM-DD H:m');
      handleGetStop({
        equipment_id: lineId || (dataSource.list && dataSource.list.list[0] && dataSource.list.list[0].id),
        start,
        end
      })
    }
  }

  const handleOk2 = () => {
    setVisible(false)
    form.submit();
  }
  const dowloadWeihu = (params) => {
    return request({
      method: 'get',
      url: '/task/export/date/maintain',
      params: params
    })

  }
  const dowloadWeihu4 = (params) => {
    return request({
      method: 'get',
      url: ' /task/export/date/anomaly',
      params: params
    })

  }

  const handledownloadWeihu = async (obj) => {
    const data = await dowloadWeihu(obj);
    if (Object.keys(data).length > 0) {
      setLoading(true)

      const ali = document.createElement('a');
      ali.download = "维护时间导出";
      ali.href = data.file;
      const event = new MouseEvent('click');
      ali.dispatchEvent(event);
      setLoading(false);
    }

    else {
      message.error('当前时间暂无数据')
    }
  }
  const handledownloadWeihu4 = async (obj) => {
    const data = await dowloadWeihu4(obj);
    if (Object.keys(data).length > 0) {
      setLoading(true)

      const ali = document.createElement('a');
      ali.download = "维护时间导出";
      ali.href = data.file;
      const event = new MouseEvent('click');
      ali.dispatchEvent(event);
      setLoading(false);
    }

    else {
      message.error('当前时间暂无数据')
    }
  }
  const handleOk3 = async () => {
    setShow3(false);
    handledownloadWeihu(changeTime3)
  }
  const handleOk4 = async () => {
    setShow4(false);
    handledownloadWeihu4(changeTime4)
  }
  const handleCancel3 = () => {
    setShow3(false)
  }
  const handleCancel4 = () => {
    setShow4(false)
  }
  const changePage = (e) => {
    setCurrent(e);
    handleGetInfo({
      page: e,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
    })

  }

  const nextLine = () => {
    setVisible2(true);
    handleGetInfoNext({
      page: 1,
      pageSize: 1,
      day_shift: isLight === 1 ? 2 : 1,
      date: isLight === 1 ? dateTime : dateTime + 24 * 60 * 60,
      equipment_id: lineId || (dataSource.list && dataSource.list.list[0] && dataSource.list.list[0].id),
    })

  }
  const addNext = (params) => {
    return request({
      method: 'post',
      url: '/task/add',
      params: params  //post data:
    })
  }
  const handleAddNext = async (obj) => {
    await addNext(obj);
    handleGetInfo({
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
    })
    message.success("切换至本班成功！")

  }
  //下一班
  const handleOkNext = () => {
    setVisible2(false);
    handleAddNext({
      order_id: nextPre,
      date: dateTime,
      day_shift: isLight,
      equment_id: lineId
    })
  }

  //拖拽
  const moveLine = (params) => {
    return request({
      method: 'get',
      url: '/task/move',
      params: params  //post data:
    })
  }

  const handleMove = async (obj) => {
    await moveLine(obj);
    handleGetInfo({
      page: current,
      pageSize: 1,
      day_shift: isLight,
      date: dateTime,
      // equipment_id: lineId,
    })
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
            <div className="top-time" style={{
              width: '30%',
              textAlign: 'right'
            }}>
              生产二部分条实时显示
            </div>
          </div>
          <div>

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
            <div className="center_number line">
              完成率({
                (rateLine === '旧线') ? info.complete_rate && info.complete_rate[0].rate : info.complete_rate && info.complete_rate[1].rate
              })
            <Button type='primary' className='btn' onClick={() => setVisible3(true)}>导出生产数据</Button>
            </div>
          </div>
        </div>
        <div className="pan">
          <div className="search">
            <div className="line">
              <p className="pic">机器号</p>
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
                  placeholder="请选择机器号"
                  optionFilterProp="children"
                  onChange={onChange2}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                  }
                // value={lineId}
                >
                  {info.equipment && info.equipment.map(e => <Option key={e.name} value={e.id}>{e.name}</Option>
                  )}

                </Select>
              </div>
            </div>
            <div className="line">
              <p className="pic">搜索</p>
              <div className='input_wrap'>
                <Search placeholder="请输入客户名或规格型号"
                  onChange={changeSearch}
                  onSearch={changeSearch2}
                  style={{
                    width: 290,
                    marginLeft: '10px'

                  }}

                />
                <Button type="primary" style={{ marginLeft: 50 }} onClick={nextLine}>下一班将要生产</Button>
              </div>
            </div>
          </div>

        </div>
        <div className="together-content">
          <div className="showTable_mobile">
            <div className='table'>
              <div className='table_left'>
                <p style={{ margin: '0', position: 'absolute', marginLeft: '10px', color: '#4e4b4b' }}>请输入维护时间:</p>
                <RangePicker showTime className='line_input' onChange={handleChangeWeihu} style={{ marginTop: '30px' }} />
                <Button type="primary" style={{ margin: '0 10px 10px 10px' }} onClick={() => setShow3(true)}>维护时间导出</Button>
                <p style={{ margin: '0', position: 'absolute', marginLeft: '10px', color: '#4e4b4b' }}>请输入异常停机时间:</p>

                <RangePicker showTime className='line_input' onChange={handleChangeStop} style={{ marginTop: '30px' }} />
                <Button type="primary" style={{ margin: '0 10px 10px 10px' }} onClick={() => setShow4(true)}>异常停机导出</Button>

                <div className='product_name line_input'>{task && task.name}</div>
                {task && <div className='success_percent line_input'>完成率({task.rate})</div>
                }
                <Button type="primary" style={{ margin: '0 10px 10px 10px' }} onClick={handleCancelm}>本机器生产数据导出</Button>
              </div>
              <div className='table_right'>
                <div className="table_container_left">
                  <div className='tabel_type'><p>正在生产</p></div>
                  <div className='tabel_type'><p>将要生产</p></div>
                  <div className='tabel_type'><p>已完成生产</p></div>
                  <div className='tabel_type'><p>生产异常</p></div>

                </div>
                {props.isPc ? <div className="table_container">
                  <div className='table_line'>
                    {/* <div className='tabel_type'><p>正在生产</p></div> */}
                    <div className="type_table"> <DragSortingTable clickColumn={clickColumn} moveLine={handleMove} showHeader={true} data={type2} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    {/* <div className='tabel_type'><p>将要生产</p></div> */}
                    <div className="type_table"> <DragSortingTable clickColumn={clickColumn} moveLine={handleMove} showHeader={false} data={type1} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    {/* <div className='tabel_type'><p>已完成生产</p></div> */}
                    <div className="type_table"> <DragSortingTable clickColumn={clickColumn} moveLine={handleMove} showHeader={false} data={type3} columns={columns} pagination={false} /></div>
                  </div>
                  <div className='table_line'>
                    {/* <div className='tabel_type'><p>生产异常</p></div> */}
                    <div className="type_table"> <DragSortingTable clickColumn={clickColumn} moveLine={handleMove} showHeader={false} data={type4} columns={columns} /></div>
                  </div>
                </div> :
                  <div className="table_container">
                    <div className='table_line'>
                      <div className="type_table"> <DragSortingTableMobile clickColumn={clickColumn} moveLine={handleMove} showHeader={true} data={type2} columns={columns} pagination={false} /> </div>
                    </div>
                    <div className='table_line'>
                      <div className="type_table"> <DragSortingTableMobile clickColumn={clickColumn} moveLine={handleMove} showHeader={false} data={type1} columns={columns} pagination={false} /></div>
                    </div>
                    <div className='table_line'>
                      <div className="type_table"> <DragSortingTableMobile clickColumn={clickColumn} moveLine={handleMove} showHeader={false} data={type3} columns={columns} pagination={false} /></div>
                    </div>
                    <div className='table_line'>
                      <div className="type_table"> <DragSortingTableMobile clickColumn={clickColumn} moveLine={handleMove} showHeader={false} data={type4} columns={columns} /></div>
                    </div>
                  </div>
                }
              </div>

            </div>
            {
              info.list && info.list.total && <Pagination
                defaultCurrent={current}
                total={info.list && info.list.total}
                // total={25}
                pageSize={1}
                onChange={changePage} />
            }


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
            <Form.Item name="scrap" label="正常报废（平方米）">
              <Input />
            </Form.Item>
            <Form.Item name="scrap_anomaly" label="异常报废（平方米）">
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
          onOk={handleOkNext}
          onCancel={() => setVisible2(false)}
          width={1080}
          bodyStyle={{
            height: '300px',
            overflowY: 'scroll',
          }}
        >
          <Table
            columns={columns}
            dataSource={type5}
            rowSelection={{
              ...rowSelection,
            }}

            // scroll={{y:'300px'}}
            rowKey={(e) => e.order_id}
          />

        </Modal>
        <Modal title='请选择日期'
          visible={visible3}
          // okText='下载生产异常清单'
          // cancelText="下载生产已完成清单"
          // onOk={handleOk}
          onCancel={() => setVisible3(false)}
          width={600}
          footer={<div>
            <Button onClick={handleOk}>下载生产异常清单</Button>
            <Button onClick={handleCancel}>下载生产已完成清单</Button>
            <Button onClick={handleQc}>下载qc数据</Button>
            <Button onClick={() => setVisible3(false)}>取消</Button>
          </div>}
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

        <Modal title='异常停机导出'
          visible={show4}
          okText='导出'
          cancelText="取消"
          onOk={handleOk4}
          onCancel={handleCancel4}
          width={500}
        >
          <RangePicker style={{ marginLeft: 15, width: 300 }} onChange={handleChangeTime4} format={"YYYY-MM-DD"} />
        </Modal>

        <Modal title='请选择导出维护时间'
          visible={show3}
          okText='导出'
          cancelText="取消"
          onOk={handleOk3}
          onCancel={handleCancel3}
          width={500}
        >
          <RangePicker style={{ marginLeft: 15, width: 300 }} onChange={handleChangeTime3} format={"YYYY-MM-DD"} />
        </Modal>

        <Modal title='请输入异常理由'
          visible={showReanson}
          okText='确认'
          cancelText="取消"
          onOk={showError}
          onCancel={() => {
            setShowReason(false);
            setVisibleColumn(false)
          }}
          width={500}
        >
          <Input style={{ marginLeft: 15, width: 300 }} onChange={handleChangeReason} />
        </Modal>

        <FormModal
          clickData={clickData}
          type2={type2}
          showQC={showQC}
          showReset={showReset}
          showStart={showStart}
          showComplete={showComplete}
          showError={() => setShowReason(true)}
          showCard={showCard}
          visibleColumn={visibleColumn}
          setVisibleColumn={setVisibleColumn}
          handleClickerr={handleClickerr}
        />
      </div>

    </Spin>


  );
};
export default connect(mapStateToProps, mapDispatchToProps)(Together)

