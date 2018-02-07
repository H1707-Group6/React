export function login(username,password){
	console.log(username,password);
	return{
		url:'login',
		method:'get',
		data:{
			username:username,
			password:password
		}
	}
}