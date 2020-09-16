import React, { useState, useEffect } from 'react';
import {
  Button, Input, DatePicker, Table, Spin, Statistic
} from 'antd';
import { request } from '../../api/request'
import moment from 'moment';
import HeaderAccount from '../../component/HeaderAccount'
import { PhotoProvider ,PhotoSlider} from 'react-photo-view';
import {
  UndoOutlined
} from '@ant-design/icons';

import './style.less';



const { Search } = Input;
const { RangePicker } = DatePicker;
const Together = () => {
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [totalInfo, setTotalInfo] = useState(null);
  const [url,setUrl]=useState([])
  const [shopId, setShopId] = useState(0);
  const [list, setList] = useState([]);
  const [pageobj, setPageObj] = useState({
    page: 1,
    pageSize: 10
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
  const getData = (params) => {
    return request({
      method: 'post',
      url: '/merchant/v1/shop/shop/together/code',
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

  //头部数据
  const handleGetData = async (obj) => {
    setLoading2(true)
    const data = await getData(obj);
    setTotalInfo(data)
    setLoading2(false)
    setUrl([data.url])
  }
  //店铺id
  const handleGetShop = async () => {
    const data = await getShopInfo();
    if (data) {
      const obj = {
        shop_id: data.shop.shop_id,
        page: pageobj.page,
        pageSize: pageobj.pageSize,
      }
      handleGetData(obj);
      handleGetList(obj);
      setShopId(data.shop.shop_id)

    }
  }

  useEffect(() => {
    handleGetShop();
  }, [])
  const [keyValue, setKeyValue] = useState('');
  const [orderNum, setOrderNum] = useState('');
  // const [timeRange, setTimeRange] = useState(null);
  const clearPage = () => {
    setPageObj({
      page: 1,
      pageSize: 10,
    })
  }
  const onReset = () => {
    setKeyValue(new Date());
    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 10,
    });
    clearPage();
  };
  const onResetOrder = () => {
    setOrderNum(null);
    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 10,
    });
    clearPage();

  };
  const changeOrderNum = (e) => {
    setOrderNum(e.target.value);
    const val = e.target.value;
    console.log(val);
    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 10,
      pay_order_id: val,

    });
  };
  const RenderPayType = (text) => {
    let val = '聚合码';
    if (text === 1) val = '聚合码';
    if (text === 2) val = '支付设备';
    if (text === 3) val = '线上付款';
    if (text === 4) val = '线下付款';
    return <span>{val}</span>;
  };
  const RenderStatus = (text) => {
    let val = '取消';
    if (text === 1) val = '取消';
    if (text === 2) val = '待支付';
    if (text === 3) val = '已支付';
    if (text === 4) val = '支付失败';
    return <span>{val}</span>;
  };
  const columns = [
    {
      title: '支付单号',
      dataIndex: 'pay_order_id',
      key: 'pay_order_id',
      width: 120,
      align: 'center'


    },
    {
      title: '支付方式',
      dataIndex: 'pay_method',
      key: 'pay_method',
      render: (text) => RenderPayType(text),
      width: 120,
      align: 'center'

    },
    {
      title: '交易金额',
      dataIndex: 'total_price',
      key: 'total_price',
      width: 120,
      align: 'center'

    },
    {
      title: '状态',
      dataIndex: 'status',
      key: 'status',
      render: (text) => RenderStatus(text),
      width: 120,
      align: 'center'

    },
    {
      title: '交易时间',
      dataIndex: 'create_at',
      key: 'create_at',
      width: 120,
      align: 'center'

    },

    {
      title: '操作',
      key: 'action',
      render: () => (<span style={{ color: '#1890ff', }} className="btn"
      >查看
      </span>),
      fixed: 'right',
      width: 60,
    },
  ];
  const changeTime = (e) => {
    const time1 = e && e[0].format('YYYY-MM-DD HH:mm:ss');
    const time2 = e && e[1].format('YYYY-MM-DD HH:mm:ss');
    // setTimeRange(`${time1}|${time2}`);
    clearPage();

    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 10,
      date: e ? `${time1}|${time2}` : null,
    });
  };
  // const searchTime = () => {
  //   clearPage();

  //   handleGetList({
  //     shop_id: shopId,
  //     page: 1,
  //     pageSize: 10,
  //     date: timeRange,
  //   });
  // };
  const refresh = () => {
    setKeyValue(new Date());

    setOrderNum(null);
    clearPage();

    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 10,
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
  const [flag, setFlag] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  return (
    <Spin
      spinning={loading2}
    >
      <div className="together">
        <HeaderAccount />
        <div className="menu-header">
        <div className="img"
            onClick={() => {
              setFlag(!flag)
            }}
          >
            <img
              alt=""
              src={totalInfo && totalInfo.url}
            />



            {url[0] ?
          
              <PhotoProvider 
              
              >
                <PhotoSlider
                  photoClosable={true}
                  bannerVisible={false}
                  images={[{ src: url[0] }]}
                  visible={flag}
                  onClose={() => setFlag(false)}
                  index={photoIndex}
                  onIndexChange={setPhotoIndex}
                />

              </PhotoProvider>
              : null}
          </div>
          <div className="menu-header-left">
            <div className="header-title">
              <h2>聚合码统计</h2>
              <div className="btn"><Button type="primary" style={{
                marginRight: 10
              }}>核对</Button>
                <Button onClick={refresh}>刷新</Button></div>
            </div>
            <p>
              这是一段聚合码说明文案，是一段聚合码说明文案是
              段聚合码说明文案是一段聚合码说明文案是一段聚合码说明文案
          </p>
          </div>

        </div>
        <div className="menu-header-right">
          <div className="header-right-data">
            <div className="right-databox">
              <span className="databox-span">累计交易金额</span>
              <Statistic value={totalInfo ? totalInfo.total_money : 0.00} prefix="¥" />
            </div>
            <div className="right-databox">
              <span className="databox-span">累计交易单数</span>
              <Statistic value={totalInfo ? totalInfo.count : 0} />
            </div>
            <div className="right-databox">
              <span className="databox-span">本月交易金额</span>
              <Statistic value={totalInfo ? totalInfo.month_money : 0.00} prefix="¥" />
            </div>
          </div>
        </div>
        <div className="together-content">
          <div className="pan">
            <div className="search">
              <div className="line">
                <p className="pic">订单号</p>
                <div className='input_wrap'>
                  <Search
                    className="pic"
                    placeholder="搜索"
                    style={{
                      width: 180,
                      height: 32,
                      borderRadius: 3,
                      backgroundColor: 'rgba(255, 255, 255, 1) ',
                    }}

                    onChange={changeOrderNum}
                    value={orderNum}
                  />

                  <Button className="pic" type="default" htmlType="button" style={{ lineHeight: '0' }}
                    onClick={onResetOrder}
                  >
                    <UndoOutlined style={{ margin: '0' }} />
                  </Button>
                </div>

              </div>
              <div className="line">
                <p className="pic">时间</p>
                <div className='input_wrap'>
                  <RangePicker
                    className="pic"
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    style={{ width: 180 }}
                    key={keyValue}
                    onChange={changeTime}
                  />

                  <Button className="pic" type="default"
                    onClick={onReset} style={{ lineHeight: '0' }}
                  >
                    <UndoOutlined style={{ margin: '0' }} />

                  </Button>
                </div>

              </div>
            </div>

          </div>
          <div className="showTable_mobile">
            {console.log(total)}
            <Table
              columns={columns}
              dataSource={list}
              rowKey={(row) => row.pay_order_id}
              scroll={{ x: 500 }}
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
    </Spin>


  );
};
export default Together;
