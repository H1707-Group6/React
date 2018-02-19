var db = require('../db/db');

module.exports = {
	register:function(app){
		app.get('/classify',function(req,res){
			var keyword = req.query.keyword;

			var sql='';
			keyword.forEach(function(item){

				sql += `
					select 
						g.*
					from 
						goods g
						inner join bigtype b on g.bigtype=b.id
					where b.type='${item}' 
				`;

				if(item == '鲜花'){
					sql += ' limit 1,8;';
				}else if(item == '永生花'){
					sql += ' limit 1,5;';
				}else if(item == '蛋糕'){
					sql += ' limit 1,5;';
				}else if(item == '巧克力'){
					sql += ' limit 1,4;';
				}else if(item == '礼品'){
					sql += ' limit 1,6;';
				}

			});
			console.log(sql);

			db.select(sql,function(data){
				res.send(data);
			})
		})
	}
}