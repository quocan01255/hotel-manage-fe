import './formBookingManager.css';
import React, { useState } from 'react';
import { Space, Table, Button, Modal } from 'antd';
import FormDetailBooking from './formDetailBooking';

function FilterManagerBooking() {
    const [open, setOpen] = useState(false);
    const Detail = () => {
        setOpen(true);
    };
    const handleOk = (e) => {
        setOpen(false);
    };
    const handleCancel = (e) => {
        setOpen(false);
    };
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'ID-Room',
            dataIndex: 'idroom',
            key: 'idroom',
        },
        {
            title: 'Check-In',
            dataIndex: 'checkin',
            key: 'checkin',
        },
        {
            title: 'Check-Out',
            dataIndex: 'checkout',
            key: 'checkout',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_,) => (
                <Space size="middle">
                    <Space wrap>
                        <div>
                            <Button type="primary" onClick={Detail}>Detail</Button>
                            <Modal
                                title="Detail"
                                open={open}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                okButtonProps={{
                                    hidden: true
                                }}
                                cancelButtonProps={{
                                    hidden: true
                                }}
                                width={800}
                            >
                                <FormDetailBooking />
                            </Modal>
                        </div>
                        <Button type="primary" danger>Cancel</Button>
                    </Space>
                </Space>
            ),
        },
    ];
    return <Table columns={columns} dataSource={datas} />;
}
const datas = [
    // key: '1', bỏ key nếu cần thiết
    {
        name: 'John Brown',
        email: 'aaaaaa@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/04/30',
        checkout: '2024/05/01',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR2',
        checkin: '2024/05/01',
        checkout: '2024/05/02',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR3',
        checkin: '2024/05/01',
        checkout: '2024/05/03',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'SSVip4',
        checkin: '2024/05/01',
        checkout: '2024/05/04',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'SSVip1',
        checkin: '2024/05/01',
        checkout: '2024/05/05',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'SSVip1',
        checkin: '2024/05/01',
        checkout: '2024/05/06',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'SSVip2',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'SSVip3',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Accepted'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },
    {
        name: 'John Brown',
        email: 'bbbbbb@gmail.com',
        phone: 1234567890,
        idroom: 'UR1',
        checkin: '2024/05/01',
        checkout: '2024/05/01',
        status: ['Pending'],
    },

];
export default FilterManagerBooking;
