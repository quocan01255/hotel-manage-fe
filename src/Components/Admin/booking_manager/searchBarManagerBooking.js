import React, { useState } from 'react';
import { Input, Space } from 'antd';
import './formBookingManager.css'


const SearchBar = (props) => {
    const { Search } = Input;
    const onSearch = (value) =>{   
        props.onSubmit(value);  
    }

    return (
        <Space direction="vertical">
            <Search className='search-bar-form-booking'
                placeholder="Search text"
                allowClear
                enterButton="Search"                
                size="large"
                onSearch={(value) => onSearch(value)}
            />
            
        </Space>
    )
}




export default SearchBar;