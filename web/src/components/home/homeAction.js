import * as ajaxConstants from '../../contants/ajaxContants'

export function getHotgoods(key){
	
    return{
        url:'getHotgoods',
        data:{
      		keyword:key
        }
    }
}
