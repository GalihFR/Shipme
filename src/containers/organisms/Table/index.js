import React, { Component } from 'react';
import { Table, Badge, Button, Collapse, Input, Row, Col, DatePicker, Space } from 'antd';
import { PlusSquareOutlined, EditOutlined, CaretRightOutlined } from '@ant-design/icons';
import './Table.css';

const { Panel } = Collapse;
const { Search } = Input;
const { RangePicker } = DatePicker;

const columns = [
    {
        title: '',
        render: () => <PlusSquareOutlined />,
    },
    {
        title: 'No Booking',
        dataIndex: 'noBooking',
    },
    {
        title: 'Data Pengirim',
        dataIndex: 'dataPengirim',
        width: 200,
        render: (text, record) => (
            // <Collapse defaultActiveKey={['0']} ghost expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
            <Collapse defaultActiveKey={['0']} ghost expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                <Panel header={text} key="1" style={{ fontWeight: '500' }}>
                    <h4>Alamat:</h4>
                    <p className="nested-deskirpsi">{record.alamatPengirim}</p>
                    <h4>Email:</h4>
                    <p className="nested-deskirpsi">{record.emailPengirim}</p>
                </Panel>
            </Collapse>
        ),
    },
    {
        title: 'Data Penerima',
        dataIndex: 'dataPenerima',
        width: 200,
        render: (text, record) => (
            // <Collapse defaultActiveKey={['0']} ghost expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
            <Collapse defaultActiveKey={['0']} ghost expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}>
                <Panel header={text} key="1" style={{ fontWeight: '500' }}>
                    <h4>Alamat:</h4>
                    <p className="nested-deskirpsi">{record.alamatPenerima}</p>
                    <h4>Email:</h4>
                    <p className="nested-deskirpsi">{record.emailPenerima}</p>
                </Panel>
            </Collapse>
        ),
    },
    {
        title: 'Detail Barang',
        dataIndex: 'detailBarang',
    },
    {
        title: 'Status',
        dataIndex: 'status',
        render: text => (
            <span>
                <Badge status="processing" text={text} />
            </span>
        ),
    },
    {
        title: 'Aksi',
        render: () => <Button type="dashed"><EditOutlined /></Button>
    },
];

const data = [];
for(let i=0;i<20;i++){
    data.push({
        key: i,
        noBooking: 'SH-0000'+i,
        dataPengirim: 'Win'+i,
        alamatPengirim: 'Jl. Win Win Solution, Gambir, Jakarta Pusat,DKI Jakarta, Indonesia'+i,
        emailPengirim: 'win@gmail.com'+i,
        dataPenerima: 'Fad'+i,
        alamatPenerima: 'Jl. Nangka Indah 2, Slipi, Jakarta Barat, DKI Jakarta, Indonesia'+i,
        emailPenerima: 'fad@gmail.com'+i,
        detailBarang: 'Meds'+i,
        status: 'Request'+i
    })
}

export class index extends Component {
    render() {
        return (
            <div>
                <Row justify="space-between" style={{marginBottom: '10px'}}>
                    <Row gutter={10}>
                        <Col>
                            <h4>Pencarian</h4>
                        </Col>
                        <Col>
                            <Search placeholder="Cari berdasarkan nomor booking" enterButton/>
                        </Col>
                    </Row>

                    <Row gutter={10}>
                        <Col>
                            <h4>Tanggal Mulai & Akhir</h4>
                        </Col>
                        <Col>
                            <Space direction="vertical" size={12}>
                                <RangePicker />
                            </Space>
                        </Col>
                    </Row>
                </Row>
                
                <Table columns={columns} dataSource={data} size="middle" pagination={{ showQuickJumper: true, showSizeChanger: true, responsive: true, total: `${data.length}`, showTotal: total=>`Total ${total} items`, size: 'default'}}/>

            </div>
        )
    }
}

export default index
