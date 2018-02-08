import * as ajaxConstants from '../../contants/ajaxContants'

import * as orderContants from './orderContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (orderContants.ORDER_REQUESTING):
            newState.status = 0;
            break;
        case orderContants.ORDER_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (orderContants.ORDER_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}