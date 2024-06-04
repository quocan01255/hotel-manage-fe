// import React, { useState } from 'react';
// import { Input, Space } from 'antd';
// import './formBookingManager.css'
// import { useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// const SearchBar = (props) => {
//     const { Search } = Input;
//     const onSearch = (value) =>{   
//         props.onSubmit(value);  
//     }
//     const dispatch = useDispatch();
//     const message = useSelector(state => state.SearchAdminReducer.message)
//     useEffect(() => {
//         if (message) {
//             toast.success(message, {
//                 position: toast.POSITION.TOP_CENTER,
//                 autoClose: 3000,
//                 hideProgressBar: true,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "light",
//             });
//             dispatch(resetmessage())
//         }
//     }, [message]);
//     return (
//         <Space direction="vertical">
//             <Search className='search-bar-form-booking'
//                 placeholder="Search text"
//                 allowClear
//                 enterButton="Search"                
//                 size="large"
//                 onSearch={(value) => onSearch(value)}
//             />
            
//         </Space>
//     )
// }




// export default SearchBar;