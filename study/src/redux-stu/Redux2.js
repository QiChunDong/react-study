import React from 'react'
import {connect} from 'react-redux'
import {SET_AGE} from '../action/actions'

class Redux2 extends React.Component {
  addAge () {
    this.props.setAge(6)
  }
  render () {
    return (
      <div>
        age: {this.props.age}<br></br>
        <button onClick={this.addAge.bind(this)}>加6岁</button>
      </div>
    )
  }
}

// redux是单向数据流 这里只作数据的读取
// connect有两个参数 第一个函数是合并冲突的 第二个是action 只能在本组件内部使用
export default connect(
  function (state,  props) {
    // 都留下的方法
    return {
      ...state.user,
      name: [state.user.name, props.name],
      age: [state.user.age, props.age]
    }
  }, {
    // 这个json写action函数 写多少都行
    setAge (ageadd) {
      return {
        // type: 'set_age',
        // 使用全局同意管理的action命名 防止混乱
        type: SET_AGE,
        ageadd
      }
    }
  }
)(Redux2)