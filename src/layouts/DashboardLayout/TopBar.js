import React from 'react';
import {  useState  } from 'react';
import { Layout, Dropdown, Menu, Avatar, Badge, Button } from 'antd';
import { BellOutlined, DownOutlined,SearchOutlined,MenuOutlined } from '@ant-design/icons';
import userimg from "../../assets/images/user.png"
import logo from "../../assets/images/logo.png"

const { Header } = Layout;

const TopBar = ({ onToggle }) => {
  const [show, setShow] = useState(true);
  const dropdownMenu = (
    <Menu>
      <Menu.Item key="profile">Profile</Menu.Item>
      <Menu.Item key="logout">Logout</Menu.Item>
    </Menu>
  );

  return (
    <Header className="xl:px-7 px-5 xl:py-5 md:py-4 py-2 flex md:justify-between justify-end items-center bg-[#fff] md:rounded-tr-2xl h-[auto] xl:space-x-8 lg:space-x-6">
      <div className="2xl:w-4/5 xxl:w-9/12 lg:w-2/3 md:w-10/12 md:flex items-center hidden">
        <div className='flex items-center'>
          <Avatar
          size={65} src={<img src={userimg} alt="avatar" className='p-3'/>} style={{
            backgroundColor: '#ffb9b9',
            border: '2px solid #f4aeae',
          }} />
          <div className='ps-4'>
            <h1>User Name</h1>
            <h6>Description</h6>
          </div>
        </div>
        <Button shape="circle" className='ml-auto bg-[#f3f3f3] border-0' icon={<SearchOutlined />} />
        {/* <Search placeholder="Search" onSearch={(value) => console.log(value)} style={{ width: 200 }} className=" ml-auto" /> */}
        
      </div>

      <div className="2xl:w-1/5 xxl:w-3/12 lg:w-1/3 md:w-[140px] w-full flex items-center xl:justify-between justify-end">
        <a href='#' className='md:hidden mr-auto'><img src={logo} alt=""/></a>
        <Badge dot={show} size="small" className="mr-4">
          <BellOutlined />
        </Badge>

        <Dropdown overlay={dropdownMenu} trigger={['click']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            <Avatar src={<img src={userimg} alt="avatar" className='p-1 mr-1'/>} style={{
                backgroundColor: '#ffb9b9',
                border: '2px solid #f4aeae',
              }} 
            />
            <span className='pl-2 xl:inline-block hidden'>Johntosan</span>
            <DownOutlined height={3} className="pl-2"/>
          </a>
        </Dropdown>
        <Button type="default" className='xl:hidden ml-2' onClick={onToggle} icon={<MenuOutlined />} />
      </div>
    </Header>
  );
}

export default TopBar;
