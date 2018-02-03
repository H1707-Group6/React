import * as goodslistContants from './goodslistContants'
import * as ajaxConstants from '../../contants/ajaxContants'
export function getGoods(){
    return{
        url:'getall',
        data:{page:1,limit:10}
    }
}

export function addCart(gid){
    return{
        types:[goodslistContants.ADDCART_REQUESTING,goodslistContants.ADDCART_REQUESTED,goodslistContants.ADDCART_REQUESTERROR],
        url:'addcart',
        method:'post',
        data:{goodsid:gid}
    }
}