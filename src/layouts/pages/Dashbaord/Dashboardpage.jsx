import React from 'react';
import MonthlyRevenue from './MonthlyRevenue';
import ThumbBarChart from './ThumbBarChart';
import { CaretUpOutlined, AntDesignOutlined, DownOutlined,ArrowRightOutlined  } from '@ant-design/icons';
import { Avatar,Select,Dropdown,Menu,Button,Divider } from 'antd';
import userimg from "../../../assets/images/user.png";
import MonthDropdown from './MonthDropdown';
import UserList from './UserList';
import Calendar from './MyCalendar';
import MettingList from './MettingList';

const handleChange = (value) => {
    console.log(`selected ${value}`);
};
const dropdownMenu = (
    <Menu>
      <Menu.Item key="profile">data 1</Menu.Item>
      <Menu.Item key="logout">data 2</Menu.Item>
    </Menu>
  );
const Dashboardpage = () => {

    return (
        <>
            <div className='lg:space-x-8 flex lg:flex-nowrap flex-wrap'>
                <div className='2xl:w-4/5 xxl:w-9/12 lg:w-2/3 w-full'>
                    <div className='rounded-2xl bg-theme-color grid md:grid-cols-3 grid-cols-1 xl:gap-10 gap-5 place-content-center p-6 mb-7'>
                        <MonthlyRevenue/>
                        <MonthlyRevenue/>
                        <MonthlyRevenue/>
                    </div>
                    <div className='rounded-2xl  border-solid border-light-white p-6 border mb-7'>
                        <div className='flex md:flex-nowrap flex-wrap space-x-4'>
                            <div class="md:w-2/5 w-full flex flex-col">
                                <div className='mb-4'>
                                    <h4>Total Sales & Cost</h4>
                                    <h6>Last 60 days</h6>
                                </div>
                                <div className='mt-auto'>
                                    <h2 className='text-theme-color font-bold xl:text-4xl text-2xl flex items-center xl:leading-none leading-none mb-1'>$867.88 
                                        <span className='text-green text-[10px] px-1 py-1 rounded-xl bg-[#acfde0] ms-4'><CaretUpOutlined /> +5.4%</span>
                                        </h2>
                                    <h6><span className='text-green'>+5.5k</span> vs 60 days</h6>
                                </div>
                            </div>
                            <div class="md:w-3/5 w-full">
                                <ThumbBarChart />
                            </div>
                        </div>
                    </div>

                    <section className='mb-5'>
                        <div className='flex flex-row md:mb-5 mb-2 md:flex-nowrap flex-wrap'>
                            <div class="md:basis-3/4 basis-full md:mb-0 mb-2">
                                <h3>Transition Histroy</h3>
                            </div>
                            <div class="md:basis-1/4 basis-full text-right">
                                <MonthDropdown />
                            </div>
                        </div>
                        <div className='md:space-x-4 space-x-1 md:text-left text-right transition-select'>
                            <Select className='md:mb-0 mb-2 text-left'
                                defaultValue="Recepient"
                                style={{ width: 120, backgroundColor: '#f7f7f7' }}
                                onChange={handleChange}
                                options={[
                                    { value: 'jack', label: 'Jack' },
                                    { value: 'lucy', label: 'Lucy' },
                                ]}
                                suffixIcon={
                                <>
                                    <DownOutlined  style={{  color: '#000' }}/>
                                </>
                                }
                            />
                            <Select className='md:mb-0 mb-2 text-left'
                                defaultValue="Amount"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                options={[
                                    { value: '#100,00', label: '#100,00' },
                                    { value: '$77,6', label: '$77,6' },
                                ]}
                                suffixIcon={
                                <>
                                    <DownOutlined  style={{  color: '#000' }}/>
                                </>
                                }
                            />
                            <Select className='md:mb-0 mb-2 text-left'
                                defaultValue="Status"
                                style={{ width: 120 }}
                                onChange={handleChange}
                                options={[
                                    { value: 'Success', label: 'Success' },
                                    { value: 'Pending', label: 'Pending' },
                                ]}
                                suffixIcon={
                                <>
                                    <DownOutlined  style={{  color: '#000' }}/>
                                </>
                                }
                            />
                        </div>
                    </section>
                    <UserList/>
                </div>
                <div className='2xl:w-1/5 xxl:w-3/12 lg:w-1/3 w-full'>
                    <div className='mb-3'>
                        <h6 className='text-theme-color mb-2'>Premiun Access</h6>
                        <h3 className='font-bold'><span className='pr-3 align-top'>Take Back Your Creative control</span>
                            <Avatar.Group maxCount={2} maxStyle={{ color: '#fff', backgroundColor: '#000' }}>
                                <Avatar src={<img src={userimg} alt="avatar" />}/>
                                <Avatar style={{ backgroundColor: '#6e62e5' }}>K</Avatar>
                                <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
                            </Avatar.Group>
                        </h3>
                    </div>

                    <div className='mb-6'>
                        <Dropdown overlay={dropdownMenu} trigger={['click']}>
                        <h6 className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            <span className='pr-2'>This Profesional Platform</span>
                            <DownOutlined height={3}/>
                        </h6>
                        </Dropdown>
                    </div>
                    <Button className='ml-auto w-full flex items-center justify-between py-2 mb-5' style={{ color : '#6e62e5', height: 'auto'}}>
                        Upgrade Now<ArrowRightOutlined />
                    </Button>
                    <Divider />
                    <Calendar/>
                    <MettingList />
                </div>
            </div>
        </>
    );
}

export default Dashboardpage;
