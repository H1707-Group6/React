var db = require('../db/db')
module.exports = {
	register:function(app){
		/*------------------全部订单---------------*/
		app.get('/genorder',function(req,res){
			// let ids = req.body.ids;//购物车商品id
			let uid = req.query.uid;
			console.log(uid);
			let sql = `select 
					o.*,
					u.id,
					od.*,
					g.*
				from
					orders o
					inner join users u on o.userid = u.id
					inner join orderproduct od on o.id = od.orderid
					inner join goods g on g.id = od.gid
				where 
					userid = 2`;
				
				// console.log(sql);
			db.select(sql,(date)=>{
				console.log(date);
				res.send(date);
			})
		}),
		/*--------------------添加商品到数据库---------------------*/
		app.post('/myorder',function(req,res){
			let uid = req.body.uid;
			let gid = req.body.gid;
			let qty = req.body.qty;
			let total = req.body.total;
			let	sql = `insert into orders(userid,total) values(${uid},${total});`
			db.insert(sql,(result)=>{
				sql = "";
				let orderid = result.data.results.insertId;
				
				let gids = gid.split(',');
				let qtys = qty.split(',');
				for(let i=0;i<gids.length;i++ ){
					var qtyNumber=Number(qtys[i]);
					console.log(qtys[i]);
					sql += `insert into orderproduct(gid,orderid,qty) values(${gids[i]},${orderid},${qtyNumber});`;
				}
				db.insert(sql,(inserResults)=>{
					res.send(inserResults);
				})
			
			})
		}),

        /*-------------未付款订单------------------------*/
        app.get('/nopayorder',function(req,res){
			// let ids = req.body.ids;//购物车商品id
			let uid = req.query.uid;
			console.log(uid);
			let sql = `select 
					o.*,
					u.id,
					od.*,
					g.*
				from
					orders o
					inner join users u on o.userid = u.id
					inner join orderproduct od on o.id = od.orderid
					inner join goods g on g.id = od.gid
				where 
					userid = 2 and status= 0`;
				
				// console.log(sql);
			db.select(sql,(date)=>{
				// console.log(date);
				res.send(date);
			})
		}),
       
        /*---------------删除订单----------------*/
		app.get('/delorder',function(req,res){
			// let ids = req.body.ids;//购物车商品id
			let uid = req.query.uid;
			let gid = req.query.gid;
			let oid = req.query.orderid;
			console.log(gid,oid);
			let sql = `
					delete 
						
						from
						orderproduct
					where 
						orderid in (${oid}) and gid in (${gid})`;
				
				
			db.delete(sql,(date)=>{
				
				sql = `select 
					o.*,
					u.id,
					od.*,
					g.*
				from
					orders o
					inner join users u on o.userid = u.id
					inner join orderproduct od on o.id = od.orderid
					inner join goods g on g.id = od.gid
				where 
					userid = 2`;
				db.select(sql,(dates)=>{
				
					res.send(dates);
				})
			})
		})
	}
}