// import * as ajaxConstants from '../../contants/ajaxContants'

import * as allorderContants from './allorderContants'

export default function orderReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case allorderContants.GETORDER_REQUESTING :
            newState.status = 0;
            break;
        case allorderContants.GETORDER_REQUESTED:
            newState.status = 1;
            console.log(action)
            newState.result = action.result.results;
            break;
        case allorderContants.GETORDER_REQUESTERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}