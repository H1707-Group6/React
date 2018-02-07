import * as goodslistContants from './goodslistContants'
import * as ajaxConstants from '../../contants/ajaxContants'
export function getGoods(key,type,dec){
    console.log(key,type,dec)
    return{
        url:'getgoodslist',
        data:{
            page:1,
            limit:10,
            keyword:key,
            type:type,
            desc:dec
        }
    }
}
