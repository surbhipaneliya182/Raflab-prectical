import React from 'react';
import { Select } from 'antd';
import {DownOutlined } from '@ant-design/icons';

const { Option } = Select;

const MonthDropdown = () => {
  return (
    <Select defaultValue="Month" className='text-left' style={{ width: 150 }} 
      suffixIcon={
        <>
          <DownOutlined  style={{  color: '#000' }}/>
        </>
      }
    >
      <Option value="january">January</Option>
      <Option value="february">February</Option>
      <Option value="march">March</Option>
      <Option value="april">April</Option>
      <Option value="may">May</Option>
      <Option value="june">June</Option>
      <Option value="july">July</Option>
      <Option value="august">August</Option>
      <Option value="september">September</Option>
      <Option value="october">October</Option>
      <Option value="november">November</Option>
      <Option value="december">December</Option>
    </Select>
  );
};

export default MonthDropdown;
