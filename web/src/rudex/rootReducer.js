import {combineReducers} from 'redux'

import goodslist from '../components/goodslist/goodslistReducer'
import details from '../components/details/detailsReducer'

export default combineReducers({
    goodslist,
    details

})