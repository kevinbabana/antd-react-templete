const  { useState } = React;
const Configpage = () =>{
    
    const ConfigKey = Cookies.get('ConfigKey')
    const ConfigList = [];
    const [myArray, setMyArray] = useState([]);

    
    fetch( '/ADHSConfig?ConfigKey='+ConfigKey, {
        method: "GET",
        /*body: JSON.stringify(data),   /*把json資料字串化*/
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    })
    .then(res => res.json())
    .then(data => {
          /*接到request data後要做的事情*/
          console.log(Object.keys(data).length)
          const gridStyle = {
            width: '25%',
            textAlign: 'center',
          };
          Object.keys(data).forEach(function(key) {
            console.log(data[key])
            ConfigList.push(<Card.Grid style={gridStyle}>{key}</Card.Grid>)
            setMyArray(oldArray => [...oldArray, <Card.Grid style={gridStyle}>{key}</Card.Grid>]);
          });
          
          
    })
    .catch(e => {
        /*發生錯誤時要做的事情*/
    })


    
   
    console.log('sxsxs'+ConfigList)
    return <Card title="Card Title">{ConfigList}</Card>
    
    }

    ReactDOM.render(
        <Configpage/>,
        document.getElementById('content'),
      );