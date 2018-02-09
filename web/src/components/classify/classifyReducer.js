import * as ajaxConstants from '../../contants/ajaxContants'
import * as classifyContants from './classifyContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || classifyContants.CLASSIFY_REQUESTING):
            newState.status = 0;
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || classifyContants.CLASSIFY_REQUESTERROR):
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
