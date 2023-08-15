import React from 'react';
import { Input, Space } from 'antd';
import './formBookingManager.css'

const { Search } = Input;
const onSearch = (value) => console.log(value);
const SearchBar = () => (
    <Space direction="vertical">
        <Search className='search-bar-form-booking'
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            onSearch={onSearch}
        />
    </Space>
);
export default SearchBar;