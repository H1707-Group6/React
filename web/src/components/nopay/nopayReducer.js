import * as ajaxConstants from '../../contants/ajaxContants'

import * as nopayContants from './nopayContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (nopayContants.NOPAY_REQUESTING ):
            newState.status = 0;
            break;
        case nopayContants.NOPAY_REQUESTED:
            console.log(action)
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (nopayContants.NOPAY_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;

       
    }
    return newState;
}