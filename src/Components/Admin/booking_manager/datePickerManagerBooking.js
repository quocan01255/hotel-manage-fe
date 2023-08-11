import './formBookingManager.css';
import React from 'react';
import { DatePicker, Space } from 'antd';

const { RangePicker } = DatePicker;
const onChange = (value, dateString) => {
    console.log('Selected Time: ', value);
    console.log('Formatted Selected Time: ', dateString);
};

const onOk = (value) => {
    console.log('onOk: ', value);
};

const DatePickerManagerBooking = () => (
    <div>
        <Space direction="vertical" size={12}>
            <RangePicker
                showTime={{
                    format: 'HH:mm',
                }}
                format="YYYY-MM-DD HH:mm"
                onChange={onChange}
                onOk={onOk}
            />
        </Space>
    </div>
);
export default DatePickerManagerBooking;