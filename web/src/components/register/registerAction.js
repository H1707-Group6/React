//查询登录账号和密码是否已注册
export function verify(username){
	// console.log(username);
	return{
		url:'verify',
		method:'get',
		data:{
			username:username,
		}
	}
}
// 再次查询注册名是否已存在
export function register(username,password){
	// console.log(username,password);
	return{
		url:'register',
		method:'get',
		data:{
			username:username,
			password:password
		}
	}
}

// export function randomCode(){
// 	return{
// 		data:function(){
//    			 // 随机生成一个4位验证码（包含字母）
// 		    var str = 'abcdefghijklmnopqrstuvwxyz0123456789';
// 		    var _code = '';
// 		    for(var i=0;i<4;i++){
// 		        var index = parseInt(Math.random()*str.length) //不可能大于36
// 		        _code += str[index]
// 		    }
// 		    vcode.innerHTML = _code.toUpperCase();
// 		}
// 	}
// }