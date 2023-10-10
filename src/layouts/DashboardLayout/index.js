import React,{ useState,useEffect } from 'react';
import { Layout, ConfigProvider} from 'antd';
import Sidebar from './Sidebar';
import TopBar from './TopBar';

const { Content } = Layout;

function DashboardLayout({ children }) {
  const mystyle = {
    backgroundColor: "#edeef7",
  };
  const [collapsed, setCollapsed] = useState(window.innerWidth < 1200); // Start collapsed if screen width > 1200

  const toggle = () => {
    setCollapsed(!collapsed);  // Toggle the sidebar state
  };

  // Update the state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1200 && !collapsed) {
        setCollapsed(true);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [collapsed]);

  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: '#6e62e5',
        },
      }}
    >
      <Layout style={mystyle} className="xl:p-6 md:p-2 min-h-screen">
          <Sidebar collapsed={collapsed}/>
          <Layout style={mystyle}>
            <TopBar onToggle={toggle}/>
            <Content>
              <div className='md:rounded-br-2xl xl:px-7 md:px-5 px-3 xl:py-6 md:py-5 py-1 bg-[#fff] main-content'>
                {children}
              </div>
            </Content>
          </Layout>
      </Layout>
    </ConfigProvider>
      
  );
}

export default DashboardLayout;

