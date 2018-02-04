import * as ajaxConstants from '../../contants/ajaxContants'

import * as detailsContants from '../details/detailsContants'

export default function detailsReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || detailsContants.ADDCART_REQUESTING):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || detailsContants.ADDCART_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;

        case detailsContants.ADDCART_REQUESTED:
            newState.status = 1;
            break;
    }
    return newState;
}


