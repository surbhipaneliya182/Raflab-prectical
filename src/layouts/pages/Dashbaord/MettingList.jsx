import React from 'react';
import { List, Avatar, Typography, Space } from 'antd';
import { ClockCircleOutlined, LinkOutlined } from '@ant-design/icons';

function MettingList() {
  const data = [
    {
      title: 'Meeting 1',
      avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg',
      link: '#',
      time: '10:30 AM'
    },
    {
      title: 'Meeting 2',
      avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg',
      link: '#',
      time: '11:00 AM'
    },
    // ... more data
  ];

  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar size={50} src={item.avatar} style={{
              backgroundColor: '#fafafa',
              border: '2px solid #fafafa',
            }}/>}
            title={<Typography.Link href={item.link}>{item.title}</Typography.Link>}
            description={
              <Space className='flex xxl:flex-nowrap flex-wrap xxl:justify-between'>
                <span className='flex items-center'>
                    <svg width="20" height="20" viewBox="0 0 192 192" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M138 140V52c0-8.837-7.163-16-16-16H58.16L22 72.16V140c0 8.837 7.163 16 16 16h84c8.837 0 16-7.163 16-16Zm32-88v88l-32-28V80l32-28Z" stroke="#969EA7" stroke-width="12" stroke-linejoin="round"/></svg>
                    <span className='text-xs pl-2'>
                        Google metting
                    </span>
                </span>
                <span className='flex items-center'>
                    <ClockCircleOutlined color='#969EA7'/>
                    <span className='text-xs pl-2'>
                        {item.time} 
                    </span>
                </span>
              </Space>
            }
          />
        </List.Item>
      )}
    />
  );
}

export default MettingList;
