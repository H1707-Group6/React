var db = require('../db/db');

module.exports = {
	register:function(app){
		app.get('/getHotgoods',function(req,res){
			var keyword = req.query.keyword;
			// keyword = JSON.parse(keyword);
			console.log(keyword);

			let goods = [];
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
						sql += ' limit 1,12;';
					}else{
						sql += ' limit 1,4;';
					}


			});
				console.log(sql);
				db.select(sql,function(data){
						res.send(data);		
				})		

		})

		app.get('/getSearch',function(req,res){
			var keyword = req.query.keyword;
			console.log(keyword);
			var sql = `
					select 
								b.*
					from 
								goods g
						inner join bigtype b on g.bigtype=b.id

					where g.title Like  '%${keyword}%' or b.type Like '%${keyword}%'
					limit 1,1;
			`;

			db.select(sql,function(data){
				console.log(data.data.results)
				res.send(data);
			})


		})
	}
}