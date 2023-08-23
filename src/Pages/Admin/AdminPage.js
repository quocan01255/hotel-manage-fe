import 'bootstrap/dist/css/bootstrap.css'
import DeluxePool from '../../Components/Admin/room_manager/DeluxePoolRoom';
import DeluxeExecutive from '../../Components/Admin/room_manager/DeluxeExecutiveRoom';
import DeluxePlus from '../../Components/Admin/room_manager/DeluxePlusRoom';
import Deluxe from '../../Components/Admin/room_manager/DeluxeRoom';
import React, {  useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SearchFormBooking from '../../Components/Admin/booking_manager/searchFormBooking';
import { BarsOutlined, SolutionOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import '../../Components/Admin/booking_manager/formMainBookingManager.css';
import './cssAdmin.css'

const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return { key, icon, children, label, };
}
const items = [
  getItem(<Link to={"ManagerBooking"}>Manager Booking</Link>, '1', <SolutionOutlined />),
  getItem('Manager room', '2', <BarsOutlined />, [
    getItem(<Link to={"ManagerRoomDeluxePool"} className='menu-admin-room'>Deluxe Pool</Link>, '3',),
    getItem(<Link to={"ManagerRoomDeluxeExecutive"} className='menu-admin-room'>Deluxe Executive</Link>, '4'),
    getItem(<Link to={"ManagerRoomDeluxePlus"} className='menu-admin-room'>Deluxe Plus</Link>, '5'),
    getItem(<Link to={"ManagerRoomDeluxe"} className='menu-admin-room'>Deluxe</Link>, '6')]),
];
function AdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className='App'>
      <Layout className='layout-form-main-admin'>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Content className='conten-form-main-admin'>
            <Routes>
              <Route path="/" element={<SearchFormBooking />} />
              <Route path="/ManagerBooking" element={<SearchFormBooking />} />
              <Route path="/ManagerRoomDeluxePool" element={<DeluxePool />} />
              <Route path="/ManagerRoomDeluxeExecutive" element={<DeluxeExecutive />} />
              <Route path="/ManagerRoomDeluxePlus" element={<DeluxePlus />} />
              <Route path="/ManagerRoomDeluxe" element={<Deluxe />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminPage;