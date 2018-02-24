import * as ajaxContants from '../../contants/ajaxContants'

import * as cartContants from './cartContants'
// console.log(cartContants)

export default function cartReducer (state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){

        case (cartContants.CART_REQUESTING || cartContants.DEL_REQUESTING):
            newState.status = 0;
            break;
      
        case (cartContants.CART_REQUESTERROR || cartContants.DEL_REQUESTERROR):
            newState.status = -1;
            break;
        case cartContants.CART_REQUESTED:
            newState.status = 1;
            console.log(action)
            newState.result = action.result.results;
            break;
        case cartContants.DEL_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
        
            break;
    }
    return newState;

}

