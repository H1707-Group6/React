import * as nopayContants from './nopayContants'
export function nopayorder(uid){
	console.log(uid);
	return{
		url:'nopayorder',
		method:'get',
		types:[nopayContants.NOPAY_REQUESTING,nopayContants.NOPAY_REQUESTED,nopayContants.NOPAY_REQUESTERROR],
		data:{
			uid:uid,
		}
	}
}
export function delorder(uid,gid,orderid){
	// console.log(uid,gid,orderid);
	return{
		types:[nopayContants.NOPAY_REQUESTING,nopayContants.NOPAY_REQUESTED,nopayContants.NOPAY_REQUESTERROR],
		url:'delorder',
		method:'get',
		data:{
			uid:uid,
			gid:gid,
			orderid:orderid
		}
	}
} 