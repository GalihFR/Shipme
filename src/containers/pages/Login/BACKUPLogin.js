import React, { Component } from 'react';
import './login.css';
import { Row, Col } from 'antd';

import { Form, Input, Button } from 'antd';

const onFinish = values => {
    console.log('Received values of form: ', values);
};

export class index extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col flex="1" className="container">
                        <Row className="card-login" justify="center" align="middle">
                            <Col className="gutter-row" lg={6}>
                                <Col align="middle">
                                    <div className="logo" align="middle"></div>
                                </Col>
                                <Form
                                    layout="vertical"
                                    name="normal_login"
                                    className="login-form"
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your Username!' }]}
                                    >   
                                        <label>Username</label>
                                        <Input placeholder="admin@gmail.com" />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your Password!' }]}
                                    >
                                        <label>Password</label>
                                        <Input.Password placeholder="password"/>
                                    </Form.Item>

                                    <Form.Item>
                                        <Button type="primary" htmlType="submit" className="login-form-button btn-login">
                                            Masuk
                                        </Button>
                                        <br/>
                                        <br/>
                                        <Col align="middle">
                                            <a href="">Lupa Password ?</a>
                                        </Col>
                                    </Form.Item>
                                </Form>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </>
        )
    }
}

export default index;
