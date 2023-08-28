import './formBookingManager.css';
import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal } from 'antd';
import FormDetailBooking from './formDetailBooking';
import { useDispatch, useSelector } from 'react-redux';
import { remove, rsMessage, rsIsUpdSuccess, rsIsDeleteSuccess } from '../../../redux/actions/bookingManagerAction';
import { ToastContainer, toast } from 'react-toastify';

function FilterManagerBooking() {
    const [bookings, setBookings] = useState([]);
    const dispatch = useDispatch();
    const isUpdSuccess = useSelector(state => state.roomManagerReducer.isUpdSuccess);
    const isDeleteSuccess = useSelector(state => state.roomManagerReducer.isDeleteSuccess);
    const message = useSelector(state => state.bookingManagerReducer.message);
    const [currentBooking, setCurrentBooking] = useState([])

    const setData = () => {
        fetch('http://localhost:3001/bookings')
            .then((response) => response.json())
            .then((data) => {
                const newBookings = data
                setBookings(newBookings)
            })
            .catch((error) => {
            });
    }

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
        setData()
    }, [])

    useEffect(() => {
        if (isUpdSuccess) {
            setData()
            dispatch(rsIsUpdSuccess())
        } else if (isDeleteSuccess) {
            setData()
            dispatch(rsIsDeleteSuccess())
        }
    }, [isUpdSuccess, isDeleteSuccess])

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
            title: 'Last Name',
            dataIndex: 'lastname',
            key: 'lastname',
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
            dataIndex: 'nameroom',
            key: 'name',
            width: '350px'

        },
        {
            title: 'Total price',
            dataIndex: 'totalRoomPrice',
            key: 'totalRoomPrice',
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
                                onClick={(e) => {
                                    setOpen(true);
                                    setCurrentBooking(booking)
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
                                <FormDetailBooking close={handleCancel} booking={currentBooking} />
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