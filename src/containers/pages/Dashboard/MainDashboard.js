import React, { Component } from 'react';
import { Layout, Row, Col, Card, Tabs } from 'antd';
import { FormOutlined, CopyOutlined, CheckOutlined } from '@ant-design/icons';
import Table from '../../organisms/Table';

const { Content } = Layout;
const { TabPane } = Tabs;

export class MainDashboard extends Component {
    render() {
        return (
            <>
                <Content className="site-layout-content" style={{ padding: 24 }}>
                        <Row gutter={16}>
                            <Col lg={8}>
                                <Card className="card-container">
                                    <div className="card-content">
                                        <div className="card-text">
                                            <h4>Semua</h4>
                                            <h2>5</h2>
                                        </div>
                                        <div>
                                            <CopyOutlined className="card-icon"/>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={8}>
                                <Card className="card-container">
                                    <div className="card-content">
                                        <div className="card-text">
                                            <h4>Request</h4>
                                            <h2>5</h2>
                                        </div>
                                        <div>
                                            <FormOutlined className="card-icon"/>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                            <Col lg={8}>
                                <Card className="card-container">
                                    <div className="card-content">
                                        <div className="card-text">
                                            <h4>Complete</h4>
                                            <h2>0</h2>
                                        </div>
                                        <div>
                                            <CheckOutlined className="card-icon"/>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                    </Content>
                    
                    <Content className="site-layout-content" style={{ paddingTop: 10, paddingBottom: 24, paddingLeft: 24, paddingRight: 24, minHeight: '100vh' }}>
                        <Tabs defaultActiveKey="1">
                            <TabPane tab="Semua" key="1">
                                <Table />
                            </TabPane>
                            <TabPane tab="Request" key="2">
                                <Table />
                            </TabPane>
                            <TabPane tab="Complete" key="3">
                                <Table />
                            </TabPane>
                        </Tabs>
                    </Content>
            </>
        )
    }
}

export default MainDashboard
