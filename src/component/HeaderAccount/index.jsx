import React, { useState, useEffect } from 'react';
import logoBlock from '../../assets/images/logoBlock.png'
import { Drawer, Button } from 'antd'
import './style.less'
import {
  LogoutOutlined
} from '@ant-design/icons';
import request from '../../api/request';
import { useHistory } from 'react-router-dom';

const HeaderAccount = (props) => {
  const [visible, setVisible] = useState(false)
  const [account, setAccount] = useState(null);
  const history=useHistory();

  const changeShow = () => {
    setVisible(!visible)
  }
  const getAccountInfo = (params) => {
    return request({
      method: 'post',
      url: '/merchant/v1/shop/account/detail',
      params
    })
  }
  const handleGetAccountInfo = async () => {
    const data = await getAccountInfo();
    if (data) {
      setAccount(data)
      console.log(data);
    }

  }
  const closeShow = () => {
    setVisible(!visible)

  }
  const loginOut=()=>{
    localStorage.removeItem('loginInfo');
    console.log(history);
    history.push('/login')
  }
  useEffect(() => {
    handleGetAccountInfo();
   
  }, [])
  return <div>
    <header className="header-account" onClick={changeShow}>
      <img src={logoBlock} alt=""></img>
      <p>454851</p>
    </header>
    <div className="drawer"
    >
      <Drawer
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
        <Button type="dashed" danger style={{float:'right',width:'120px',padding:'4px 8px 4px 8px',borderRadius:'10px'}}>
          <LogoutOutlined style={{marginLeft:'0'}}/>
        <span style={{marginLeft:'4px'}} onClick={loginOut}>退出登录</span>
        </Button>
        </p>
        <p className='line'>工号: <span>{account && account.username}</span></p>
        <p className='line'>登录账号: <span>{account && account.username}</span></p>
    
      </Drawer>
    </div>
  </div>
}
export default HeaderAccount;