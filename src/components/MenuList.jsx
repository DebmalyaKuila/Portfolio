import React from 'react'
import {
    HomeOutlined,
    UserOutlined,
    IdcardOutlined,
    BookOutlined,
    ProjectOutlined,
    PhoneOutlined
  } from '@ant-design/icons';
  import { Menu } from 'antd';


  const items = [
    { key: "home", label: "Home",  icon: <HomeOutlined />, },
    { key: "about", label: "About",  icon: <UserOutlined />, },
    { key: "experience", label: "Experience",  icon: <IdcardOutlined />, },
    { key: "projects", label: "Projects",  icon: <ProjectOutlined/>, },
    { key: "contact", label: "Contact",  icon: <PhoneOutlined />, }
  ];

const MenuList = () => {

    return (
      <>
      <Menu
      theme='dark'
      items={items}
      defaultSelectedKeys={['home']}
      style={{
        background:"#0e1111"
      }}
      />
      </>
       
  )
}

export default MenuList
