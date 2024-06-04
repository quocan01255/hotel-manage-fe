import React, { useState } from 'react';
import { Button, Form, Input, Select, DatePicker, Upload } from 'antd';
import './cssFormAddEditRoom.css';
import { UploadOutlined } from '@ant-design/icons';

const { TextArea } = Input;

const FormDetail = ({ room, close, type, handleUpdateRoom }) => {
    const { id, name, img, details, description, price } = room;
    const [data, setData] = useState({
        name,
        type,
        details,
        description,
        price,
        img,
    });
    const [fileList, setFileList] = useState([]);

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

    const handleUpload = ({ fileList }) => {
        setFileList(fileList);
    };

    const handleUpdate = () => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('type', data.type);
        formData.append('details', data.details);
        formData.append('description', data.description);
        formData.append('price', data.price);
        if (fileList.length > 0) {
            formData.append('image', fileList[0].originFileObj);
        }
        handleUpdateRoom(id, formData)
        close()
    }

    return (
        <div className='add-main-form-admin-room'>
            <div className='add-main-form-child-room'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name room" className='input-form-admin-add-room'>
                        <Input name='name' onChange={onChangeValue} defaultValue={name} required/>
                    </Form.Item>
                    <Form.Item label="Type room" className='input-form-admin-add-room'>
                        <Select value={type} disabled>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Details" className='input-form-admin-add-room'>
                        <TextArea name='details' onChange={onChangeValue} defaultValue={details} rows={2} />
                    </Form.Item>
                    <Form.Item label="Description" className='input-form-admin-add-room'>
                        <TextArea name='description' onChange={onChangeValue} defaultValue={description} rows={5} />
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
                        <RangePicker defaultValue={[dayjs(check_in, 'YYYY-MM-DD'), dayjs(check_out, 'YYYY-MM-DD')]} disabledDate={disabledDate} name='check_in' onChange={(date, dateString) => onChangeDate(dateString)} />
                    </Form.Item> */}
                    <Form.Item label="Price" className='input-form-admin-add-room'>
                        <Input name='price' type='number' onChange={onChangeValue} defaultValue={price} />
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