import React, {Component} from 'react'
import axios from 'axios'
import Child from './Child1'

class comp1 extends Component{
    constructor (...args) {
        super(...args)
        this.state = {
            users: [],
            valueP: 1,
            valueM: 1
        }
    }

    // 父子组件之间的传值和方法通信
    ck () {
        this.setState({
            valueP: this.state.valueP + 1
        })
        this.refs['cd'].add()
    }

    add (x) {
        this.setState({
            valueM: this.state.valueM + x
        })
    }

    async componentDidMount () {
        let {data} = await axios.get('/data/1.json')
        console.log('data', data.data)
        this.setState({
            users: data.data
        })
    }
    // async componentDidMount () {
    //     let  res = await fetch('/data/1.json')
    //     let reData = await res.json()
    //     console.log('data', reData)
    //     this.setState({
    //         users: reData.data
    //     })
    // }

    render() {
        return (
            <div>
                <h5>父子组件学习部分</h5>
                <ul>
                    {
                        this.state.users.map((user, index) => (
                            <li key={index}>{user.name}: {user.age}</li>
                        ))
                    }
                </ul>
                <input onClick={this.ck.bind(this)} value="给儿子加水" type = "button" />
                <Child father={this} ref="cd" val={this.state.valueP}/>
                <h4>{this.state.valueM}</h4>
            </div>
        )
    }
}

export default comp1
