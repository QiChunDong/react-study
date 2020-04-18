import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

// 各个子组件
import List from './views/List'
import Add from './views/Add'

class Buy extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor (...args) {
        super(...args)
    }

    render () {
        return (
            <Router>
                <Link className="btn btn-default glyphicon glyphicon-plus" to="/add">添加商品</Link>

                <Route path="/" exact component={List}></Route>
                <Route path="/add" component={Add}></Route>
            </Router>
        )
    }
}

export default Buy