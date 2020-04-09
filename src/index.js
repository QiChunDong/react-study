import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// 引入redux
import {createStore} from 'redux'
import {Provider} from 'react-redux'

// 创建存储  初始化和更新的时候都会执行
// 所以要区分初始化还是正常更新
function reducer1 (state = {name: '李四',age: 12}, action) {
  // if(!state) {
  //   return {name: 'abcd'}
  // }

  // return {
  //   name: '李四',
  //   age: 12
  // }

  // 下面会融合action的写法
  // switch判断type
  switch (action.type) {
    case 'set_age':
      // 这个地方不能直接将state更改然后返回 对state的判断是地址变了才变
      let newState = {
        ...state,
        age: state.age + action.ageadd
      }
      return newState
    default:
        // 初始化的时候会走这个分支 直接将state返回
        return state
  }
}

// 创建store
const store = createStore(reducer1)

// 高阶函数进行注入
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
