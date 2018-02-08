import * as ajaxConstants from '../../contants/ajaxContants'

import * as loginContants from './loginContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (loginContants.LOGIN_REQUESTING):
            newState.status = 0;
            break;
        case loginContants.LOGIN_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (loginContants.LOGIN_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}
