export function allorder(uid){
	// console.log(uid);
	return{
		url:'genorder',
		method:'get',
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
		data:{
			uid:uid,
			gid:gid,
			orderid:orderid
		}
	}
}
