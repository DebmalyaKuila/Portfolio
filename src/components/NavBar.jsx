import React from 'react'
import { Layout,Drawer } from 'antd';
const { Header,Sider } = Layout;

import MenuList from './MenuList.jsx'
import Icons from "./contact-icons.jsx"

const NavBar = ({collapsed,toggleCollapsed}) => {
  return (
      <>
            <Sider 
        collapsed={collapsed}
        className='h-screen fixed top-0 left-0 bottom-0 overflow-hidden font-bold'
        style={{
          background:"#0e1111"
        }}
        >
            <div>
          <Header style={{fontSize:"1.75rem"}} >
          {collapsed ?null: <div><span style={{color:"#ffb349"}}>D</span>K</div>  }
          </Header>
          <MenuList />
          </div>
          <Icons collapsed={collapsed}/>
        </Sider>


          <Drawer
        className='drawerMenu'
        closable={true}
        placement='left'
        open={collapsed}
        onClose={toggleCollapsed}
        width='200px'
        >
          <MenuList/>
          <Icons collapsed={true}/>
          </Drawer>

          
    </>
  )
}

export default NavBar
