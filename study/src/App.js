import React from 'react';
import './App.css';
// import Comp1 from './Comp1'
// // 测试redux
// import ReduxStu1 from './redux-stu/Redux1'
// import RouterStu from './router-study/index';

// 实战部分的view
import Buy from './practice-buy/index'

function App() {
  return (
    <div>
      {/* 下面是基础练习部分 */}
      {/* <Comp1></Comp1>
      <hr></hr>
      <h4>redux学习部分</h4>
      <ReduxStu1 name="张三" age="12"></ReduxStu1>
      <h4>router学习部分</h4>
      <RouterStu></RouterStu> */}
      {/* 上面是基础练习部分 */}

      {/* --------------------------------------- */}

      {/* 下面是基础实战部分 */}
      <Buy></Buy>
    </div>
  )
}

export default App
