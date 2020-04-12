// 案例 用户页面使用的reducers

// 引用统一的action定义文件
import {SET_AGE} from '../action/actions'

function reducer2 (state = {name: '王五',age: 24}, action) {
  switch (action.type) {
    case SET_AGE:
      let newState = {
        ...state,
        age: state.age + action.ageadd
      }
      return newState
    default:
        return state
  }
}

export default reducer2