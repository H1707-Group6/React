import * as goodslistContants from './goodslistContants'
// import * as ajaxConstants from '../../contants/ajaxContants'
export function getGoods(key,type,dec){
    console.log(key,type,dec)
    return{
        url:'getgoodslist',
        types:[goodslistContants.GOODSLIST_REQUESTING,goodslistContants.GOODSLIST_REQUESTED,goodslistContants.GOODSLIST_REQUESTERROR],
        data:{
            page:1,
            limit:10,
            keyword:key,
            type:type,
            desc:dec
        }
    }
}
