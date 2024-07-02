import React,{useState}  from 'react'
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined
} from "@ant-design/icons"
import { Button, Layout } from 'antd';
const { Header} = Layout;

const MainHeader = ({collapsed,toggleCollapsed}) => {

  return (
    <Header className='text-white w-full  flex justify-between items-center shrink-0'>
    <Button
        type="primary"
        onClick={toggleCollapsed}
        style={{backgroundColor:"inherit",color:"white"}}
      >
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button>
    <Button type='primary' 
    style={{backgroundColor:"inherit",color:"white"}}
    href="../assets/Resume/Debmalya_Kuila_Resume.pdf"
    download="Debmalya_Kuila_Resume.pdf"
    >Download CV</Button>
    </Header>
  )
}

export default MainHeader
