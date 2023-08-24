import './formBookingManager.css';
import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './formBookingManager.css';
import { upd } from '../../../redux/actions/bookingManagerAction';
import { useDispatch } from 'react-redux';
import TextArea from 'antd/es/input/TextArea';

const FormDetailBooking = ({ booking, close }) => {
    const { id, lastname, email, phone, nameroom, totalRoomPrice } = booking
    const dispatch = useDispatch()
    const [data, setData] = useState({
        lastname,
        email,
        phone,
        nameroom,
        totalRoomPrice,
    })
    const onChangeValue = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    const handleUpdate = () => {
        dispatch(upd(data, id))
        close()
    }

    return (
        <div>
            <div className='ad-form-detail-booking'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name">
                        <Input name='lastname' onChange={onChangeValue} defaultValue={lastname} />
                    </Form.Item>
                    <Form.Item label="E-mail">
                        <Input name='email' onChange={onChangeValue} defaultValue={email} />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input name='phone' onChange={onChangeValue} defaultValue={phone} />
                    </Form.Item>
                    <Form.Item label="Information">
                        <TextArea name='nameroom' defaultValue={nameroom} disabled />
                    </Form.Item>
                    <Form.Item label="Total">
                        <Input name='totalRoomPrice' defaultValue={totalRoomPrice} disabled />
                    </Form.Item>
                    <Form.Item className='btn-edit-form-detai-booking'>
                        <Button type="primary" onClick={handleUpdate}>Save</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default FormDetailBooking;