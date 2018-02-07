import * as ajaxContants from '../../contants/ajaxContants'

import * as cartContants from './cartContants'
console.log(cartContants)

export default function cartReducer (state = {}, action){
    let newState = JSON.parse(JSON.stringify(state));
    switch(action.type){
        case 'cc':
            console.log(action)
            if(event.target.innerText =='+'){
                action.data.cartlist[idx][0].qty = ++ event.target.parentNode.children[1].innerText ;
        
            }else if(event.target.innerText =='-'){
                action.data.cartlist[idx][0].qty = --event.target.parentNode.children[1].innerText ;
                if( cartlist[idx][0].qty<=1){
                     cartlist[idx][0].qty = event.target.parentNode.children[1].innerText = 1;
                }
               
            }
            action.data.cartlist[idx][0].onePrice =  cartlist[idx][0].qty*cartlist[idx][0].saleprice;

        case (ajaxContants.AJAX_REQUESTING || cartContants.CART_REQUESTING ):
            newState.status = 0;
            break;
        case ajaxContants.AJAX_REQUESTED:
            newState.status = 1;
            newState.result = action.result.results;
            break;
        case (ajaxContants.AJAX_REQUESTERROR || cartContants.CART_REQUESTERROR):
            newState.status = -1;
            break;
        case cartContants.CART_REQUESTED:
            newState.status = 1;
            break;
    }
    return newState;

}

