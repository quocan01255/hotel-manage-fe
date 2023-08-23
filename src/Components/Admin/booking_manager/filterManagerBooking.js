import './formBookingManager.css';
import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal } from 'antd';
import FormDetailBooking from './formDetailBooking';
import { useDispatch, useSelector } from 'react-redux';
import { remove, rsMessage } from '../../../redux/actions/bookingManagerAction';
import { ToastContainer, toast } from 'react-toastify';

function FilterManagerBooking() {
    const [bookings, setBookings] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [idroom, setIdroom] = useState('');
    const [checkin, setCheckin] = useState('');
    const [checkout, setCheckout] = useState('');
    const dispatch = useDispatch();
    const bookingManagerState = useSelector(state => state.bookingManagerReducer);

    const message = useSelector(state => state.roomManagerReducer.message);

    useEffect(() => {
        if (message) {
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            dispatch(rsMessage())
        }
    }, [message]);
    useEffect(() => {
        fetch('http://localhost:3001/bookings')
            .then((response) => response.json())
            .then((data) => {
                const newBookings = data
                setBookings(newBookings)
            })
            .catch((error) => {
            });
    }, [bookingManagerState])

    const [open, setOpen] = useState(false);
    const handleOk = (e) => {
        setOpen(false);
    };
    const handleCancel = (e) => {
        setOpen(false);
    };
    const handleRemove = (id) => {
        dispatch(remove(id))
    }
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
            render: (booking) => (
                <Space size="middle">
                    <Space wrap>
                        <div>
                            <Button type="primary"
                                onClick={(e) => {
                                    setOpen(true);
                                    setName(booking.name)
                                    setEmail(booking.email)
                                    setPhone(booking.phone)
                                    setIdroom(booking.idroom)
                                    setCheckin(booking.checkin)
                                    setCheckout(booking.checkout)
                                }}
                            >Edit</Button>
                            <Modal
                                destroyOnClose
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
                                <FormDetailBooking close={handleCancel} booking={booking} />
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
