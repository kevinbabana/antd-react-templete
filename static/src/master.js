
const { Card,Layout,Descriptions,Input, Menu, Breadcrumb ,Badge ,Col, Row,Switch} = antd;
const { UserOutlined, LaptopOutlined, NotificationOutlined } = icons;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const onSearch = value => console.log(value);






ReactDOM.render(
  <Layout className="layout">
    <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['3']}>
      <Menu.Item key="1">Golden Map</Menu.Item>
      <Menu.Item key="2">ADHS Config</Menu.Item>
      <Menu.Item key="3">ADHS LOG</Menu.Item>
      

      </Menu>
      
      
      
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ADHS Web</Breadcrumb.Item>
        <Breadcrumb.Item>ELK platform</Breadcrumb.Item>
        
      </Breadcrumb>
     
    </Content>
    <Content style={{ padding: '0 200px' }}>
    <div id = "content"></div>
    </Content>
    </Content>
    <Footer style={{ textAlign: 'center' }}>ADHS Web @2022 Created by APCIM</Footer>
  </Layout>,
  document.getElementById('container'),
);
