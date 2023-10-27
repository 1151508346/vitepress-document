# react中实现插槽的方式
1. 组件上添加slot属性
```jsx

function Child(props) {
    const children = props.children
    const header = children.find(item => {
        if (typeof item === 'object') {
            return item.props.name === 'header'
        }
    })
    const footer = children.find(item => {
        if (typeof item === 'object') {
            return item.props.name === 'footer'
        }
    })
    return <div>
        {header && header.props.children}
        {children}
        {footer && footer.props.children}
    </div>
}

Child.slot = () => <></>

const App = () => <div>
    <Child>
        <Child.slot name='header'>
            <p>footer</p>
        </Child.slot>
        Child
        <Child.slot name='footer'>
            <p>footer</p>
        </Child.slot>
    </Child>
</div>
```

2. 通过传递对象给children
```jsx
function Child(props) {
    const children = props.children
    return (
        <div>
            {children.header}
            {children.default}
            {children.footer}
        </div>
    )
}

const App = () => <div>
    <Child>
        {{
            header: <h1>header</h1>,
            footer: <p>footer</p>,
            default: <div>default</div>
        }}
    </Child>
</div>
```
3. 自定义jsx标签，（和1类似）
   > 第1种是插槽的内容是由用户自己获取插槽内容来做处理 
   >
   > 第3种是插槽内容由自定义标签所承载
```jsx
function Child(props) {
    const children = props.children
    const header = children.find(item => item.props.name === 'header')
    const defaultSlot = children.find(item => item.props.name === 'default' || item.props.name === undefined)
    const footer = children.find(item => item.props.name === 'footer')
    return (
        <div>
            {header}
            {defaultSlot}
            {footer}
        </div>
    )
}

function slot(props) {
    return <>
        {props.children}
    </>
}

const App = () => <div>
    <Child>
        <slot name='header'>
            <div>header</div>
        </slot>
        <slot >
            <div>default</div>
        </slot>

    </Child>
</div>

```

