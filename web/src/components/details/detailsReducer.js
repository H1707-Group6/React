import * as ajaxConstants from '../../contants/ajaxContants'

import * as detailsContants from '../details/detailsContants'

export default function detailsReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (ajaxConstants.AJAX_REQUESTING || detailsContants.ADDCART_REQUESTING || detailsContants.COMMENT_REQUESTING ):
            newState.status = 0;
            break;
        case ajaxConstants.AJAX_REQUESTED:
            newState.status = 1;
            console.log('decait':action)
            newState.results = action.result.results;
            break;
        case (ajaxConstants.AJAX_REQUESTERROR || detailsContants.ADDCART_REQUESTERROR || detailsContants.COMMENT_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            
            break;

        case detailsContants.ADDCART_REQUESTED:
            console.log('add':action)
            newState.status = 1;
            break;
        case detailsContants.COMMENT_REQUESTED:
            console.log('comment':1)
            newState.status = 1;
            newState.result = action.result.results;
            break;
    }
    return newState;
}


