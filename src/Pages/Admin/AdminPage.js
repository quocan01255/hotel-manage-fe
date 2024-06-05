import 'bootstrap/dist/css/bootstrap.css'
import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SearchFormBooking from '../../Components/Admin/booking_manager/searchFormBooking';
import { BarsOutlined, SolutionOutlined, HomeOutlined, OrderedListOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import '../../Components/Admin/booking_manager/formMainBookingManager.css';
import './cssAdmin.css'
import HeaderAdmin from '../../Components/Admin/HeaderAdmin'
import ManagerTypePage from './ManagerTypePage'
import DashBoard from '../../Components/Admin/DashBoard';
import { getTypeRooms } from '../../services/api';
import RoomType from '../../Components/Admin/room_manager/RoomType';
const { Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return { key, icon, children, label};
}

function AdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  const [types, setTypes] = useState([]);
  const [items, setItems] = useState([
    getItem(<Link to={"DashBoard"}>DashBoard</Link>, '1', <HomeOutlined />),
    getItem(<Link to={"ManagerBooking"}>Manager Booking</Link>, '2', <SolutionOutlined />),
    getItem('Manager room', '3', <BarsOutlined />, []),
    getItem(<Link to={"ManagerTypePage"}>Manager Types</Link>, '8', <OrderedListOutlined />),
  ]);

  const getTypeRoomItems = (types) => {
    return types.map((type) => getItem(
      <Link to={`ManagerRoom/${type.id}`} className='menu-admin-room'>{type.name}</Link>,
    ));
  }

  const fetchTypeRooms = async () => {
    const response = await getTypeRooms();
    setTypes(response)

    const typeRoomItems = getTypeRoomItems(response);
    setItems(prevItems => prevItems.map(item => {
      if (item.key === '3') {
        return { ...item, children: typeRoomItems };
      }
      return item;
    }));
  }

  useEffect(() => {
    fetchTypeRooms();
  }, [])

  return (
    <div className='App'>
      <Layout className='layout-form-main-admin' >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
          <div
            style={{
              height: 32,
              margin: 16,
              color: '#7091F5',
              fontSize: 25,
              //  background: 'rgba(255, 255, 255, 0.2)',
            }}

          >
            CLEMENT
          </div>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout >
          <HeaderAdmin />
          <Content className='conten-form-main-admin'>
            <Routes>
              <Route index element={<DashBoard />} />
              <Route path="/ManagerBooking" element={<SearchFormBooking />} />
              <Route path="/ManagerRoom/:typeId" element={<RoomType />} />
              <Route path="/ManagerTypePage" element={<ManagerTypePage fetchTypeRooms={fetchTypeRooms} />} />
              <Route path="/DashBoard" element={<DashBoard />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminPage;