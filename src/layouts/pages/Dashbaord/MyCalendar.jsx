import React from 'react';
import { Calendar, Row, Col, Button,ConfigProvider } from 'antd';
import { LeftOutlined,RightOutlined } from '@ant-design/icons';
import moment from 'moment';

class MyCalendar extends React.Component {
  state = {
    currentDate: moment(),
  };

  handlePrevMonth = () => {
    this.setState({ currentDate: this.state.currentDate.subtract(1, 'month') });
  };

  handleNextMonth = () => {
    this.setState({ currentDate: this.state.currentDate.add(1, 'month') });
  };

  onPanelChange = (value) => {
    this.setState({ currentDate: value });
  };


  render() {
    return (
      <div className='mb-4'>
        <Row align="middle" className='border-0' style={{ marginBottom: '16px' }}>
          <Col>
            <span className='font-medium' style={{ marginRight: '16px' }}>
              {this.state.currentDate.format('MMMM YYYY')}
            </span>
          </Col>
          <Col className='ml-auto'>
            <Button shape="circle" onClick={this.handlePrevMonth}><LeftOutlined className='align-middle'/></Button>
          </Col>
          <Col>
            <Button shape="circle" className='ml-2' onClick={this.handleNextMonth}><RightOutlined className='align-middle'/></Button>
          </Col>
        </Row>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#6e62e5',
              borderRadius: '30px',
            },
          }}
        >
          <Calendar 
            className='text-xs w-full'
            // value={this.state.currentDate}
            fullscreen={false}
            onPanelChange={this.onPanelChange}
            style={{backgroundColor: '#fff'}}
            headerRender={() => null}
          />
        </ConfigProvider>
        
      </div>
    );
  }
}

export default MyCalendar;
