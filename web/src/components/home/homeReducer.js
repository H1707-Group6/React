import * as homeContants from './homeContants'
// import * as ajaxConstants from '../../contants/ajaxContants'

export default function homeReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    
    switch(action.type){
        case homeContants.HOME_REQUESTING:
            newState.status = 0;
            break;
        case homeContants.HOME_REQUESTERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
            
        case homeContants.HOME_REQUESTED:
            console.log(action);
            newState.status = 1;
            newState.result = action.result.results;
            break;
    }
    return newState;
}