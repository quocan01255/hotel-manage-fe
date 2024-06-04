import './formBookingManager.css';
import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal } from 'antd';
import FormDetailBooking from './formDetailBooking';
import { ToastContainer, toast } from 'react-toastify';
import { getAllBookings, getBookingInfo, getBookingItem, removeBooking, updateBooking } from '../../../services/api';

function FilterManagerBooking() {
    const [bookings, setBookings] = useState([]);
    const [infoBookings, setInfoBookings] = useState([]);
    const [currentBooking, setCurrentBooking] = useState([]);

    const setData = async () => {
        const response = await getAllBookings();
        setBookings(response);
    }

    const getInfo = async() => {
        let data = bookings;
        for (const item of data) {
            const response = await getBookingInfo(item.id);
            item.info = response.join(', ');
        }
        setInfoBookings(data);
    }

    useEffect(() => {
        setData();
    }, [])

    useEffect(() => {
        getInfo();
    },  [bookings])

    // useEffect(() => {
    //     setBookings(resultSearch)
    // }, [resultSearch])

    const [open, setOpen] = useState(false);
    const handleRemove = async (id) => {
        // dispatch(remove(id))
        await removeBooking(id);
        setData();
    }
    
    const handleUpdate = async (id, name, email, phone) => {
        // dispatch(upd(data, id))
        await updateBooking(id, name, email, phone);
        setOpen(false);
        setData();
    }

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: '50px'
        },
        {
            title: 'E-mail',
            dataIndex: 'email',
            key: 'email',
            width: '200px'
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            width: '100px'
        },
        {
            title: 'Booking information',
            dataIndex: 'info',
            key: 'info',
            width: '350px'

        },
        {
            title: 'Total cost',
            dataIndex: 'total_price',
            key: 'total_price',
            width: '150px',
            render: text =>
                new Intl.NumberFormat("vi-VN", {
                    style: "currency",
                    currency: "VND",
                }).format(text)

        },
        {
            title: 'Action',
            key: 'action',
            render: (booking) => (
                <Space size="middle">
                    <Space wrap>
                        <div>
                            <Button type="primary"
                                onClick={() => {
                                    setOpen(true);
                                    setCurrentBooking(booking)
                                }}
                            >Edit</Button>
                            <Modal
                                destroyOnClose
                                title="Detail"
                                open={open}
                                onOk={() => setOpen(false)}
                                onCancel={() => setOpen(false)}
                                okButtonProps={{
                                    hidden: true
                                }}
                                cancelButtonProps={{
                                    hidden: true
                                }}
                                width={800}
                            >
                                <FormDetailBooking booking={currentBooking} handleUpdate={handleUpdate}/>
                            </Modal>
                        </div>
                        <Button type="primary" danger onClick={() => handleRemove(booking.id)}>Cancel</Button>
                    </Space>
                </Space>
            ),
        },
    ];
    return (
        <>
            <ToastContainer />
            <Table columns={columns} dataSource={bookings} />
        </>
    );
}
export default FilterManagerBooking;