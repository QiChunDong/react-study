import {ADD_ITEM, INIT_ITEM, DEL_ITEM} from '../action'

// 增加和初始化就是直接给items赋值
// 删除是在原来的基础上筛掉删掉的记录 这里的做法是过滤掉
function reducer (state, action) {
    switch (action.type) {
        case ADD_ITEM:
            return {
                ...state,
                items: action.items
            }
        case DEL_ITEM:
            return {
                ...state,
                items: state.items.filter(item => item.ID !== action.ID)
            }
        case INIT_ITEM:
            return {
                ...state,
                items: action.items
            }
        default:
            return state
    }
}

export default reducer