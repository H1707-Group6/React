import * as payContants from './payContants'
export function nopayorder(uid){
	console.log(uid);
	return{
		url:'nopayorder',
		method:'get',
		types:[payContants.PAY_REQUESTING,payContants.PAY_REQUESTED,payContants.PAY_REQUESTERROR],
		data:{
			uid:uid,
		}
	}
}
export function delorder(uid,gid,orderid){
	// console.log(uid,gid,orderid);
	return{
		types:[payContants.PAY_REQUESTING,payContants.PAY_REQUESTED,payContants.PAY_REQUESTERROR],
		url:'delorder',
		method:'get',
		data:{
			uid:uid,
			gid:gid,
			orderid:orderid
		}
	}
} 

export function payed(uid,orderid,status){
	console.log(uid,orderid,status);
	return{
		types:[payContants.PAYED_REQUESTING,payContants.PAYED_REQUESTED,payContants.PAYED_REQUESTERROR],
		url:'updataOrder',
		method:'post',
		data:{
			uid:uid,
			orderid:orderid,
			status:status
		}
	}
} 