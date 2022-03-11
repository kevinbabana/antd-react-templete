
const { Card,Layout,Descriptions,Input, Menu, Breadcrumb ,Badge ,Col, Row} = antd;
const { UserOutlined, LaptopOutlined, NotificationOutlined } = icons;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const onSearch = value => console.log(value);

ReactDOM.render(
  <Layout className="layout">
    <Header>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
      
      <Menu.Item key="2">ADHS LOG</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ADHS Web</Breadcrumb.Item>
        <Breadcrumb.Item>ELK platform</Breadcrumb.Item>
        
      </Breadcrumb>
     
    </Content>
    <Content style={{ padding: '0 200px' }}>
    <div id = "content"></div>
    </Content>
    
    <Footer style={{ textAlign: 'center' }}>ADHS Web 2022 Created by APCIM</Footer>
  </Layout>,
  document.getElementById('container'),
);
