import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Select, DatePicker, Upload } from 'antd';
import './cssFormAddEditRoom.css';

const { TextArea } = Input;

const FormEditType = ({ type, close, handleUpdate }) => {
    const { id, name } = type;
    const [typeName, setTypeName] = useState(name);

    useEffect(() => {
        setTypeName(name);
    }, [name]);

    const onChangeValue = (e) => {
        const { value } = e.target
        setTypeName(value);
    }

    const handleUpdateType = () => {
        handleUpdate(id, typeName);
        close();
    }

    return (
        <div className='add-main-form-admin-room'>
            <div className='add-main-form-child-room'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name" className='input-form-admin-add-room'>
                        <Input name='name' type="text" onChange={onChangeValue} value={typeName} required/>
                    </Form.Item>
                    <Form.Item className='btn-admin-form-add-room'>
                        <Button type="primary" className='btn-admin-inform-add-room' onClick={handleUpdateType}>Save</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default FormEditType