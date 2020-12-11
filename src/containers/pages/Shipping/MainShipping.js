import React, { Component } from 'react';
import { Layout, Row, Col, Divider, Button } from 'antd';
import './Shipping.css';

import { Form, Input } from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const layout = {
    labelCol: {
      span: 4,
    }
  };
  

const { Content } = Layout;
const suffixVolume = <span>m<sup>3</sup></span>;

export class MainShipping extends Component {
    render() {
        return (
            <>
                <Content className="site-layout-content" style={{ padding: 24 }}>
                    <Row gutter={16} justify="center">
                        <Col lg={16}>
                            {/* <h4>Pengirim</h4>
                            <Divider /> */}

                            <Form {...layout} name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
                            <h4 className="title-form">Pengirim</h4>
                            <Divider />
                                <Row justify="center">
                                    <Col className="gutter-row" lg={20}>
                                        {/* =====================================test form================================================ */}
                                        <Form.Item label="Nama" name="namaPengirim"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form" />
                                        </Form.Item>
                                        <Form.Item label="Email" name="emailPengirim"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form"/>
                                        </Form.Item>
                                        <Form.Item label="Alamat" name="alamatPengirim"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your alamat!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form"/>
                                        </Form.Item>
                                        {/* =====================================test form================================================ */}
                                    </Col>
                                </Row>

                                <h4 className="title-form">Penerima</h4>
                                <Divider />
                                <Row justify="center">
                                    <Col className="gutter-row" lg={20}>
                                        {/* =====================================test form================================================ */}
                                        <Form.Item label="Nama" name="namaPenerima"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your name!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form" />
                                        </Form.Item>
                                        <Form.Item label="Email" name="emailPenerima"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your email!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form"/>
                                        </Form.Item>
                                        <Form.Item label="Alamat" name="alamatPenerima"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your alamat!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form"/>
                                        </Form.Item>
                                        {/* =====================================test form================================================ */}
                                    </Col>
                                </Row>

                                
                                <h4 className="title-form">Muatan</h4>
                                <Divider />
                                <Row justify="center">
                                    <Col className="gutter-row" lg={20}>
                                        {/* =====================================test form================================================ */}
                                        <Form.Item label="Deskripsi" name="deskripsi"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your description!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form" />
                                        </Form.Item>
                                        <Form.Item label="Berat" name="berat"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your weight!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form" suffix="Kg"/>
                                        </Form.Item>
                                        <Form.Item label="Volume" name="volume"
                                            rules={[
                                                {
                                                    required: true,
                                                    message: 'Please input your volume!',
                                                },
                                            ]}
                                        >
                                            <Input className="input-form" suffix={suffixVolume}/>
                                        </Form.Item>
                                        {/* =====================================test form================================================ */}
                                    </Col>
                                </Row>
                                <Divider />
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </Form>
                        </Col>
                    </Row>
                </Content>
            </>
        )
    }
}

export default MainShipping;
