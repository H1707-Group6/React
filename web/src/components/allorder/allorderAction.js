import * as allorderContants  from './allorderContants'
export function allorder(uid){
	// console.log(uid);
	return{
		url:'genorder',
		method:'get',
		types:[allorderContants.GETORDER_REQUESTING,allorderContants.GETORDER_REQUESTED,allorderContants.GETORDER_REQUESTERROR],
		data:{
			uid:uid,
		}
	}
}
export function delorder(uid,gid,orderid){
	console.log(uid,gid,orderid);
	return{
		url:'delorder',
		method:'get',
		types:[allorderContants.DELORDER_REQUESTED,allorderContants.DELORDER_REQUESTING,allorderContants.DELORDER_REQUESTERROR],
		data:{
			uid:uid,
			gid:gid,
			orderid:orderid
		}
	}
}
