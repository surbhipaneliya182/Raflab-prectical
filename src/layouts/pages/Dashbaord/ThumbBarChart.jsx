import React from 'react';
import { Column } from '@ant-design/charts';
import { Dropdown, Menu, Card } from 'antd';
import { CaretDownOutlined } from '@ant-design/icons';

const ThumbBarChart = () => {
  const data = [
    { date: '1-10 Aug', value: 35 },
    { date: '', value: 30 },
    { date: '11-20 Aug', value: 45 },
    { date: '21-30 Aug', value: 60 },
  ];

  const config = {
    data,
    width: 500, 
    height: 100, 
    xField: 'date',
    yField: 'value',
    yAxis: {
      line: null,
      label: {
        formatter: (v) => (v === '20' || v === '40' || v === '60' ? v : ''),
      },
      tickLine: null, 
    },
    xAxis: {
      line: null,
      label: {
        rotate: 0,         // No rotation
        autoRotate: false, // Prevent auto rotation
      },
      tickLine: null, 
    },
    interval: {
      size: 40, 
    },
  
    color: (datum) => {
      // Get the index of the current datum
      const index = data.findIndex(item => item.date === datum.date);
      return index % 2 === 0 ? '#b0a8ff' : '#6e62e5'; // Even indices get blue, odd ones get gray
    },
    legend: false,
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">January</Menu.Item>
      <Menu.Item key="2">February</Menu.Item>
      {/* ... other months */}
    </Menu>
  );

  return (
    <Card size="small" className='border-0'>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
        <span className='font-medium'>Analytics: <span className='text-green text-xs'>5.6%</span></span>
        <Dropdown overlay={menu} placement="bottomRight">
          <h6 style={{ cursor: 'pointer' }} className="text-[#000]">Monthly <CaretDownOutlined /></h6>
        </Dropdown>
      </div>
      <Column {...config} />
    </Card>
  );
};

export default ThumbBarChart;
