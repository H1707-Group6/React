var db = require('../db/db')
module.exports = {
	register:function(app){
		app.post('/genorder',function(req,res){
			// let ids = req.body.ids;//购物车商品id
			let uid = req.body.uid;
			let sql = `
				select 
					o.*,
					u.id,
					od.*,
					g.*
				FROM
					order o
					INNER JOIN user u on o.userid = u.id
					INNER JOIN orderproduct od on o.id = od.orderid
					INNER JOIN goods g on g.id = od.gid
				where 
					userid = 1
			`
			db.insert(sql,(date)=>{
				res.send(date);
			})
		})
	}
}