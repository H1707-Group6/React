import * as ajaxConstants from '../../contants/ajaxContants'

// import * as goodslistContants from './goodslistContants'

export default function goodslistReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case ajaxConstants.AJAX_REQUESTING:
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            console.log(action)
            newState.status = 1;
            // console.log(action);
            newState.result = action.result.results;
            break;
        case ajaxConstants.AJAX_REQUESTERROR :
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}


