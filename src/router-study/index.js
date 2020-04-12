import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import RouterStuComp1 from './routerStuComp1'
import RouterStuComp2 from './routerStuComp2'
import Home from './home'

class comp extends React.Component{
    constructor(...args) {
        super(...args);
        this.state = {
            id: 0
        }
    }

    // Link 类似a标签 可以指定跳转的页面
    // Route是具体的路由配置 所路由到的页面也会在这个标签渲染类似于一个容器
    // 路由的传参类似于vue的router 可以在path上定义参数 也买你通过props接收参数
    render() {
        return (
            <Router>
                <div>
                    <Link to="/">首页</Link>&nbsp;
                    <Link to="/comp1/1">组件1</Link>&nbsp;
                    <Link to="/comp1/2">组件12</Link>&nbsp;
                    <Link to="/comp2">组件2</Link>
                    
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/comp1/:id"  component={RouterStuComp1}></Route>
                    <Route path="/comp2" component={RouterStuComp2}></Route>
                </div>
            </Router>
        )
    }
}

export default comp
