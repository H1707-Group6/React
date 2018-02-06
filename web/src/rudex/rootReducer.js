import {combineReducers} from 'redux'

import goodslist from '../components/goodslist/goodslistReducer'
import details from '../components/details/detailsReducer'
import cart from '../components/cart/cartReducer'
import home from '../components/home/homeReducer'

export default combineReducers({
    goodslist,
    details,
    cart,
    home

})