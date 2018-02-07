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