# react 中实现的代码片段
## react 组件传参 props.children如何与组件之间进行数据通信
```jsx
function ListItem(props) {
  const init = props.onInit;
  useEffect(() => {
    init(props.row);
  })
  return <li>{props.row.name}</li>
}
function List(props) {
  let c = props.children
  if (!Array.isArray(c)) {
    c = [c];
  }
  return <div>
    {
      props.data.map((item, index) => {
        return c.map((child, i) => {
          if (typeof child === 'function') {
            return child({ row: item, key: item.name + index + i })
          }
          if (typeof child.type === 'function') {
            // 说明是组件
            return React.cloneElement(child, { row: item, key: item.name + index + i, ...child.props })
          } else {
            return React.cloneElement(child, { key: item.name + index + i })
          }
        })
      })
    }
  </div>
}
function init(row) {
  console.log(row, 'row')
}
function App() {
  return <div>
    <List data={list}>
      <ListItem onInit={init} />
      {props => <ListItem onInit={init} {...props} />}
    </List>
  </div>
}
ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
```
> 原始链接： https://blog.csdn.net/qq_42704945/article/details/131765416