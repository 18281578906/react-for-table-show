import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import { mapStateToProps, mapDispatchToProps } from '../../redux/actionCreator'
import { connect } from 'react-redux'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import {
  Input, Button, Form, message,
} from 'antd';
import './style.less';
import request from '../../api/request';
import 'react-photo-view/dist/index.css';
const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 20 },
  labelAlign: 'left',
};

const LoginPage = (props) => {
  const [width,setWidth]=useState('40%')

  const history = useHistory();
  const login = async (account, password) => {
    return await request({
      method: 'post',
      url: '/merchant/v1/login',
      params: {
        account,
        password,
      }
    })
  }

  const onFinish = async (values) => {
    const { username, password } = values;
    // const result = await login(username, password);
    const result=true;
    if (result) {
      history.push('/');
      localStorage.setItem('loginInfo', JSON.stringify(result));
      props.getInfo(result)
      window.location.reload('/');
      message.success('登录成功！')

    }
    else{
      message.error('密码或用户名错误！')
    }
  };

  const onFinishFailed = (err) => {
    console.log('err', err);
  };
useEffect(() => {
  if(props.isPc===true){
    setWidth('400px')
  }else{
    setWidth('40% ')

  }
}, [props.isPc])
  return (
    <div className="page-login">
      <div className="login-wrap">
        <div className="login-box" style={{width}}>
          <Form
            className="login-form"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            {...layout}
          >

            <Form.Item
              label="账号"
              name="username"
              rules={[{ required: true, message: '请输入用户名' }]}
            >
              <Input
                prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="用户名"
              />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入密码' }]}
            >
              <Input
                prefix={<LockOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <div className="ant-row ant-form-item">
              <Button className="form-button" shape="round" type="primary" htmlType="submit">
                登录
              </Button>
            </div>
          </Form>
        </div>

      </div>
    </div>
  );
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
