import * as ajaxConstants from '../../contants/ajaxContants'

// import * as registerContants from './registerContants'

export default function registerReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    // console.log(action);
    switch(action.type){
        case ajaxConstants.AJAX_REQUESTING:
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case ajaxConstants.AJAX_REQUESTERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}