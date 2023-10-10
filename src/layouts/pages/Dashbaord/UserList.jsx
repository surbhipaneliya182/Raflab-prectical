import React from 'react';
import { Table, Badge, Avatar } from 'antd';
import { AntDesignOutlined} from '@ant-design/icons';
const columns = [
  {
    title: 'Customer Name',
    dataIndex: 'customer',
    key: 'customer',
    render: (text, record) => (
      <div className='flex items-center'>
        <Avatar
          size={45} src={<img src={record.customer.image} alt={record.customer.name}/>} style={{
            backgroundColor: '#fafafa',
            border: '2px solid #e3e3e3',
          }} />
        <div className='ps-4'>
            <h6 className='font-medium text-[#000] text-sm'>{record.customer.name}</h6>
            <h6 className='text-sm'>{record.customer.email}</h6>
        </div>
      </div>
    ),
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: (text) => (
    <Badge className='rounded-2xl  px-2 py-0.5 flex items-center' color={text === 'Success' ? 'green' : 'orange'} text={text} style={{ border: '1px solid #dbdbdb'}}/>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Invoice',
    dataIndex: 'invoice',
    key: 'invoice',
  },
  {
    title: 'People',
    dataIndex: 'people',
    key: 'people',
    render: (people) => (
      <div>
        {people.map((image, index) => (
            <Avatar.Group maxCount={2} maxStyle={{ color: '#fff', backgroundColor: '#6e62e5' }}>
            <Avatar src={<img key={index} src={'https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg'} alt={`Person ${index}`} />}/>
            <Avatar style={{ backgroundColor: '#ffb9b9', color: '#000' }}>K</Avatar>
            <Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} />
        </Avatar.Group>
        ))}
      </div>
    ),
  },
];

const data = [
  {
    key: '1',
    customer: { name: 'John Doe', email: 'john@example.com', image: 'https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg' },
    status: 'Pending',
    date: '08/15/2023',
    invoice: '$1,999',
    people: ['https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg'],
  },
  {
    key: '2',
    customer: { name: 'John Doe', email: 'john@example.com', image: 'https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg' },
    status: 'Pending',
    date: '08/15/2023',
    invoice: '$1,999',
    people: ['https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg'],
  },
  {
    key: '3',
    customer: { name: 'John Doe', email: 'john@example.com', image: 'https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg' },
    status: 'Success',
    date: '08/15/2023',
    invoice: '$1,999',
    people: ['https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg'],
  },
  // Add more data items here...
];

const UserList = () => {
  return <Table columns={columns} dataSource={data} scroll={{ x: 'max-content' }}/>;
};

export default UserList;