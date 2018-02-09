import * as ajaxConstants from '../../contants/ajaxContants'

import * as goodslistContants from './goodslistContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case goodslistContants.GOODSLIST_REQUESTING:
            newState.status = 0;
            break;
        // case ajaxConstants.AJAX_REQUESTED:
        //     newState.status = 1;
        //     // console.log(action);
        //     newState.result = action.result.results;
        //     break;
        case goodslistContants.GOODSLIST_REQUESTERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case goodslistContants.GOODSLIST_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
    }
    return newState;
}


