import * as detailsContants from './detailsContants'
// import * as ajaxConstants from '../../contants/ajaxContants'
export function getDetails(key){
    return{
        url:'getdetails',
        types:[detailsContants.DETAILS_REQUESTING,detailsContants.DETAILS_REQUESTED,detailsContants.DETAILS_REQUESTERROR],
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

export function comment(gid){
    console.log(gid)
    return{
        types:[detailsContants.COMMENT_REQUESTING,detailsContants.COMMENT_REQUESTED,detailsContants.COMMENT_REQUESTERROR],
        url:'comment',
        method:'post',
        data:{goodsId:gid}
    }
}

