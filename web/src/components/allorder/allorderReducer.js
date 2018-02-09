import * as ajaxConstants from '../../contants/ajaxContants'

import * as allorderContants from './allorderContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (allorderContants.ALLORDER_REQUESTING):
            newState.status = 0;
            break;
        case allorderContants.ALLORDER_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (allorderContants.ALLORDER_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}