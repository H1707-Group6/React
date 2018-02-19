import * as ajaxConstants from '../../../constants/ajaxConstants'
import * as ordersConstants from './ordersConstants'
export function getOrders(num){
    return {
        url: 'orders',
        data: {page: num}
    }
}
export function deleteOrders(id){
    return {
        types: [ordersConstants.ORDERS_RQUESTING, ordersConstants.ORDERS_RQUESTED, ordersConstants.ORDERS_RQUESTERROR],
        url: 'ordersdel',
        method: 'post',
        data: {id: id}
    }
}

