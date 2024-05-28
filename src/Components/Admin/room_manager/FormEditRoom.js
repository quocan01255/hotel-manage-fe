import React, { useState } from 'react';
import { Button, Form, Input, Select, DatePicker } from 'antd';
import './cssFormAddEditRoom.css';
import { upd } from '../../../redux/actions/roomManagerAction';
import { useDispatch } from 'react-redux'
import dayjs from 'dayjs';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const FormDetail = ({ room, close, type, handleUpdateRoom }) => {
    const dispatch = useDispatch()
    const { id, name, img, details, description, price, quantity, check_in, check_out } = room
    const [data, setData] = useState({
        name,
        type,
        quantity,
        details,
        description,
        price,
        img,
        check_in,
        check_out
    })

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now();
    };

    const onchangeQuantity = (e) => {
        var value = e;
        setData((prevData) => ({
            ...prevData,
            quantity: value,
        }));
    };
    const onChangeValue = (e) => {
        const { name, value } = e.target
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const onChangeDate = (value) => {
        let checkInDate = new Date(value[0])
        let checkOutDate = new Date(value[1])
        setData(prevData => ({
            ...prevData,
            check_in: checkInDate,
            check_out: checkOutDate,
        }));
    }

    const handleUpdate = () => {
        // dispatch(upd(data, id))
        handleUpdateRoom(id, data)
        close()
    }

    return (
        <div className='add-main-form-admin-room'>
            <div className='add-main-form-child-room'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name room" className='input-form-admin-add-room'>
                        <Input name='name' onChange={onChangeValue} defaultValue={name} />
                    </Form.Item>
                    <Form.Item label="Type room" className='input-form-admin-add-room'>
                        <Select value={type} disabled>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Quantity" className='input-form-admin-add-room'>
                        <Select onChange={onchangeQuantity} defaultValue={quantity}>
                            <Select.Option value="1">1</Select.Option>
                            <Select.Option value="2">2</Select.Option>
                            <Select.Option value="3">3</Select.Option>
                            <Select.Option value="4">4</Select.Option>
                            <Select.Option value="5">5</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Details" className='input-form-admin-add-room'>
                        <TextArea name='details' onChange={onChangeValue} defaultValue={details} rows={2} />
                    </Form.Item>
                    <Form.Item label="Description" className='input-form-admin-add-room'>
                        <TextArea name='description' onChange={onChangeValue} defaultValue={description} rows={5} />
                    </Form.Item>
                    <Form.Item label="Image Room" className='input-form-admin-add-room'>
                        <Input name='img' onChange={onChangeValue} defaultValue={img} />
                    </Form.Item>
                    <Form.Item label="Check in" className='input-form-admin-add-room'>
                        <RangePicker defaultValue={[dayjs(check_in, 'YYYY-MM-DD'), dayjs(check_out, 'YYYY-MM-DD')]} disabledDate={disabledDate} name='check_in' onChange={(date, dateString) => onChangeDate(dateString)} />
                    </Form.Item>
                    <Form.Item label="Price" className='input-form-admin-add-room'>
                        <Input name='price' onChange={onChangeValue} defaultValue={price} />
                    </Form.Item>
                    <Form.Item className='btn-admin-form-add-room'>
                        <Button type="primary" className='btn-admin-inform-add-room' onClick={handleUpdate}>Save</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default FormDetail