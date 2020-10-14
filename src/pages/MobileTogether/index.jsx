/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import {
  Button, Input, DatePicker, Table, Spin, Statistic, message
} from 'antd';
import { request } from '../../api/request'
import moment from 'moment';
import HeaderAccount from '../../component/HeaderAccount'
import { PhotoProvider, PhotoSlider } from 'react-photo-view';
import {
  UndoOutlined
} from '@ant-design/icons';

import './style.less';
import { useHistory } from 'react-router-dom';
import { debounce } from '../../utils/utils'


const { Search } = Input;
const Together = (props) => {
  //（浏览器窗口上边界内容高度）
  function getDocumentTop() {
    var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
    if (document.body) {
      bodyScrollTop = document.body.scrollTop;
    }
    if (document.documentElement) {
      documentScrollTop = document.documentElement.scrollTop;
    }
    scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
    // console.log("scrollTop:" + scrollTop);
    return scrollTop;
  }



  //可视窗口高度（屏幕可以看见的高度）
  function getWindowHeight() {
    var windowHeight = 0;
    if (document.compatMode === "CSS1Compat") {
      windowHeight = document.documentElement.clientHeight;
    } else {
      windowHeight = document.body.clientHeight;
    }
    // console.log("windowHeight:" + windowHeight);
    return windowHeight;
  }



  //滚动条滚动高度（即整个网页的高度）
  function getScrollHeight() {
    var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
    if (document.body) {
      bodyScrollHeight = document.body.scrollHeight;
    }
    if (document.documentElement) {
      documentScrollHeight = document.documentElement.scrollHeight;
    }
    scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
    // console.log("scrollHeight:" + scrollHeight);
    return scrollHeight;
  }

  window.onscroll = debounce(function () {
    //监听事件内容
    if (getScrollHeight() === getDocumentTop() + getWindowHeight()) {
      //当滚动条到底时,这里是触发内容
      console.log('到底了');
    }
  }, 600, false)

  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const [totalInfo, setTotalInfo] = useState(null);
  const [url, setUrl] = useState([])
  const [shopId, setShopId] = useState(0);
  const [list, setList] = useState([]);
  const [pageobj, setPageObj] = useState({
    page: 1,
    pageSize: 5
  })
  const [total, setTotal] = useState(1)
  const history = useHistory();
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
    if (!JSON.parse(localStorage.getItem('loginInfo'))) {
      message.error('请先登录！');
      history.replace('/login')
    }
  }, [])
  const [keyValue, setKeyValue] = useState('');
  console.log(keyValue);
  const [orderNum, setOrderNum] = useState('');
  const [timeChioce1, setTime1] = useState('');
  const [timeChioce2, setTime2] = useState('');
  const [timeChiocekey1, setTimekey1] = useState('');
  const [timeChiocekey2, setTimekey2] = useState('');
  const clearPage = () => {
    setPageObj({
      page: 1,
      pageSize: 5,
    })
  }
  const onReset1 = () => {
    setTimekey1(new Date());
    setTimekey2(new Date());
    setTime1('')
    setTime2('')

    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 5,
    });
    clearPage();
  };
  const onReset2 = () => {
    setTimekey2(new Date());
    setTime2('')

    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 5,
    });
    clearPage();
  };
  const onResetOrder = () => {
    setOrderNum(null);
    handleGetList({
      shop_id: shopId,
      page: 1,
      pageSize: 5,
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
      pageSize: 5,
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
  // const changeTime1 = (e) => {
  //   let time1,time2;
  //   if(type===1){
  //         time1 = e && e.format('YYYY-MM-DD HH:mm:ss');
  //         setTime1(time1)
  //   }
  //   if(type===2){
  //         time2 = e && e.format('YYYY-MM-DD HH:mm:ss');
  //         setTime2(time2)
  //   }
  //   console.log(timeChioce1,timeChioce2);
  //   clearPage();
  //   handleGetList({
  //     shop_id: shopId,
  //     page: 1,
  //     pageSize: 5,
  //     date: e ? `${time1}|${time2}` : null,
  //   });
  // };
  const changeTime1 = (e) => {
    const time1 = e && e.format('YYYY-MM-DD HH:mm:ss');
    setTime1(time1)
    console.log(timeChioce1, time1);
    clearPage();
    if (timeChioce2 !== '') {
      const timeNum1 = Number(e.format('YYYYMMDDHHmmss'));
      const mm = timeChioce2.split(' ');
      const timeNum2 = Number(mm[0].split('-').join('') + mm[1].split(':').join(''));
      console.log(timeNum1, timeNum2);
      if (timeNum1 >= timeNum2) {
        message.error('开始时间不能大于结束时间');
        setTimekey1(new Date())
        setTime1('')
      }
      console.log(timeChioce1, time1);

      clearPage();
      handleGetList({
        shop_id: shopId,
        page: 1,
        pageSize: 5,
        date: e ? `${time1}|${timeChioce2}` : null,
      });
    }


  };
  const changeTime2 = (e) => {
    const time2 = e && e.format('YYYY-MM-DD HH:mm:ss');
    setTime2(time2.toString())
    if (timeChioce1 === '') {
      message.error('请选择开始时间！')
      setTimekey2(new Date())
      setTime2('')

      return;
    } else {
      const timeNum2 = Number(e.format('YYYYMMDDHHmmss'));

      const mm = timeChioce1.split(' ');
      const timeNum1 = Number(mm[0].split('-').join('') + mm[1].split(':').join(''));
      console.log(timeNum1, timeNum2);
      if (timeNum2 <= timeNum1) {
        message.error('结束时间不能小于开始时间');
        setTimekey2(new Date())
        setTime2('')
        return;

      }
      console.log(timeChioce1, time2);
      clearPage();
      handleGetList({
        shop_id: shopId,
        page: 1,
        pageSize: 5,
        date: e ? `${timeChioce1}|${time2}` : null,
      });
    }




  };
  // const searchTime = () => {
  //   clearPage();

  //   handleGetList({
  //     shop_id: shopId,
  //     page: 1,
  //     pageSize: 5,
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
      pageSize: 5,
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
        <div className="together-content timeChioce">
          <div className="pan">
            <div className="search">
              <div className="line">
                <p className="pic">订单号</p>
                <div className='input_wrap'>
                  <Search
                    className="pic"
                    placeholder="搜索"
                    style={{
                      width: 300,
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
              <div className="line" >
                <p className="pic">开始时间</p>
                <div className='input_wrap'>
                  {console.log(timeChioce1)}
                  <DatePicker
                    placeholder='请选择时间段'
                    className="pic"
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    style={{ width: 300 }}
                    key={timeChiocekey1}
                    onChange={changeTime1}
                    inputReadOnly={true}
                    popupStyle={{
                      transform: 'scale(0.8)',
                      transition: '300ms',

                    }}
                  />

                  <Button className="pic" type="default"
                    onClick={onReset1} style={{ lineHeight: '0' }}
                  >
                    <UndoOutlined style={{ margin: '0' }} />
                  </Button>
                </div>

              </div>
              <div className="line" >
                <p className="pic">结束时间</p>
                <div className='input_wrap'>
                  <DatePicker
                    placeholder='请选择时间段'
                    className="pic"
                    format="YYYY-MM-DD HH:mm:ss"
                    showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                    style={{ width: 300 }}
                    key={timeChiocekey2}
                    onChange={changeTime2}
                    inputReadOnly={true}
                    popupStyle={{

                      transform: 'scale(0.8)',
                      transition: '300ms',
                    }}
                  />

                  <Button className="pic" type="default"
                    onClick={onReset2} style={{ lineHeight: '0' }}
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
