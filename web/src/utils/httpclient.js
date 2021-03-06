import http from 'superagent'


let baseUrl = 'http://10.3.136.9:88/'

const geturl = (url)=>{
    if(url.startsWith('http')){
        return url;
    }else{
        return baseUrl + url;
    }
}

export default {
    get(url,params){
        return new Promise((resolve,reject)=>{
            http.get(geturl(url))
            .query(params)
            .end((error,res)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(res)
                }
            })
        })
    },
    post(url,data){
        return new Promise((resolve,reject)=>{
            http.post(geturl(url))
            .set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
            .send(data)
            .end((error,res)=>{
                if(error){
                    reject(error)
                }else{
                    resolve(res)
                }
            })
        })
    }
}