import React, { Component } from 'react';
import './Dashboard.css';
import { Layout, Menu } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined, EllipsisOutlined, AppstoreOutlined, FormOutlined, ExportOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import MainDashboard from './MainDashboard';
import Footer from '../../organisms/Footer';

const { Header, Sider } = Layout;

class index extends Component {
    state = {
        collapsed: false
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        })
    }

    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed} className="sider-container sider">
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} className="sider-container">
                        <Menu.Item key="1" icon={<AppstoreOutlined />} className="nav-item">
                            <Link to="/">Dashboard</Link>
                        </Menu.Item>
                        <Menu.Item key="2" icon={<FormOutlined />} className="nav-item">
                            <Link to="/shipping"> Pengiriman </Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<ExportOutlined />} className="nav-item">
                            <Link to="/login">Keluar</Link>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-header">
                        <div>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </div>
                        <div>
                            <h4>DASHBOARD</h4>
                        </div>
                        <div>
                            <EllipsisOutlined />
                        </div>
                    </Header>

                    <MainDashboard />

                    <Footer />
                </Layout>
            </Layout>
        )
    }
}

export default index;
