import React, { useState } from 'react';
import userimg from "../../../assets/images/user.png";
import {  Avatar, Badge } from 'antd';

const MonthlyRevenue = () => {
    const [show, setShow] = useState(true);
    return (
        <>
            <div className='flex items-center'>
                <Avatar
                size={46} src={<img src={userimg} alt="avatar" className='p-3'/>} style={{
                    backgroundColor: '#ffb9b9',
                    border: '2px solid #f4aeae',
                }} />
                <div className='ps-4'>
                    <h6 className='text-[#fff] mb-1'>Monthly Revenue</h6>
                    <h4 className='text-[#fff] flex items-center' >$3500 
                    <Badge
                        className="site-badge-count-109 ms-3"
                        count={show ? 109 : 0}
                        style={{ backgroundColor: '#fff', color: '#6e62e5', height: 'auto', minHeight: 'auto', lineHeight: '1.5', fontSize: '10px'}}
                    />
                    </h4>                    
                    <h6 className='text-[#fff]'>Previous month <b>#1.7k</b></h6>
                </div>
            </div>
        </>
    );
}

export default MonthlyRevenue;
