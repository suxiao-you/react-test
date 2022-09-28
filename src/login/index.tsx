import './login.scss'
import { Button, Checkbox, Form, Input, notification  } from 'antd';
import React,{useEffect} from 'react';
import { useNavigate } from 'react-router';
import {setCookie,getCookie} from '../utils/cookies'

export const Login: React.FC = () => {
  let navigate = useNavigate()
  useEffect(()=> {
    if(getCookie('token') === 'yes') navigate('/', {replace: true})
  },[navigate])
  const onFinish = (values: any) => {
    if(values.username === 'admin' && values.password === '123456'){
      if(values.remember) {
        setCookie('username',values.username)
        setCookie('password',values.password)
      }
      setCookie('token', 'yes')
      navigate('/',{replace: true})
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    notification.open({
      message: '提示',
      description:errorInfo,
    });
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="header">登录</div>
        <Form
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '请输入你的账号!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>

    </div>
  );
}
