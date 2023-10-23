import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import comp21 from './routerStuComp2_1'
import comp22 from './routerStuComp2_2'

class comp extends React.Component{
    constructor(...args) {
        super(...args);
        this.state = {
            id: 0
        }
    }

    componentDidUpdate (old_props, old_state) {
        console.log('update')
    }

    render() {
        // 嵌套路由
        // 在子路由之中在写一套路由配置
        // path和to要在拂柳有的基础上后缀加具体的跳转path 
        // 一般不会写死父级path 会通过match的path拿到动态的父级path进行拼接
        const parentPath = this.props.match.path
        return (
            <div>
                <h2>COMP2</h2>
                <Router>
                    <Link to={parentPath + '/comp21'}>comp 21</Link>
                    <Link to={parentPath + '/comp22'}>comp 22</Link>

                    <Route path={parentPath + '/comp21'} component={comp21}></Route>
                    <Route path={parentPath + '/comp22'} component={comp22}></Route>
                </Router>
            </div>
        )
    }
}

export default comp
