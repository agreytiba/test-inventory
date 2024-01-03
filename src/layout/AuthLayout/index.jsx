import React from 'react';
import { Layout, Row, Col} from 'antd';
import { LoginOutlined, FileTextOutlined } from '@ant-design/icons';
import NavigationLinks from '@/components/NavigationLinks';

const menuItems = [
  // { key: '1', icon: <HomeOutlined />, link: '/home', title: 'Home' },
  { key: '2', icon: <LoginOutlined />, link: '/login', title: 'Login' },
  { key: '3', icon: <FileTextOutlined />, link: '/register', title: 'Register' },
  // Add more menu items as needed
];
export default function AuthLayout({ sideContent, children }) {
  return (
    <Layout>
     <NavigationLinks menuItems={menuItems}/>
      <Row>
        <Col
          xs={{ span: 0, order: 2 }}
          sm={{ span: 0, order: 2 }}
          md={{ span: 11, order: 1 }}
          lg={{ span: 12, order: 1 }}
          style={{
            minHeight: '100vh',
          }}
        >
          {sideContent}
        </Col>
        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 13, order: 2 }}
          lg={{ span: 12, order: 2 }}
          style={{ background: '#FFF', minHeight: '100vh' }}
        >
          {children}
        </Col>
      </Row>
    </Layout>
  );
}
