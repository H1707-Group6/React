import * as ajaxContants from '../../contants/ajaxContants'

export default function(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case ajaxContants.AJAX_REQUESTING:
            newState.status = 0;
            break;
        case ajaxContants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case ajaxContants.AJAX_REQUESTERROR:
            newState.status = -1;
            break;
    }
    return newState;
}