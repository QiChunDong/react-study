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
function reducer1 (state = {name: 'abcd'}, action) {
  // if(!state) {
  //   return {name: 'abcd'}
  // }
}

// 创建store
const store = createStore(reducer1)

// 高阶函数进行注入
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
