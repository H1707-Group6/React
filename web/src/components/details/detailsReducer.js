import * as ajaxConstants from '../../contants/ajaxContants'

import * as detailsContants from '../details/detailsContants'

export default function detailsReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case (detailsContants.ADDCART_REQUESTING || detailsContants.COMMENT_REQUESTING ||detailsContants.DETAILS_REQUESTING):
            newState.status = 0;
            break;
        // case ajaxConstants.AJAX_REQUESTED:
        //     newState.status = 1;
          
        //     newState.results = action.result.results;
        //     break;
        case (detailsContants.ADDCART_REQUESTERROR || detailsContants.COMMENT_REQUESTERROR || detailsContants.DETAILS_REQUESTERROR):
            newState.status = -1;
            newState.result = action.result.data;
            break;

        case detailsContants.ADDCART_REQUESTED:
        
            newState.status = 1;
            break;
        case detailsContants.COMMENT_REQUESTED:
       
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case detailsContants.DETAILS_REQUESTED:
       
            newState.status = 1;
           
            newState.results = action.result.results;
            break;
    }
    return newState;
}


