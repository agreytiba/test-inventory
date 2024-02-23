import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button, Drawer, Layout, Menu } from 'antd';
import { useAppContext } from '@/context/appContext';
import useLanguage from '@/locale/useLanguage';
import logoIcon from '@/style/images/logo-icon.svg';
import logoText from '@/style/images/logo-text.svg';
import { useNavigate } from 'react-router-dom';

import {
  SettingOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  FileSyncOutlined,
  DashboardOutlined,
  TeamOutlined,
  UserOutlined,
  CreditCardOutlined,
  MenuOutlined,
  UserAddOutlined,
  FileOutlined,
  FileDoneOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

export default function Navigation() {
  return (
    <>
      <div className="sidebar-wraper">
        <Sidebar collapsible={true} />
      </div>
      <MobileSidebar />
    </>
  );
}

function Sidebar({ collapsible }) {
  let location = useLocation();

  const { state: stateApp, appContextAction } = useAppContext();
  const { isNavMenuClose } = stateApp;
  const { navMenu } = appContextAction;
  const [showLogoApp, setLogoApp] = useState(isNavMenuClose);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const navigate = useNavigate();

  const items = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: <Link to={'/'}>{('dashboard')}</Link>,
    },
     {
      key: 'customer',
      icon: <CustomerServiceOutlined />,
      label: <Link to={'/customer'}>{('customer')}</Link>,
    },
     {
      key: 'items',
      icon: <CustomerServiceOutlined />,
      label: <Link to={'/item'}>{('items')}</Link>,
    },
    //   {
    //   label: ('Inventory'),
    //   key: 'inventory',
    //   icon: <FileDoneOutlined />,
    //   children: [
    //     {
    //       key: 'items',
    //       label: <Link to={'/item'}>{('items')}</Link>,
    //     },
    //     {
    //       key: 'itemAdjust',
    //       label: <Link to={'/item/adjustment'}>{('item_adjustment')}</Link>,
    //     },
    //     {
    //       key: 'itemMerge',
    //       label: <Link to={'/itemMerge'}>{('item_merge')}</Link>,
    //     }
    //   ],
    // },
       {
      label: ('Sales'),
      key: 'sales',
      icon: <FileOutlined />,
      children: [
        {
          key: 'Customer',
          label: <Link to={'/customer'}>{('customer')}</Link>,
        },
        {
          key: 'salesOrders',
          label: <Link to={'/sales/order'}>{('sales_order')}</Link>,
        },
        {
          key: 'invoice',
          label: <Link to={'/invoice'}>{('invoice')}</Link>,
        },
        {
          key: 'PaymentReceived',
          label: <Link to={'/payment/received'}>{('pay_received')}</Link>,
        }
      ],
    },
       {
      label: ('Purchases'),
      key: 'purchases',
      icon: <CreditCardOutlined />,
      children: [
        {
          key: 'Vendor',
          label: <Link to={'/lead'}>{('vendors')}</Link>,
        },
        {
          key: 'purchaseOrder',
          label: <Link to={'/purchase/order'}>{('purchase_order')}</Link>,
        },
        {
          key: 'bills',
          label: <Link to={'/bills'}>{('bills')}</Link>,
        },
        // {
        //   key: 'paymade',
        //   label: <Link to={'/payment/made'}>{('payment_made')}</Link>,
        // },
        // {
        //   key: 'purchaseReceives',
        //   label: <Link to={'/purchase/receives'}>{('receives')}</Link>,
        // },
      ],
    },
  
    // {
    //   key: 'offer',
    //   icon: <FileOutlined />,
    //   label: <Link to={'/offer'}>{('offer')}</Link>,
    // },
   
    // { key: 'inventory',  label: <Link to={'/inventory'}>Inventory</Link>},
    // { key: 'order', icon: <ShopOutlined />, label: <Link to={'/'}>Lead</Link> Order },
    
    // { key: 'kyc', icon: <FileDoneOutlined />, label: <Link to={'/kyc'}>kyc</Link> },
    // {
    //   key: 'invoice',
    //   icon: <FileTextOutlined />,
    //   label: <Link to={'/invoice'}>{('invoice')}</Link>,
    // },
    // {
    //   key: 'quote',
    //   icon: <FileSyncOutlined />,
    //   label: <Link to={'/quote'}>{('quote')}</Link>,
    // },
    // {
    //   key: 'payment',
    //   icon: <CreditCardOutlined />,
    //   label: <Link to={'/payment'}>{('payment')}</Link>,
    // },
    {
      key: 'employee',
      icon: <UserOutlined />,
      label: <Link to={'/employee'}>{('employee')}</Link>,
    },
    {
      key: 'admin',
      icon: <TeamOutlined />,
      label: <Link to={'/admin'}>{('admin')}</Link>,
    },
    {
      label: ('Settings'),
      key: 'settings',
      icon: <SettingOutlined />,
      children: [
        {
          key: 'generalSettings',
          label: <Link to={'/settings'}>{('general_settings')}</Link>,
        },
        {
          key: 'emailTemplates',
          label: <Link to={'/email'}>{('email_templates')}</Link>,
        },
        {
          key: 'paymentMode',
          label: <Link to={'/payment/mode'}>{('payment_mode')}</Link>,
        },
        {
          key: 'advancedSettings',
          label: <Link to={'/settings/advanced'}>{('advanced_settings')}</Link>,
        },
      ],
    },
  ];

  useEffect(() => {
    if (location) if (currentPath !== location.pathname) setCurrentPath(location.pathname);
  }, [location, currentPath]);

  useEffect(() => {
    if (isNavMenuClose) {
      setLogoApp(isNavMenuClose);
    }
    const timer = setTimeout(() => {
      if (!isNavMenuClose) {
        setLogoApp(isNavMenuClose);
      }
    }, 200);
    return () => clearTimeout(timer);
  }, [isNavMenuClose]);
  const onCollapse = () => {
    navMenu.collapse();
  };

  return (
    <Sider
      collapsible={collapsible}
      collapsed={collapsible ? isNavMenuClose : collapsible}
      onCollapse={onCollapse}
      className="navigation"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: '20px',
        top: '20px',
        bottom: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 20px 3px rgba(150, 190, 238, 0.15)',
      }}
      theme={'light'}
    >
      <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
        {/* <img src="Logo" alt="Logo" style={{ height: '32px' }} /> */}
       

        {!showLogoApp && (
          // <img
          //   src="Logo"
          //   alt="Logo"
          //   style={{ marginTop: '3px', marginLeft: '10px', height: '29px' }}
          // /> 
          <h2>ATK</h2>
        )}
      </div>
      <Menu items={items} mode="inline" theme={'light'} />
    </Sider>
  );
}

function MobileSidebar() {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Button type="text" size="large" onClick={showDrawer} className="mobile-sidebar-btn">
        <MenuOutlined />
      </Button>
      <Drawer
        width={200}
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
        rootClassName="mobile-sidebar-wraper"
      >
        <Sidebar collapsible={false} />
      </Drawer>
    </>
  );
}
