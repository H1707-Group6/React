import * as ajaxConstants from '../../contants/ajaxContants'

export function getClassify(key){
    return{
        url:'classify',
        data:{
      		keyword:key
        }
    }
}
