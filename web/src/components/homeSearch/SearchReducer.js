// import * as ajaxConstants from '../../contants/ajaxContants'

import * as SearchContants from './SearchContants'

export default function SearchReducer(state={},action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case SearchContants.SEARCH_REQUESTING:
            newState.status = 0;
            break;
        case SearchContants.SEARCH_REQUESTED:
            newState.status = 1;
            // console.log(action);
            newState.result = action.result.results;
            break;
        case SearchContants.SEARCH_REQUESTERROR:
            newState.status = -1;
            newState.result = action.result.data;
            break;
    }
    return newState;
}
