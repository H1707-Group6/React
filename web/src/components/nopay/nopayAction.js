export function nopay(uid){
	// console.log(uid);
	return{
		url:'genorder',
		method:'get',
		data:{
			uid:uid,
		}
	}
}  