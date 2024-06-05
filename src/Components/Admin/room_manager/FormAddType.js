import React, { useState } from 'react';
import { Button, Form, Input } from 'antd';
import './cssFormAddEditRoom.css';

const FormAddType = ({ type, close, handleAdd }) => {
    const [name, setName] = useState('')

    const onChangeValue = (e) => {
        const { name, value } = e.target
        setName(value);
    }

    const handleSubmit = async () => {
        handleAdd(name)
        close()
        setName('');
    }

  
    return (
        <div className='add-main-form-admin-room'>
            <div className='add-main-form-child-room'>
                <Form labelCol={{ span: 4, }} wrapperCol={{ span: 14, }} layout="horizontal" >
                    <Form.Item label="Name" className='input-form-admin-add-room'>
                        <Input value={name} name='name' onChange={onChangeValue} />
                    </Form.Item>
                    <Form.Item className='btn-admin-form-add-room'>
                        <Button type="primary" className='btn-admin-inform-add-room' onClick={handleSubmit}>Add</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default FormAddType
