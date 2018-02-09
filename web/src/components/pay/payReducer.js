import * as ajaxConstants from '../../contants/ajaxContants'

import * as payContants from './payContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (payContants.PAY_REQUESTING ):
            newState.status = 0;
            break;
        case payContants.PAY_REQUESTED:
            console.log(action)
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (payContants.PAY_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;

       
    }
    return newState;
}