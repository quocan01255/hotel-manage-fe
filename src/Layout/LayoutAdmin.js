import React, { useState } from 'react';
import { Link, Outlet } from "react-router-dom";

import HeaderAdmin from "../Components/Admin/HeaderAdmin";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  ContainerOutlined
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const LayoutAdmin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const [path, setPath] = useState("listbook");
  const items = [
    getItem(<Link to={"listbook"} onClick={() => { setPath("listbook"); }}>Quản lý danh mục</Link>, 'listbook', <ContainerOutlined />),
    getItem(<Link to={"taikhoan"} onClick={() => { setPath("taikhoan"); }}>Quản lý tài khoản</Link>, 'taikhoan', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <div
          style={{
            height: 32,
            margin: 16,
            color: 'red',
            fontSize: 25
            //  background: 'rgba(255, 255, 255, 0.2)',
          }}
        > Clement Hotel</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['listbook']}
          mode="inline"
          items={items}
          selectedKeys={path}

        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >

          {/* <HeaderAdmin/> */}
          <HeaderAdmin />
        </Header>
        <Content
          style={{
            margin: '24px  16px 0',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Admin</Breadcrumb.Item>
            <Breadcrumb.Item>{path}</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutAdmin;