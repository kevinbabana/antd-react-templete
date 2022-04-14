const  { useState,useEffect } = React;
const { List,Form, Row, Col, Input, Button, Select, TimePicker,Card ,Empty,DatePicker, Space ,Modal,Spin, Table,AutoComplete} = antd;

const Configpage = () =>{
    
    const ConfigKey = Cookies.get('ConfigKey')
    const ConfigList = [ {
        title: 'Title 1',
      },
      {
        title: 'Title 2',
      },
      {
        title: 'Title 3',
      },
      {
        title: 'Title 4',
      },];
    const [myArray, setMyArray] = useState([]);
    
    useEffect(()=>{
        axios.get('/ADHSConfig?ConfigKey='+ConfigKey)
        .then(res =>{
            console.log(res)
            setMyArray(res.data)
        }).catch(err=>{
            console.log(err)
        })
    } ,[])
    
    


    
   
    console.log('sxsxs'+ConfigList)
    return <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={myArray}
    renderItem={item => (
      <List.Item>
        <Card >{item.Name}</Card>
      </List.Item>
    )}
  />
    
    }

    ReactDOM.render(
        <Configpage/>,
        document.getElementById('content'),
      );