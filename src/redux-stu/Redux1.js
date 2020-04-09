import React from 'react'
import {connect} from 'react-redux'

class Redux1 extends React.Component {
  render () {
    return (
      <div>
        
      </div>
    )
  }
}

// let conn_fn = connect( function() {})
// export default conn_fn(Redux1)
// 下面是简写
export default connect(function () {
  // 在这个方法里完成连接
})(Redux1)