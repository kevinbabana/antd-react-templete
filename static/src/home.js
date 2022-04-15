const  { useState,useEffect } = React;
const { Form, Row, Col, Input, Button, Select, TimePicker,Card ,Empty,DatePicker, Space ,Modal,Spin, Table,AutoComplete} = antd;
const { DownOutlined, UpOutlined } = icons;


const { Option } = Select;
const { RangePicker } = DatePicker;

const Logpage = () =>{
  const onFinish = (values) => {
    console.log('N Received values of form: ', values);
    axios.get('/ADHSConfig?ConfigKey=')
      .then(res =>{
          console.log(res)
          setMyArray(res.data)
      }).catch(err=>{
          console.log(err)
      })
  };


  const SearchForm = () => {
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
                    <Form.Item name={`Lotid`}  label={`Lot ID`}  rules={[{ required: true, message: 'Please input your username!' }]}>
                    
                    <Input />
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
    
  
    
  
    return (
      <Form
        form={form}
        name="advanced_search"
        className="ant-advanced-search-form"
        onFinish={onFinish}
      >
        <Row gutter={24} >{getFields()}
          <Col
          
            span={8}
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
            
          </Col>
        </Row>
      </Form>
    );
  };
  








function query_log(e){
  e.preventDefault();
  console.log(e);

  
  
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
  IEDALog:  '',
  APLog:  '',
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




const data = [
  
];

const [resultdata, setresultdata] = useState(data);

const columns = [
  {
    title: 'Raw',
    dataIndex: 'Raw',

    
  },
  {
    title: 'File Name',
    dataIndex: 'FILENAME',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  },
  {
    title: 'Sort No.',
    dataIndex: 'SORTNO',
    defaultSortOrder: 'descend',
    
  }

  
  
];

const ResultCard = () => {
  
  return <Table  style={{ width: '100%' }} columns={columns} dataSource={resultdata} onChange={onChange} />;

}
function onChange(pagination, filters, sorter, extra) {
  console.log('params', pagination, filters, sorter, extra);
}

return <div>
<Card><SearchForm></SearchForm></Card>

<Card style={{  marginTop: 30 ,minHeight: 500  }}><ResultCard/></Card>
</div>;

}

ReactDOM.render(
  <Logpage></Logpage>,
  document.getElementById('content'),
);