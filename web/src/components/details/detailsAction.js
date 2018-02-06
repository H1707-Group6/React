import * as detailsContants from './detailsContants'
import * as ajaxConstants from '../../contants/ajaxContants'
export function getDetails(key){
    return{
        url:'getdetails',
        data:{
            gid:key
        }
    }
}

export function addCart(gid,userId){
    return{
        types:[detailsContants.ADDCART_REQUESTING,detailsContants.ADDCART_REQUESTED,detailsContants.ADDCART_REQUESTERROR],
        url:'addCart',
        method:'post',
        data:{goodsId:gid,userId:userId}
    }
}