const  { useState } = React;
const { Form, Row, Col, Input, Button, Select, TimePicker,Card ,Empty,DatePicker, Space ,Modal,Spin } = antd;
const { DownOutlined, UpOutlined } = icons;
const { Option } = Select;
const { RangePicker } = DatePicker;

const IEDALogSearchForm = () => {
  const [expand, setExpand] = useState(false);
  const [form] = Form.useForm();

  const [lotinputvalue,setlotinputvalue] = React.useState("");

  const getFields = () => {
    const field = [
                <Col span={8} key={1}>
                  <Form.Item name={`Lotid`}  label={`Lot ID`} >
                      <Input value={lotinputvalue} placeholder="輸入Lot ID" onInput ={(e) => {
                        const upperlotid = e.target.value;
                        setlotinputvalue(upperlotid.toUpperCase())
                      }}/>
 
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
                    
                      <Input placeholder="輸入Lot ID" />
 
                  </Form.Item>
                </Col>,
                <Col span={8} key={2}>
                <Form.Item name={`Date`}  label={`日期`} >
                  
                <DatePicker onChange={onChange} />

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




function query_log(e){
  e.preventDefault();
  console.log('You clicked submit.');
  fetch( request的url, {
    method: "GET",
    body: JSON.stringify(data),   /*把json資料字串化*/
    headers: new Headers({
        'Content-Type': 'application/json'
    })
})
.then(res => res.json())
.then(data => {
      /*接到request data後要做的事情*/
})
.catch(e => {
    /*發生錯誤時要做的事情*/
})
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


const ResultCard = props => {
  
  return <div>{props.children}</div>;

}

ReactDOM.render(
  <div>
    <TabsCard /> 
    
    <div className="search-result-list"><ResultCard></ResultCard></div>
  </div>,
  document.getElementById('content'),
);