// import * as ajaxConstants from '../../contants/ajaxContants'
import * as SearchContants from './SearchContants'

export function getSearch(key){
	
    return{
        url:'getSearch',
        types:[SearchContants.SEARCH_REQUESTING,
        SearchContants.SEARCH_REQUESTED,
        SearchContants.SEARCH_REQUESTERROR],
        data:{
      		keyword:key
        }
    }
}





