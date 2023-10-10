import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import logo from "../../assets/images/logo.png";
import Collapsedlogo from "../../assets/images/smalllogo.png";
import Explore from "../../assets/images/explore-svgrepo-com.svg";

const { Sider } = Layout;

const Sidebar = ({ collapsed }) => {
  const menustyle = {
    border: "0",
  };
  const mystyle = {
    
  }
  return (
    <Sider 
      collapsible 
      collapsed={collapsed} 
      breakpoint="lg" 
      width={250} 
      className="md:rounded-tl-2xl md:rounded-bl-2xl overflow-hidden md:p-4 p-2 border-solid border-e-2 border-light-white" 
      style={{ background: "white" }} 
      trigger={null} 
    >
      <div className="logo text-center px-3 pb-4 pt-2">

      {collapsed ? 
        <img src={Collapsedlogo} alt=""/> :
        <img src={logo} alt=""/>
      }

      </div>
      <div className='h-[calc(46% - 100px)]'>
        <Menu defaultSelectedKeys={['1']} mode="vertical" style={menustyle}>
          <Menu.Item key="1" icon={<HomeOutlined />} style={mystyle}>Analytic</Menu.Item>
          <Menu.Item key="2" icon={<img src={Explore} className="align-middle"/>} style={mystyle}>Explore</Menu.Item>
          <Menu.Item key="3" icon={<HomeOutlined />} style={mystyle}>Shop</Menu.Item>
          <Menu.Item key="4" icon={<HomeOutlined />} style={mystyle}>Indox</Menu.Item>
        </Menu>
        <div className='mt-5'>
          <h6 className='px-1'>Tools</h6>
          <Menu mode="vertical" style={menustyle}>
            <Menu.Item key="5" icon={<HomeOutlined />} style={mystyle}>Setting</Menu.Item>
            <Menu.Item key="6" icon={<HomeOutlined />} style={mystyle}>Help</Menu.Item>
          </Menu>
        </div>
        <div className='mt-5'>
          <h6>Projects</h6>
          <Menu mode="vertical" style={menustyle}>
            <Menu.Item key="7" icon={<HomeOutlined />} style={mystyle}>Amazon</Menu.Item>
            <Menu.Item key="8" icon={<HomeOutlined />} style={mystyle}>Invinity HQ</Menu.Item>
          </Menu>
        </div>
      </div>
    </Sider>
  );
}

export default Sidebar;
