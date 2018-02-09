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
					userid = ${uid}`;
				
				// console.log(sql);
			db.select(sql,(date)=>{
				
				res.send(date);
			})
		}),
		/*--------------------添加商品到数据库---------------------*/
		app.post('/myorder',function(req,res){
			let uid = req.body.uid;
			let gid = req.body.gid;
			let qty = req.body.qty;
			let total = req.body.total;
			console.log(uid,gid,qty,total)

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
					var orderid = inserResults.data.results.insertId;
					sql = '';
					sql = `select * from orderproduct where id = ${orderid}`;
					db.select(sql,function(res2){
						res.send(res2);
					})
					
				})
			
			})
		}),
		/*----------------修改状态------------------*/
		app.post('/updataOrder',function(req,res){
			let uid = req.body.uid;
			let orderId = req.body.orderid;
			let status = req.body.status;
			
			console.log(uid,orderId,status)
			// let	sql = `insert into orders(userid,total) values(${uid},${total});`

			let sql = `update orders set status = ${status} where id = ${orderId}`;
			db.update(sql, (result) => {
				// sql = `select * from orders where id = `
                res.send(result);
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
					userid = ${uid} and status= 0`;
				console.log()
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
					userid = ${uid}`;
				db.select(sql,(dates)=>{
				
					res.send(dates);
				})
			})
		})
	}
}