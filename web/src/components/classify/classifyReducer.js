import * as ajaxConstants from '../../contants/ajaxContants'
import * as classifyContants from './classifyContants'

export default function classifyReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case classifyContants.CLASSIFY_REQUESTING:
            newState.status = 0;
            break;
        case classifyContants.CLASSIFY_REQUESTERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;

        case classifyContants.CLASSIFY_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
    }
    return newState;
}
