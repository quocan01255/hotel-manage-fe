import './formBookingManager.css';
import React, { useEffect, useState } from 'react';
import { Button, Form, Input } from 'antd';
import './formBookingManager.css';
import TextArea from 'antd/es/input/TextArea';
import { getBookingItem, getRoomById } from '../../../services/api';

const FormDetailBooking = ({ booking, handleUpdate }) => {
    const { id, name, email, phone, info, total_price } = booking
    const [data, setData] = useState({
        name,
        email,
        phone,
        info,
        total_price,
    })
    const [bookingItem, setBookingItem] = useState([]);

    const fetchBookingItem = async () => {
        const response = await getBookingItem(id);
        for (const item of response) {
            item.check_in = new Date(item.check_in).toLocaleDateString();
            item.check_out = new Date(item.check_out).toLocaleDateString();
            const room = await getRoomById(item.id_room);
            item.name = room[0].name;
        }
        setBookingItem(response);
    }

    useEffect(() => {
        fetchBookingItem();
    }, [])

    // console.log(bookingItem)

    const onChangeValue = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div>
            <div className='ad-form-detail-booking'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name">
                        <Input name='name' onChange={onChangeValue} defaultValue={name} />
                    </Form.Item>
                    <Form.Item label="E-mail">
                        <Input name='email' onChange={onChangeValue} defaultValue={email} />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input name='phone' onChange={onChangeValue} defaultValue={phone} />
                    </Form.Item>
                    {
                        bookingItem.map((item, index) => (
                            <Form.Item key={index} label={`Room ${index + 1}`}>
                                <TextArea name='info' defaultValue={`${item.name} (${item.check_in} - ${item.check_out})`} disabled />
                            </Form.Item>
                        ))
                    }
                    <Form.Item label="Total">
                        <Input name='total_price' defaultValue={total_price} disabled />
                    </Form.Item>
                    <Form.Item className='btn-edit-form-detai-booking'>
                        <Button type="primary" onClick={() => handleUpdate(id, data.name, data.email, data.phone)}>Save</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default FormDetailBooking;