
import React from 'react';

import { Button, Space, Table } from 'antd';
import { removeuser } from '../../redux/actions/removeUserAction';
import { useDispatch } from 'react-redux';

const ManagerUser = (props) => {
  const {users}=props
  const dispatch=useDispatch() 
   const remove =(id)=>{
    dispatch(removeuser(id))
  }
  const columns = [
    {
      title: 'First Name',
      dataIndex: 'firstName',
      key: 'firstname',
      width: '20%',
 
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastname',
      width: '20%',
     
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      key: 'email',
      width: '20%',
    
    },
    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
      width: '20%',
      
    },
    {
      title: 'Action',
      key: 'action',
      render: (users) => (
        <Space size="middle">
          <Space className="site-button-ghost-wrapper" wrap>
          
            <Button type="primary" danger onClick={() => remove(users.id)} ><i class="fa-solid fa-trash"></i></Button> 
         

          </Space>
        </Space >
      ),
    },
    
  ];
  return <Table columns={columns} dataSource={users} />;
};
export default ManagerUser;