import React from 'react'
import { useEffect, useState } from 'react';
// import DoanhThuTheoNgay from './DoanhThuTheoNgay'
import DoanhThuTheoThangChart from './DoanhThuTheoThangChart'
import { Card, Col, DatePicker, Divider, Row, Statistic,Select } from 'antd';
// import AccountPieChart from '../../components/admin/AccountPieChart';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useMemo } from 'react';


function DashBoard() {
  var today = new Date();
  const [bookings, setBookings] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [top,setTop]=useState(5);
  const month = (today.getMonth() + 1) < 10 ? ('0' + (today.getMonth() + 1)) : (today.getMonth() + 1);
  const [year, setYear] = useState("2023");
  // const [date, setDate] = useState(month + '/' + today.getDate() + '/' + today.getFullYear());
  useEffect(() => {
    fetch('http://localhost:3001/bookings')
      .then((response) => response.json())
      .then((booking) => {
        setBookings(booking)
      })
      .catch((error) => {
      });
  }, [])
  useEffect(() => {
    fetch('http://localhost:3001/accounts')
      .then((response) => response.json())
      .then((account) => {
        const user=  account.filter(accounts => accounts.role === 'user')
        setAccounts(user)
      })
      .catch((error) => {
      });
  }, [])
  const onChange = (date, dateString) => {
    setYear(dateString)
  };
  // const onChangeDate = (date, dateString) => {
  //   console.log(dateString)
  //   setDate(dateString)
  // };
  const totalRoomPrice = useMemo(() => {
    return bookings.reduce((total, room) => total + room.totalRoomPrice, 0);
  }, [bookings]);

  return (
    <div>
      <Divider orientation="left">Overview</Divider>
      <Row gutter={30}>
        <Col span={6} order={1}>
          <Card bordered={false} style={{ backgroundColor: '#D5FFD0' }}>
            <Statistic
              title="Number of bookings"
              value={bookings.length}
              precision={0}
              valueStyle={{
                color: '#3f8600',
                fontSize: '22px'
              }}
              prefix={<ArrowUpOutlined />}
              suffix="- Bookings"
            />
          </Card>

        </Col>

        <Col span={6} order={2}>
          <Card bordered={false} style={{ backgroundColor: '#E6E6FA' }}>
            <Statistic
              title="Total Revenue"
              // value={users?users.price:0}
              value={totalRoomPrice}
              precision={0}
              valueStyle={{
                color: '#3f8600',
                fontSize: '22px'
              }}
              prefix={<ArrowUpOutlined />}
              suffix="đ"
            />
          </Card>
        </Col>

        <Col span={6} order={2}>
          <Card bordered={false} style={{ backgroundColor: '#F7E8F0' }}>
            <Statistic
              title="Total Accounts"
              // value={users?users.price:0}
              value={accounts.length}
              precision={0}
              valueStyle={{
                color: '#3f8600',
                fontSize: '22px'
              }}
              prefix={<ArrowUpOutlined />}
              suffix="Accounts"
            />
          </Card>
        </Col>
      </Row>
      <Divider orientation="left">Statistical chart</Divider>
      <Row>
      <Col flex={8} span={2}> 
      <DatePicker onChange={onChange} picker="year" />      
        </Col> 
        <Col flex={8} span={20}>         
          <DoanhThuTheoThangChart year={year} />
        </Col>     
      </Row>
    </div>
  )
}

export default DashBoard