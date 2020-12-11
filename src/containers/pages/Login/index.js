import React, { Component } from 'react';
import './login.css';
import { Row, Col, Form, Input, Button} from 'antd';
import { Link } from 'react-router-dom';

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
                                        className="form-item-custom"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your Username!' }]}
                                    >   
                                        <label className="label-input">Username</label>
                                        <Input className="field-input" placeholder="admin@gmail.com" />
                                    </Form.Item>

                                    <Form.Item
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your Password!' }]}
                                    >
                                        <label className="label-input">Password</label>
                                        <Input.Password className="field-input" placeholder="password"/>
                                    </Form.Item>

                                    <Form.Item style={{marginTop: '10px'}}>
                                        <Button type="primary" htmlType="submit" className="login-form-button btn-login">
                                            <Link to="/dashboard">Masuk</Link>
                                        </Button>
                                        <br/>
                                        <br/>
                                        <Col align="middle">
                                            <Link to="/login" className="label-input">Lupa Password ?</Link>
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
