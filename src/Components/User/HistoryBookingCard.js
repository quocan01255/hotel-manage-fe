import React, { useEffect, useState } from 'react';
import { Button, Space, Table } from 'antd';
import { MailOutlined, PhoneOutlined, UserOutlined } from "@ant-design/icons";
import { Link } from 'react-router-dom';
import { getBookings } from '../../services/api';
const ListBookCard = () => {
  const userId = localStorage.getItem("id");
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await getBookings(userId)
    setData(response);
  }

  useEffect(() => {
    fetchData();
  }, [])

  const columns = [
    {
      title: 'Customer information',
      render: (record) => {
        return (
          <>
            <UserOutlined style={{ fontSize: 20 }} /> {record.name}<br />
            <MailOutlined style={{ fontSize: 20 }} /> {record.email}<br />
            <PhoneOutlined style={{ fontSize: 20 }} /> {record.phone}<br />
          </>
        );
      },

      ellipsis: true,
      width: '35%',

    },
    // {
    //   title: 'Room',
    //   dataIndex: 'nameroom',
    //   key: 'nameroom',
    //   width: '35%',
    // },
    {
      title: 'Booking date',
      render: (record) => {
        const date = new Date(record.booking_date);
        return (
          <>
            {date.toLocaleDateString()}
          </>
        );
      }
    },
    {
      title: 'Price',
      render: (record) => {
        return (
          <>
            {new Intl.NumberFormat("vi-VN", {
              style: "currency",
              currency: "VND",
            }).format(record.total_price)}
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
            <Link to={`/history/${record.id}`} className='btn-add-mr' type="primary" >
              <Button>Detail</Button>
            </Link>
          </Space>
        </Space >
      ),
    },
  ];
  return <Table columns={columns} dataSource={data} />;
};
export default ListBookCard;