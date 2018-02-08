import * as ajaxConstants from '../../contants/ajaxContants'
import * as classifyContants from './classifyContants'

export function getClassify(key){
    return{
        url:'classify',
        types:[classifyContants.CLASSIFY_REQUESTING,
        classifyContants.CLASSIFY_REQUESTED,
        classifyContants.CLASSIFY_REQUESTERROR],
        data:{
      		keyword:key
        }
    }
}
