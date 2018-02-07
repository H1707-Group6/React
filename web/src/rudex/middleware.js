import http from '../utils/httpclient'
import * as ajaxConstants from '../contants/ajaxContants'

export default function middleware(api){
    return function(dispatch){
        return function(action){
            let {type,types,method = 'get',data={},url} = action;
            if(!url){
                return dispatch(action)
            }
            let defaultContants = [ajaxConstants.AJAX_REQUESTING,ajaxConstants.AJAX_REQUESTED,ajaxConstants.AJAX_REQUESTERROR]
            let [requesting,requested,requesterror] = types?types:defaultContants;

            api.dispatch({type:requesting});
            if(url){
                return new Promise((resolve,reject)=>{
                    http[method](url,data).then(res=>{
                        // console.log(res)
                        api.dispatch({
                            type:requested,
                            result:res.body.data
                        })
                        resolve(res.body.data)
                    }).catch(error=>{
                        api.dispatch({
                            type:requesterror,
                            result:error
                        })
                        reject(error)
                    })
                })
            }
        }
    }
}