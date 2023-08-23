import React, { useEffect, useState } from 'react';
import { Space, Table } from 'antd';
import { MailOutlined,PhoneOutlined,UserOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom';
const ListBookCard = () => {
  const checkUser = JSON.parse(localStorage.getItem("user"));
  const [data,setData] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3001/bookings')
      .then(res => res.json())
      .then((booking) => {
         const phong =booking.filter((item)=>item.idUser === checkUser.id )
        setData(phong) 
      })
  }, []);

  console.log(data)
  const columns = [
    {
      title: 'Customer information',
      render: (record) => {
        return (
           <>
           <UserOutlined style={{fontSize:20}} /> {record.fistname}<br/>
             <MailOutlined  style={{fontSize:20}} /> {record.email}<br/>
             <PhoneOutlined style={{fontSize:20}} /> {record.phone}<br/>
           </>
           
        );},
       
        ellipsis: true,     
        width: '35%',
        
    },
    {
      title: 'Room',
      dataIndex: 'nameroom',
      key: 'nameroom',
      width: '35%',     
    },
   
    
    
    {
      title: 'Giá Room',
        render: (record) => {
          return (
            <>
             {new Intl.NumberFormat("vi-VN", {
          style: "currency",
          currency: "VND",
            }).format(record.totalRoomPrice)}
            </>
          );
        }
    }, 
    {
      title: 'Action',
      key: 'action',
      render: (record) => (
        <Space size="middle">
          <Space className="site-button-ghost-wrapper" wrap>        
          <Link to={`/history/${record.id}`} className='btn-add-mr' type="primary" >Detail</Link>
          
        </Space>
            </Space >
        ),
    },
];
return <Table columns={columns} dataSource={data} />;
};
export default ListBookCard;