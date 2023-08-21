import React from 'react';
import dayjs from 'dayjs';
import { Button, Form, Input, DatePicker } from 'antd';
import './formBookingManager.css';


const { RangePicker } = DatePicker;
const FormDetailBooking = ({ name, email, phone, idroom, checkin, checkout }) => {
    console.log(checkin)
    return (
        <div>
            <div className='ad-form-detail-booking'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name">
                        <Input defaultValue={name} />
                    </Form.Item>
                    <Form.Item label="E-mail">
                        <Input defaultValue={email} />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input defaultValue={phone} />
                    </Form.Item>
                    <Form.Item label="ID-Room">
                        <Input defaultValue={idroom} disabled />
                    </Form.Item>
                    <Form.Item label="RangePicker">
                        <RangePicker defaultValue={[dayjs(checkin, 'DD/MM/YYYY'), dayjs(checkout, 'DD/MM/YYYY')]}/>
                    </Form.Item>
                    <Form.Item className='btn-edit-form-detai-booking'>
                        <Button type="primary">Edit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default FormDetailBooking;