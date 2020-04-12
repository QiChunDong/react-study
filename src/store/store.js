// 通常做法是将action和store分离出来淡出作为一个js文件

// 引入redux
import {createStore} from 'redux'
// 引用统一的action定义文件
import {SET_AGE} from './actions'


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
    // case 'set_age':
    // 使用同意定义的action命名 统一管理
    case SET_AGE:
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
export default createStore(reducer1)