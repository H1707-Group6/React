import * as ajaxConstants from '../../contants/ajaxContants'

import * as registerContants from './registerContants'

export default function registerReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action);
    switch(action.type){
        case registerContants.register_REQUESTING:
            newState.status = 0;
            break;
        case registerContants.register_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case registerContants.register_REQUESTERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}