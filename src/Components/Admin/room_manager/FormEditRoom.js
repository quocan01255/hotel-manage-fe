import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { Button, Form, Input, Select, Upload } from 'antd';
import './cssFormAddEditRoom.css';

const { TextArea } = Input;
const normFile = (e) => {
    if (Array.isArray(e)) {
        return e;
    }
    return e?.fileList;
};
const FormDetail = ({ name, image, detail, description, price, type, quantity }) => {
    return (
        <div className='add-main-form-admin-room'>
            <div className='add-main-form-child-room'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name room" className='input-form-admin-add-room'>
                        <Input defaultValue={name} />
                    </Form.Item>
                    <Form.Item label="Type room" className='input-form-admin-add-room'>
                        <Select defaultValue={type}>
                            <Select.Option value="Deluxe Pool">Deluxe Pool</Select.Option>
                            <Select.Option value="Deluxe Executive">Deluxe Executive</Select.Option>
                            <Select.Option value="Deluxe Plus">Deluxe Plus</Select.Option>
                            <Select.Option value="Deluxe">Deluxe</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Quantity" className='input-form-admin-add-room'>
                        <Select defaultValue={quantity}>
                            <Select.Option value="1">1</Select.Option>
                            <Select.Option value="2">2</Select.Option>
                            <Select.Option value="3">3</Select.Option>
                            <Select.Option value="4">4</Select.Option>
                            <Select.Option value="5">5</Select.Option>
                        </Select>
                    </Form.Item>
                    <Form.Item label="Detail" className='input-form-admin-add-room'>
                        <TextArea defaultValue={detail} rows={2} />
                    </Form.Item>
                    <Form.Item label="Description" className='input-form-admin-add-room'>
                        <TextArea defaultValue={description} rows={5} />
                    </Form.Item>
                    <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile} className='input-form-admin-add-room'>
                        <Upload defaultFileList={[{ "thumbUrl": `${image}` }]} action="/upload.do" listType="picture-card" >
                            <div>
                                <PlusOutlined />
                                <div className='img-admin-form-add-room'>
                                    Upload
                                </div>
                            </div>
                        </Upload>
                    </Form.Item>
                    <Form.Item label="Price" className='input-form-admin-add-room'>
                        <Input defaultValue={price} />
                    </Form.Item>
                    <Form.Item className='btn-admin-form-add-room'>
                        <Button type="primary" className='btn-admin-inform-add-room'>Edit</Button>
                    </Form.Item>
                </Form>
            </div>
        </div >
    );
};
export default FormDetail