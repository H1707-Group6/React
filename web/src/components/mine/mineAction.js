export function genorder(uid){
	// console.log(uid);
	return{
		url:'genorder',
		method:'post',
		data:{
			uid:uid
		}
	}
}