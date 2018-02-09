import {combineReducers} from 'redux'

import goods from '../common/pages/goods/goodsReducer'
import orders from '../common/pages/orders/ordersReducer'
import manager from '../common/pages/manager/managerReducer.js'

export default combineReducers({
    goods,
    orders,
    manager
    
})