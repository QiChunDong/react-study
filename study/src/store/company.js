// 案例 公司页面使用的reducer

// 引用统一的action定义文件
import {SET_AGE} from '../action/actions'

function reducer1 (state = {name: '李四',age: 12}, action) {
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
export default reducer1