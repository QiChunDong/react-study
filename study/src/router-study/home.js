import React from 'react'
import {Link} from 'react-router-dom'

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
        // 此处注意
        // 在任何地方可以直接通过link标签直接跳转到任何路由 嵌套的子路由也是可以的
        // 只要已经定义过就可以
        return (
            <div>
                <div>
                    开始的开始
                </div>
                <div>
                    我们都是孩子
                </div>
                <Link to="/comp2/comp22">直接跳转到结尾</Link>
            </div>
        )
    }
}

export default comp
