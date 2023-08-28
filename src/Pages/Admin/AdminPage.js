import 'bootstrap/dist/css/bootstrap.css'
import DeluxePool from '../../Components/Admin/room_manager/DeluxePoolRoom';
import DeluxeExecutive from '../../Components/Admin/room_manager/DeluxeExecutiveRoom';
import DeluxePlus from '../../Components/Admin/room_manager/DeluxePlusRoom';
import Deluxe from '../../Components/Admin/room_manager/DeluxeRoom';
import React, {  useState } from 'react';
import { Routes, Route } from "react-router-dom";
import SearchFormBooking from '../../Components/Admin/booking_manager/searchFormBooking';
import { BarsOutlined, SolutionOutlined,HomeOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from "react-router-dom";
import '../../Components/Admin/booking_manager/formMainBookingManager.css';
import './cssAdmin.css'
import HeaderAdmin from '../../Components/Admin/HeaderAdmin'
import ManagerUserPage from './ManagerUserPage'
import img from "../../assets/img/logo3.png"
import DashBoard from '../../Components/Admin/DashBoard';
const { Content, Sider } = Layout;
function getItem(label, key, icon, children) {
  return { key, icon, children, label, };
}
const items = [
  getItem(<Link to={"DashBoard"}>DashBoard</Link>, '1',  <HomeOutlined />),
  getItem(<Link to={"ManagerBooking"}>Manager Booking</Link>, '2',  <SolutionOutlined />),
  getItem('Manager room', '3', <BarsOutlined />, [
    getItem(<Link to={"ManagerRoomDeluxePool"} className='menu-admin-room'>Deluxe Pool</Link>, '4',),
    getItem(<Link to={"ManagerRoomDeluxeExecutive"} className='menu-admin-room'>Deluxe Executive</Link>, '5'),
    getItem(<Link to={"ManagerRoomDeluxePlus"} className='menu-admin-room'>Deluxe Plus</Link>, '6'),
    getItem(<Link to={"ManagerRoomDeluxe"} className='menu-admin-room'>Deluxe</Link>, '7')]),
  getItem(<Link to={"ManagerUser"}>Manager User</Link>, '8', <SolutionOutlined />),

];
function AdminPage() {
  const [collapsed, setCollapsed] = useState(false);
  
  return (
    <div className='App'>
      <Layout className='layout-form-main-admin' >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} >
        <div
          style={{
            height: 32,
            margin: 16,
            color: '#7091F5',
            fontSize:25,
          //  background: 'rgba(255, 255, 255, 0.2)',
          }}
          
        >  <img src={img} alt=""width="55px"></img>
        CLÉMENT</div>
          <div className="demo-logo-vertical" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>       
        <Layout >
        <HeaderAdmin/>
          <Content className='conten-form-main-admin'>
            <Routes>
              <Route path="/" element={<DashBoard/>} />             
              <Route path="/ManagerBooking" element={<SearchFormBooking />} />
              <Route path="/ManagerRoomDeluxePool" element={<DeluxePool />} />
              <Route path="/ManagerRoomDeluxeExecutive" element={<DeluxeExecutive />} />
              <Route path="/ManagerRoomDeluxePlus" element={<DeluxePlus />} />
              <Route path="/ManagerRoomDeluxe" element={<Deluxe />} />
              <Route path="/ManagerUser" element={<ManagerUserPage/>} />
              <Route path="/DashBoard" element={<DashBoard/>} />
            
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default AdminPage;