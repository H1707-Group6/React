import * as ajaxConstants from '../../contants/ajaxContants'

import * as mineContants from './mineContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (mineContants.Mine_REQUESTING):
            newState.status = 0;
            break;
        case mineContants.Mine_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (mineContants.Mine_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}