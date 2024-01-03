import React from 'react'
import { Link } from 'react-router-dom';
import { Menu } from 'antd';
const NavigationLinks = ({menuItems}) => {
  return (
      <div>
        
       <Menu mode='horizontal'  style={{display:'flex',justifyContent:'right', marginRight:'10px'}}>
          {menuItems.map(item => (
        <Menu.Item key={item.key} icon={item.icon}>
          <Link to={item.link}>{item.title}</Link>
        </Menu.Item>
          ))}
           
        </Menu> 
    </div>
  )
}

export default NavigationLinks