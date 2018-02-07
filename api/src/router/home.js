var db = require('../db/db');

module.exports = {
	register:function(app){
		app.get('/getHotgoods',function(req,res){
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
				sql += ' limit 1,12';
			}else{
				sql += ' limit 1,4';
			}

			db.select(sql,function(data){
				res.send(data);
			})
		})
	}
}