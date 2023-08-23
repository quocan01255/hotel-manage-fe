import './formBookingManager.css';
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { Button, Form, Input, DatePicker } from 'antd';
import './formBookingManager.css';
import { upd } from '../../../redux/actions/bookingManagerAction';
import { useDispatch } from 'react-redux';

const { RangePicker } = DatePicker;
const FormDetailBooking = ({ booking, close }) => {
    const { id, name, email, phone, idroom, checkin, checkout } = booking
    const dispatch = useDispatch()
    const [data, setData] = useState({
        name,
        email,
        phone,
        idroom,
        checkin,
        checkout
    })
    const onChangeRangePicker = (dates, dateStrings) => {
        console.log('RangePicker value changed:', dateStrings);
        setData((prevData) => ({
            ...prevData,
            checkin: dateStrings[0],
            checkout: dateStrings[1],
        }));
    };
    const onChangeValue = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log(data)
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
                        <Input name='name' onChange={onChangeValue} defaultValue={name} />
                    </Form.Item>
                    <Form.Item label="E-mail">
                        <Input name='email' onChange={onChangeValue} defaultValue={email} />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input name='phone' onChange={onChangeValue} defaultValue={phone} />
                    </Form.Item>
                    <Form.Item label="ID-Room">
                        <Input name='idroom' onChange={onChangeValue} defaultValue={idroom} disabled />
                    </Form.Item>
                    <Form.Item label="RangePicker">
                        <RangePicker
                            defaultValue={[dayjs(checkin, 'DD/MM/YYYY'), dayjs(checkout, 'DD/MM/YYYY')]}
                            onChange={onChangeRangePicker}
                            format={'DD/MM/YYYY'}
                        />
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