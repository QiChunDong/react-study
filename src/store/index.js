// redux store的统一出口 会集合所有的reducers

// 引入redux
// combineReducers聚合所有的reducers
import {createStore, combineReducers} from 'redux'

// 引入所有的reducer
import user from './user'
import company from './company'

// combineReducers的参数是一个json
let reducers = combineReducers({
    user,
    company
})

// 创建store
export default createStore(reducers)