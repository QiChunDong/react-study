import React from 'react'
import {connect} from 'react-redux'
import Redux2 from './Redux2'

class Redux1 extends React.Component {
  render () {
    return (
      <div>
        姓名： {this.props.name} <br></br>
        <Redux2 name="王五" age="23"></Redux2>
      </div>
    )
  }
}

// let conn_fn = connect( function() {})
// export default conn_fn(Redux1)
// 下面是简写
// state就是reducer里面初始化的state
// props就是本组建的一个参数对象 可以是父组件传递过来的
// 这个conn的高阶函数的作用就是解决state和props的冲突

// redux是单向数据流 这里只作数据的读取
export default connect(function (state,  props) {
  // 在这个方法里完成连接
  // 这样会将redux里维护的state覆盖父组件传递的参数
  //return state

  // 都留下的方法
  return {
    ...state,
    name: [state.name, props.name]
  }
})(Redux1)