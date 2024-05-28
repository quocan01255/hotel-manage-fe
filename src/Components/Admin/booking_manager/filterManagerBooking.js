import './formBookingManager.css';
import React, { useState, useEffect } from 'react';
import { Space, Table, Button, Modal } from 'antd';
import FormDetailBooking from './formDetailBooking';
import { useDispatch, useSelector } from 'react-redux';
import { remove, rsMessage, rsIsUpdSuccess, rsIsDeleteSuccess } from '../../../redux/actions/bookingManagerAction';
import { ToastContainer, toast } from 'react-toastify';
import { getAllBookings, getBookingInfo, removeBooking, updateBooking } from '../../../services/api';

function FilterManagerBooking() {
    const [bookings, setBookings] = useState([]);
    const [infoBookings, setInfoBookings] = useState([]);
    const dispatch = useDispatch();
    const isUpdSuccess = useSelector(state => state.roomManagerReducer.isUpdSuccess);
    const isDeleteSuccess = useSelector(state => state.roomManagerReducer.isDeleteSuccess);
    const message = useSelector(state => state.bookingManagerReducer.message);
    const [currentBooking, setCurrentBooking] = useState([])
    const resultSearch = useSelector(state => state.SearchAdminReducer.name)

    const setData = async () => {
        const response = await getAllBookings();
        setBookings(response)
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

    useEffect(() => {
        setBookings(resultSearch)
    }, [resultSearch])

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
    const handleRemove = async (id) => {
        // dispatch(remove(id))
        await removeBooking(id);
        setData();
    }
    
    const handleUpdate = async (id, name, email, phone) => {
        // dispatch(upd(data, id))
        await updateBooking(id, name, email, phone);
        handleCancel();
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