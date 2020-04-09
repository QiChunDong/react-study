import React from 'react';
import './App.css';
import Comp1 from './Comp1'
// 测试redux
import ReduxStu1 from './redux-stu/Redux1'

function App() {
  return (
    <div>
      <Comp1></Comp1>
      <hr></hr>
      <h4>redux学习部分</h4>
      <ReduxStu1 name="张三" age="12"></ReduxStu1>
    </div>
  )
}

export default App
