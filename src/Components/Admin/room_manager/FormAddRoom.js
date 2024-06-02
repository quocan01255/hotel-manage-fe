import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select, Upload } from 'antd';
import { useDispatch } from 'react-redux'
import './cssFormAddEditRoom.css';
import { add } from '../../../redux/actions/roomManagerAction';
import { addRoom } from '../../../services/api';
import { useParams } from 'react-router-dom';
import { DatePicker } from "antd";
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;
const { RangePicker } = DatePicker;

const FormAddRoom = ({ type, close, handleAdd }) => {
    const dispatch = useDispatch()
    const { typeId } = useParams();
    const [currentDate, setCurrentDate] = useState(new Date);
    const [fileList, setFileList] = useState([]);
    // console.log(type)
    const [data, setData] = useState({
        name: '',
        quantity: 0,
        check_in: '',
        check_out: '',
        type,
        // quantity: '',
        details: '',
        description: '',
        price: '',
        image: ''
    })

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

    // console.log(data)

    const handleUpload = ({ fileList }) => {
        setFileList(fileList);
    };

    const handleSubmit = async () => {
        // dispatch(add(data))
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('type', data.type);
        formData.append('details', data.details);
        formData.append('description', data.description);
        formData.append('price', data.price);
        if (fileList.length > 0) {
            formData.append('image', fileList[0].originFileObj);
        }
        handleAdd(formData)
        close()
        setData({
            name: '',
            // quantity: 0,
            // check_in: '',
            // check_out: '',
            type,
            // quantity: '',
            details: '',
            description: '',
            price: '',
            image: ''
        })
    }

    const disabledDate = (current) => {
        // Can not select days before today and today
        return current && current.valueOf() < Date.now();
    };

    return (
        <div className='add-main-form-admin-room'>
            <div className='add-main-form-child-room'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name room" className='input-form-admin-add-room'>
                        <Input value={data.name} name='name' onChange={onChangeValue} />
                    </Form.Item>
                    <Form.Item label="Type room" className='input-form-admin-add-room'>
                        <Select value={type} disabled>
                        </Select>
                    </Form.Item>
                    {/* <Form.Item label="Quantity" className='input-form-admin-add-room'>
                        <Input value={data.quantity} name='quantity' type='number' onChange={onChangeValue} />
                    </Form.Item> */}
                    {/* <Form.Item label="Quantity" className='input-form-admin-add-room'>
                        <Select onChange={onchangeQuantity}>
                            <Select.Option value="1">1</Select.Option>
                            <Select.Option value="2">2</Select.Option>
                            <Select.Option value="3">3</Select.Option>
                            <Select.Option value="4">4</Select.Option>
                            <Select.Option value="5">5</Select.Option>
                        </Select>
                    </Form.Item> */}
                    <Form.Item label="Details" className='input-form-admin-add-room'>
                        <TextArea value={data.details} name='details' onChange={onChangeValue} rows={2} />
                    </Form.Item>
                    <Form.Item label="Description" className='input-form-admin-add-room'>
                        <TextArea value={data.description} name='description' onChange={onChangeValue} rows={5} />
                    </Form.Item>
                    <Form.Item label="Image Room" className='input-form-admin-add-room'>
                        <Upload
                            fileList={fileList}
                            onChange={handleUpload}
                            beforeUpload={() => false}
                        >
                            <Button icon={<UploadOutlined />}>Upload</Button>
                        </Upload>
                    </Form.Item>
                    {/* <Form.Item label="Check in" className='input-form-admin-add-room'>
                        <RangePicker disabledDate={disabledDate} name='check_in' onChange={(date, dateString) => onChangeDate(dateString)} />
                    </Form.Item> */}
                    <Form.Item label="Price" className='input-form-admin-add-room'>
                        <Input value={data.price} type='number' name='price' onChange={onChangeValue} />
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
