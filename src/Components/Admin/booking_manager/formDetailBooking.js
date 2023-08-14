import React from 'react';
import { Button, Form, Input, DatePicker } from 'antd';
import './formBookingManager.css';

const { RangePicker } = DatePicker;
const FormDetailBooking = () => {
    return (
        <div>
            <div className='ad-form-detail-booking'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name">
                        <Input />
                    </Form.Item>
                    <Form.Item label="E-mail">
                        <Input />
                    </Form.Item>
                    <Form.Item label="Phone">
                        <Input />
                    </Form.Item>
                    <Form.Item label="ID-Room">
                        <Input disabled />
                    </Form.Item>
                    <Form.Item label="RangePicker">
                        <RangePicker />
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