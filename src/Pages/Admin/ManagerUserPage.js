// import React, { useEffect, useState } from 'react'
// import ManagerUser from '../../Components/Admin/ManagerUser'
// import { Breadcrumb } from 'antd';
// import { useDispatch, useSelector } from 'react-redux';
// import { rsIsDelete } from '../../redux/actions/removeUserAction';
// function ManagerUserPage() {
//   const dispatch=useDispatch() 
//   const isDeleteSuccess = useSelector(state => state.removeUserReducer.isDeleteSuccess);
//   const [users, setUsers] = useState([])
 
//   useEffect(() => {
//     if(isDeleteSuccess){
//       dispatch(rsIsDelete)
//     }
//     fetch('http://localhost:3001/accounts')
//       .then((response) => response.json())
//       .then((accounts) => {
//         const user=  accounts.filter(accounts => accounts.role === 'user')
//         setUsers(user)
//       })
    
//       .catch((error) => {
//       });
//   }, [isDeleteSuccess]) 

//   return (
//     <div>
//         <Breadcrumb className='breadcrumb'>
//                 <Breadcrumb.Item className='breadcrumbItem'>Admin</Breadcrumb.Item>
//                 <Breadcrumb.Item className='breadcrumbItem'>Manager User</Breadcrumb.Item>
//             </Breadcrumb>
//             <div className="search-form-booking-main">
//                 <div className="search-form-booking-child">
//                   <ManagerUser users={users} />
                    
//                 </div>
//             </div>
//     </div>
//   )
// }

// export default ManagerUserPage
