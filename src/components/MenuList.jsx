import React from 'react'
import {
    HomeOutlined,
    UserOutlined,
    IdcardOutlined,
    SettingOutlined,
    ProjectOutlined,
    PhoneOutlined
  } from '@ant-design/icons';
  import { Menu } from 'antd';


  const items = [
    { key: "home", label: "Home",  icon: <HomeOutlined />, },
    { key: "about", label: "About",  icon: <UserOutlined />, },
    { key: "skills", label: "Skills",  icon: <SettingOutlined />, },
    { key: "experience", label: "Experience",  icon: <IdcardOutlined />, },
    { key: "projects", label: "Projects",  icon: <ProjectOutlined/>, },
    { key: "contact", label: "Contact",  icon: <PhoneOutlined />, }
  ];

const MenuList = () => {

  const handleMenuClick = (e) => {
    console.log(e.key);
    // Additional logic if needed
    const element = document.getElementById(e.key);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  };

    return (
      <>
      <Menu
      theme='dark'
      items={items}
      defaultSelectedKeys={['home']}
      onClick={handleMenuClick}
      style={{
        background:"#0e1111"
      }}
      />
      </>
       
  )
}

export default MenuList
