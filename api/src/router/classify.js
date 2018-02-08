var db = require('../db/db');

module.exports = {
	register:function(app){
		app.get('/classify',function(req,res){
			var keyword = req.query.keyword;
			
			var sql = `
					select 
						g.*
					from 
						goods g
						inner join bigtype b on g.bigtype=b.id
					where b.type='${keyword}' 
			`;

			if(keyword == '鲜花'){
				sql += ' limit 1,8';
			}else if(keyword == '永生花'){
				sql += ' limit 1,5';
			}else if(keyword == '蛋糕'){
				sql += ' limit 1,5';
			}else if(keyword == '巧克力'){
				sql += ' limit 1,4';
			}else if(keyword == '礼品'){
				sql += ' limit 1,6';
			}

			db.select(sql,function(data){
				res.send(data);
			})
		})
	}
}