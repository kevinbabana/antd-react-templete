
const { Card,Layout,Descriptions,Input, Menu, Breadcrumb ,Badge ,Col, Row,Switch,Radio} = antd;
const { UserOutlined, LaptopOutlined, NotificationOutlined,SettingOutlined ,FileSearchOutlined} = icons;

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const onSearch = value => console.log(value);
const SwitchFab = e => {
  console.log(Cookies.get('SWITCHFAB'))
  console.log('Received values of form: ', e.target.value);
  Cookies.set('SWITCHFAB',e.target.value );
  console.log('Received values of form: ', Cookies.get('SWITCHFAB'));
  
 
};





ReactDOM.render(
  <Layout className="layout">
    <Header  style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" >
      <Menu.Item icon = {<FileSearchOutlined />} key="3"><a href="/log">ADHS Log</a></Menu.Item>
      <SubMenu key="ConfigSubMenu" icon={<SettingOutlined />} title="ADHS Config">
      <Menu.Item key="Setup"><a>內部設定</a></Menu.Item>
      <Menu.Item key="in"><a>內部資料</a></Menu.Item>
      <Menu.Item key="out"><a>外部資料</a></Menu.Item>
      </SubMenu>
      <SubMenu key="SubMenu" title="常用網站">
          
            <Menu.Item key="GoldenMap"><a>GoldenMap</a></Menu.Item>
            <Menu.Item key="SBAS"><a>SBAS</a></Menu.Item>
         
       </SubMenu>


      </Menu>
      
      
      
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>

    <Content style={{ padding: '0 50px' }}>
      
      <Row>
      <Col span={8}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>ADHS Web</Breadcrumb.Item>
        <Breadcrumb.Item>ELK platform</Breadcrumb.Item> 
      </Breadcrumb>
      </Col>
      <Col span={8} offset={6}>
      
      <Radio.Group defaultValue="BE" buttonStyle="solid" style={{ margin: '16px 0' , float: 'right'}} onChange = {SwitchFab}>
      
      <Radio value="BE">BackEnd</Radio>
      <Radio value="SOIC">SOIC</Radio>
    </Radio.Group>
    <span style={{ margin: '16px 0' , float: 'right',padding: '0 20px'}} >Site :    </span>
      </Col>
    </Row>
     
    </Content>
    <Content style={{ padding: '0 200px' }}>
    <div id = "content"></div>
    </Content>
    </Content>
    <Footer style={{ textAlign: 'center' }}>ADHS Web @2022 Created by APCIM</Footer>
  </Layout>,
  document.getElementById('container'),
);
