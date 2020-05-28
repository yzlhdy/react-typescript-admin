import React, { Fragment } from 'react'
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.scss'
interface Props {
    switchFrom(value: string): void
}
const Register: React.FC<Props> = (props) => {
    const { switchFrom } = props

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    const togaForm = () => {
        switchFrom('login')
    }
    return (
        <Fragment>
            <div className="login-header">
                <h4 className="column" onClick={togaForm} >登录</h4>
                <span onClick={togaForm}>账号注册</span>
            </div>
            <div className="login-content">
                <Form
                    labelAlign="left"
                    name="normal_login"
                    className="login-form"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"

                        rules={[{ required: true, message: '请输入账号!' }]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                    </Form.Item>
                    <Form.Item
                        name="password"

                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item
                        name="passwords"

                        rules={[{ required: true, message: '请输入密码!' }]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            type="passwords"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item

                    >
                        <Row gutter={24}>
                            <Col className="gutter-row" span={16}>
                                <Input prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="text"
                                    placeholder="验证码"></Input>
                            </Col>
                            <Col className="gutter-row" span={8}>
                                <Button size="middle" type="primary" danger style={{ width: '131px' }}>发送验证码</Button>
                            </Col>
                        </Row>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{ width: '100%' }} >注册</Button>
                    </Form.Item>
                </Form>
            </div>

        </Fragment>
    )
}


export default Register