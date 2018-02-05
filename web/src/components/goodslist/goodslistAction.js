import * as goodslistContants from './goodslistContants'
import * as ajaxConstants from '../../contants/ajaxContants'
export function getGoods(key){
    return{
        url:'getgoodslist',
        data:{
            page:1,
            limit:10,
            keyword:'玫瑰'
        }
    }
}
