import * as ajaxConstants from '../../../constants/ajaxConstants'
import * as managerConstants from './managerConstants'

export default function managerReducer(state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || managerConstants.MANAGER_RQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            
            newState.status = 1;
            newState.result = action.result.results[0];
            newState.totalcount = action.result.results[1];
            
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || managerConstants.MANAGER_RQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;
        case managerConstants.MANAGER_RQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}