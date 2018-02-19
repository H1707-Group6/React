import * as ajaxConstants from '../../../constants/ajaxConstants'
import * as goodsConstants from './goodsConstants'

export function getGoods(num){
    return {
        url: 'goods',
        data: {page: num}
    }
}
export function deleteGoods(id){
    return {
        types: [goodsConstants.ADDCART_RQUESTING, goodsConstants.ADDCART_RQUESTED, goodsConstants.ADDCART_RQUESTERROR],
        url: 'goodsdel',
        method: 'post',
        data: {id: id}
    }
}
export function updateGoods(id,price,title,type,saleqty){
    return {
        types: [goodsConstants.ADDCART_RQUESTING, goodsConstants.ADDCART_RQUESTED, goodsConstants.ADDCART_RQUESTERROR],
        url: 'goodsupdate',
        method: 'post',
        data: {id:id,price:price,title:title,type:type,saleqty:saleqty}
    }
}
export function insertGoods(id){
    return {
        types: [goodsConstants.ADDCART_RQUESTING, goodsConstants.ADDCART_RQUESTED, goodsConstants.ADDCART_RQUESTERROR],
        url: 'goodsinsert',
        method: 'post',
        data: {idx: id}
    }
}
