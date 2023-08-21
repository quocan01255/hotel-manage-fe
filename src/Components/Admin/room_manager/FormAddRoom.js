import React, { useState } from 'react';
import { Button, Form, Input, Select, Upload } from 'antd';
import { useDispatch } from 'react-redux'
import './cssFormAddEditRoom.css';
import { add } from '../../../redux/actions/roomManagerAction';


const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const FormAddRoom = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState({
        roomName: '',
        type: '',
        quantity: '',
        detail: '',
        description: '',
        price: '',
        image: ''
    })
    const onchangeType = (e) => {
        var value = e;
        setData((prevData) => ({
            ...prevData,
            type: value,
        }));
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
        console.log(data)
    }

    const handleSubmit = () => {
        dispatch(add(data))
    }

    return (
        <div className='add-main-form-admin-room'>
            <div className='add-main-form-child-room'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name room" className='input-form-admin-add-room'>
                        <Input name='roomName' onChange={onChangeValue} />
                    </Form.Item>
                    <Form.Item label="Type room" className='input-form-admin-add-room'>
                        <Select onChange={onchangeType}>
                            <Select.Option value="Deluxe Pool">Deluxe Pool</Select.Option>
                            <Select.Option value="Deluxe Executive">Deluxe Executive</Select.Option>
                            <Select.Option value="Deluxe Plus">Deluxe Plus</Select.Option>
                            <Select.Option value="Deluxe">Deluxe</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Quantity" className='input-form-admin-add-room'>
                        <Select onChange={onchangeQuantity}>
                            <Select.Option value="1-2">1-2</Select.Option>
                            <Select.Option value="3">3</Select.Option>
                            <Select.Option value="4">4</Select.Option>
                            <Select.Option value="5">5</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Detail" className='input-form-admin-add-room'>
                        <TextArea name='detail' onChange={onChangeValue} rows={2} />
                    </Form.Item>
                    <Form.Item label="Description" className='input-form-admin-add-room'>
                        <TextArea name='description' onChange={onChangeValue} rows={5} />
                    </Form.Item>
                    <Form.Item label="Image Room" className='input-form-admin-add-room'>
                        <Input name='image' onChange={onChangeValue} />
                    </Form.Item>
                    <Form.Item label="Price" className='input-form-admin-add-room'>
                        <Input name='price' onChange={onChangeValue} />
                    </Form.Item>
                    <Form.Item className='btn-admin-form-add-room'>
                        <Button type="primary" className='btn-admin-inform-add-room' onClick={handleSubmit}>Add</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default FormAddRoom
