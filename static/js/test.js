const { DatePicker, Space } = antd;

function onChange(date, dateString) {
  console.log(date, dateString);
}

ReactDOM.render(
  <Space direction="vertical">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="quarter" />
    <DatePicker onChange={onChange} picker="year" />
  </Space>,
  document.getElementById('container'),
);