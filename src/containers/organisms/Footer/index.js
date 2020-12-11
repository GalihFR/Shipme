import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

function index() {
    return (
        <>
            <Footer style={{ textAlign: 'center', backgroundColor: 'white', borderTop: '1px solid rgba(0, 0, 0, 0.05)' }}>©2020 SHIPME All Rights Reserved</Footer>
        </>
    )
}

export default index;
