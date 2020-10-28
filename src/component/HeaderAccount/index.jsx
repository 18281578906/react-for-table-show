/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import logoBlock from '../../assets/images/logoBlock.png'
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import { Button } from 'antd'
import './style.less'
// import {
//   LogoutOutlined
// } from '@ant-design/icons';
// import request from '../../api/request';
import { useHistory } from 'react-router-dom';

const HeaderAccount = (props) => {
  const [visible, setVisible] = useState(false)
  // const [account, setAccount] = useState(null);
  const history = useHistory();

  const changeShow = () => {
    setVisible(!visible)
  }
  // const getAccountInfo = (params) => {
  //   return request({
  //     method: 'post',
  //     url: '/merchant/v1/shop/account/detail',
  //     params
  //   })
  // }
  // const handleGetAccountInfo = async () => {
  //   const data = await getAccountInfo();
  //   if (data) {
  //     setAccount(data)
  //     console.log(data);
  //   }

  // }
  // const closeShow = () => {
  //   setVisible(!visible)

  // }
  const loginOut = () => {
    localStorage.removeItem('loginInfo');
    history.push('/login');
    props.getInfo({})
    //  window.location.reload()
  }
  useEffect(() => {
    // handleGetAccountInfo();

  }, [])
  return <div onClick={changeShow}>
    <header className="header-account">
      {/* <span   onClick={changeShow}><img src={logoBlock} alt=""></img>
      <p>{account && account.username}</p> 
   </span> */}
      <span>
        <p>{props.info === '123456' ? '普通用户' : '管理员'}</p>
        <span style={{ marginLeft: '10px' }} onClick={loginOut}> <Button danger>退出登录</Button></span>


      </span>
    </header>
    <div className="drawer"
    >
      {/* <Drawer
        onClose={closeShow}
        height={150}
        placement='top'
        closable={false}
        // onClose={this.onClose}
        visible={visible}
      // key={placement}
      >

        <p className='line username'>
          {account && account.username}
          <span className='role'>{account && account.role_name}</span>
          <Button type="dashed" danger style={{ float: 'right', width: '120px', padding: '4px 8px 4px 8px', borderRadius: '10px' }}>
            <LogoutOutlined style={{ marginLeft: '0' }} />
            <span style={{ marginLeft: '4px' }} onClick={loginOut}>退出登录</span>
          </Button>
        </p>
        <p className='line'>工号: <span>{account && account.username}</span></p>
        <p className='line'>登录账号: <span>{account && account.username}</span></p>

      </Drawer> */}
    </div>
  </div>
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderAccount)
