const  { useState } = React;
const { Form, Row, Col, Input, Button, Select, TimePicker,Card ,Empty,DatePicker, Space ,Modal,Spin, Table,AutoComplete} = antd;
const { DownOutlined, UpOutlined } = icons;


const { Option } = Select;
const { RangePicker } = DatePicker;

const Logpage = () =>{
const IEDALogSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const [lotinputvalue,setlotinputvalue] = React.useState("");

  const getFields = () => {

    const mockVal = (str, repeat = 1) => ({
      value: str.repeat(repeat),
    }); 
  
  const [value, setValue] = useState('');
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)],
    );
  };

  const onSelect = (data) => {
    console.log('onSelect', data);
  };

  const onChange = (data) => {
    setValue(data);
  };
    
    const field = [
                <Col span={8} key={1}>
                  <Form.Item name={`Lotid`}  label={`Lot ID`} >
                  
                  <AutoComplete
                    value={value}
                    options={options}
                    onSelect={onSelect}
                    onSearch={onSearch}
                    onChange={onChange}
                    placeholder="control mode"
                  />
 
                  </Form.Item>
                </Col>,
                <Col span={8} key={2}>
                <Form.Item name={`Sort No`}  label={`Sort No`} >
                  
                <Select>
          <Select.Option value="1">1</Select.Option>
          <Select.Option value="2">2</Select.Option>
          <Select.Option value="C">C</Select.Option>
        </Select>

                </Form.Item>
              </Col>,



    ];

   

    return field;
  };
  

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit" onClick ={query_log}>
            搜尋
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            清空
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};




const APLogSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();
  function onChange(date, dateString) {
    console.log(date, dateString);
  }

  const getFields = () => {
    const field = [
                <Col span={8} key={1}>
                  <Form.Item name={`APName`}  label={`AP name`} >
                    
                      <Input placeholder="輸入AP name" />
 
                  </Form.Item>
                </Col>,
                <Col span={8} key={2}>
                  <Form.Item label="Time Range" >
                    <Select defaultValue = "1">
                      <Select.Option value="1">過去一天</Select.Option>
                      <Select.Option value="3">過去三天</Select.Option>
                      <Select.Option value="7">過去七天</Select.Option>
                    </Select>
                  </Form.Item>
              </Col>,



    ];

   

    return field;
  };
  

  const onFinish = (values) => {
    values.SWITCHFAB = document.cookie.SWITCHFAB;
    console.log(Cookies.get('SWITCHFAB'))
    console.log('Received values of form: ', values);
    
  };

  return (
    <Form
      form={form}
      name="advanced_search"
      className="ant-advanced-search-form"
      onFinish={onFinish}
       onSubmit={onFinish}
    >
      <Row gutter={24}>{getFields()}</Row>
      <Row>
        <Col
          span={24}
          style={{
            textAlign: 'right',
          }}
        >
          <Button type="primary" htmlType="submit" >
            搜尋
          </Button>
          <Button
            style={{
              margin: '0 8px',
            }}
            onClick={() => {
              form.resetFields();
            }}
          >
            清空
          </Button>
          <a
            style={{
              fontSize: 12,
            }}
            onClick={() => {
              setExpand(!expand);
            }}
          >
            {expand ? <UpOutlined /> : <DownOutlined />} Collapse
          </a>
        </Col>
      </Row>
    </Form>
  );
};




function query_log(e){
  e.preventDefault();

  
  
  setresultdata([...resultdata,{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  }]);
  console.log('resultdata');

  console.log(resultdata);
}

const tabList = [
  {
    key: 'IEDALog',
    tab: 'IEDA Log',
  },
  {
    key: 'APLog',
    tab: 'AP Log',
  },
];

const contentList = {
  IEDALog:  <IEDALogSearchForm />,
  APLog:  <APLogSearchForm />,
};
const onTab1Change = key => {
  setActiveTabKey1(key);
};

const TabsCard = () => {
  const [activeTabKey1, setActiveTabKey1] = useState('IEDALog');

  const onTab1Change = key => {
    setActiveTabKey1(key);
  };
 

  return (
    
      <Card
        style={{ width: '100%' }}
        
        tabList={tabList}
        activeTabKey={activeTabKey1}
        onTabChange={key => {
          onTab1Change(key);
        }}
      >
        {contentList[activeTabKey1]}
      </Card>
      
      
      
    
  );
};

const Loading = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    
    <Spin />
    
  );
};


const data = [
  
];

const [resultdata, setresultdata] = useState(data);

const columns = [
  
];

const ResultCard = () => {
  
  return <Table columns={columns} dataSource={resultdata} onChange={onChange} />;

}
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

return <div>
<TabsCard /> 

<div style={{  marginTop: 30 ,minHeight: 500  }}><ResultCard/></div>
</div>;

}

ReactDOM.render(
  <Logpage></Logpage>,
  document.getElementById('content'),
);