import React, { useState } from 'react';
import { Input, Space } from 'antd';
import './formBookingManager.css'


const SearchBar = (props) => {
    const [name,setName ] = useState();
    const { Search } = Input;
    const onSearch = (value) =>{                   
        setName(value);
        props.onSubmit(name);  
    }

    return (
        <Space direction="vertical">
            <Search className='search-bar-form-booking'
                placeholder="input search text"
                allowClear
                enterButton="Search"                
                size="large"
                onSearch={onSearch}
              
            />
            
        </Space>
    )
}




export default SearchBar;