var db = require('../db/db')
module.exports = {
	register:function(app){
		//登入
		app.get('/login',function(req, res){
            var username = req.query.username;
            var password = req.query.password;
            console.log(username,password);
            var sql = `
                select
                   *
                from
                    users
                where
                	username='${username}' and password='${password}'
            `;
            // 查询登录账号和密码是否已注册
            db.select(sql, function(data){
            	res.send(data);
            })
        })
        //注册，验证客户端用户名的输入框失去焦点时而发起的请求，查询注册名是否已存在
        app.get('/verify', function(req, res){
			var username = req.query.username;
           
			var sql = `
	            select
	               *
	            from
	                users
	            where
	           		username='${username}';
	           `;
	           db.select(sql, function(data){
		           res.send(data);
		      })
		})
		//客户端点击提交后，再一次验证
        app.get('/register', function(req, res){
            var username = req.query.username;
            var password = req.query.password;
           
            var sql = `
	            select
	               *
	            from
	                users
	            where
	            	username='${username}'
            `;
            // 再次查询注册名是否已存在
            db.select(sql, function(data){
            	console.log(data);
                if(data.data.results.length == 0 ){
                    // 写入数据
                    var sql = `
                        INSERT INTO users (id,username,password,date) VALUES 
                        (id=id+1,'${username}', '${password}',now());
                    `;
                        // console.log(sql);
                    db.insert(sql,function(data){
                        res.send(data);
                    })
                	
                }else{
                	res.send(data);
                }
            })
        })
	}
}