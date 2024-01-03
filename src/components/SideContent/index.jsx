import React from 'react';
import { Space, Layout, Divider } from 'antd';
import { Typography } from 'antd';



const { Content } = Layout;
const { Title, Text } = Typography;

export default function SideContent() {
  return (
    <Content
      style={{
        padding: '150px 30px 30px',
        width: '100%',
        maxWidth: '400px',
        margin: '0 auto',
      }}
      className="sideContent"
    >
      <div style={{ width: '100%' }}>
      
        <div className="space40"></div>
        <Title level={3}>Manage your company with :</Title>
        <div className="space20"></div>
        <ul className="list-checked">
          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>All-in-one tool</Text>

              <Text>Build, run, and scale your apps - end to end</Text>
            </Space>
          </li>

          <li className="list-checked-item">
            <Space direction="vertical">
              <Text strong>Easily add &amp; manage your services</Text>
              <Text>It brings together your tasks, projects, timelines, files and more</Text>
            </Space>
          </li>
        </ul>
        <Divider />
        
      </div>
    </Content>
  );
}
