export function myorder(uid,gid,qty,total){
	console.log(gid);
	return{
		url:'myorder',
		method:'post',
		data:{
			uid:uid,
			gid:gid,
			qty:qty,
			total:total
		}
	}
}

export function allorder(uid){
	console.log(uid);
	return{
		url:'allorder',
		method:'get',
		data:{
			uid:uid
		}
	}
}
export function delorder(gid,oid){
	console.log(gid,oid);
	return{
		url:'delorder',
		method:'get',
		data:{
			gid:gid,
			orderid:oid
		}
	}
}