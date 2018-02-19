import * as ajaxConstants from '../../contants/ajaxContants'
import * as homeContants from './homeContants'

export function getHotgoods(key){
    return{
        url:'getHotgoods',
        types:[homeContants.HOME_REQUESTING,
        homeContants.HOME_REQUESTED,
        homeContants.HOME_REQUESTERROR],
        data:{
      		keyword:key
        }
    }
}


