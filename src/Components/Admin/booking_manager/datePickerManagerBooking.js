import './formBookingManager.css';
import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
const onChange = () => { };
const onOk = (value) => {
    console.log('onOk: ', value);
};
const DatePickerManagerBooking = () => (
    <div>
        <Space direction="vertical" size={12}>
            <RangePicker
                format="YYYY-MM-DD"
                onChange={onChange}
                onOk={onOk}
            />
        </Space>
    </div>
);
export default DatePickerManagerBooking;