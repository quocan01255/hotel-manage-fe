import React from 'react'
import { useEffect, useState } from 'react';
import DoanhThuTheoThangChart from './DoanhThuTheoThangChart'
import { Card, Col, DatePicker, Divider, Row, Statistic, Select } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';
import { useMemo } from 'react';
import { getAllBookings, getTotalUsers } from '../../services/api';
import { Bars } from 'react-loader-spinner';


function DashBoard() {
  var today = new Date();
  const [bookings, setBookings] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);

  const currentYear = new Date().getFullYear()

  const [year, setYear] = useState(currentYear);
  const [total, setTotal] = useState(0);
  const [counts, setCounts] = useState(0);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch('http://localhost:3001/bookings')
  //     .then((response) => response.json())
  //     .then((bookings) => {
  //       let yearRevenue = 0
  //       let count = 0
  //       bookings.forEach((booking) => {
  //         booking.rooms.forEach((room) => {

  //           const [day, month, years] = room.checkout.split('/')
  //           if (years == year) {
  //             yearRevenue += room.price * room.quantity
  //             count = count + 1

  //           }
  //         })
  //       })
  //       setTotal(yearRevenue);
  //       setBookings(bookings)
  //       setCounts(count)

  //     })
  //     .catch((error) => {
  //     });
  // }, [year])

  const fetchData = async () => {
    const bookings = await getAllBookings();
    let yearRevenue = 0
    let count = 0

    bookings.forEach((booking) => {
      const [years, month, day] = booking.booking_date.split('-')
      if (years == year) {
        yearRevenue += parseFloat(booking.total_price)
        count = count + 1
      }
    })
    setTotal(yearRevenue);
    setBookings(bookings)
    setCounts(count)
    setLoading(false);
  }

  const fetchUsers = async () => {
    const response = await getTotalUsers();
    setTotalUsers(parseInt(response[0].count))
  }

  useEffect(() => {
    fetchData();
    fetchUsers();
  }, [year])



  // useEffect(() => {
  //   fetch('http://localhost:3001/accounts')
  //     .then((response) => response.json())
  //     .then((account) => {
  //       const user = account.filter(accounts => accounts.role === 'user')
  //       setAccounts(user)
  //     })
  //     .catch((error) => {
  //     });
  // }, [])

  const onChange = (date, dateString) => {
    setYear(dateString)
  };

  return (
    <>
      {
        loading ? (
          <div className="d-flex justify-content-center align-items-center p-5" style={{height: "100%"}}>
            <Bars
              height="80"
              width="80"
              color="#001529"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        ) : (
          <div>
            <Divider orientation="left">Overview</Divider>
            <Row gutter={30}>
              <Col span={6} order={1}>
                <Card bordered={false} style={{ backgroundColor: '#D5FFD0' }}>
                  <Statistic
                    title="Number of bookings"
                    value={counts}
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
                    title={`Revenue by year ${year} `}
                    value={total}
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
                    title="Total Customers"
                    // value={users?users.price:0}
                    value={totalUsers}
                    precision={0}
                    valueStyle={{
                      color: '#3f8600',
                      fontSize: '22px'
                    }}
                    prefix={<ArrowUpOutlined />}
                    suffix="Customers"
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
                <DoanhThuTheoThangChart year={year} bookings={bookings} />
              </Col>
            </Row>
          </div>
        )
      }
    </>
  )
}

export default DashBoard