var db = require('../db/db')
module.exports = {
	register:function(app){
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
		// 支付页
       	// app.post('/pay', function(req, res){
        //     var orderid = req.body.orderid;
        //     var status = req.body.status;
        //     var date = req.body.time;
           
        //     var sql =`
        //         select
        //             *
        //         from
        //             orders
        //         where userid = '${userid}';

        //     `;
        //     db.select(sql,function(data){
        //         console.log(data);
	       //      if(status == 1){
	       //      	//确定为该时间编号订单并status为1已付款
	       //          res.send('yes');
	       //      }else if(status == 0){//未支付
	       //          res.send('no');
	       //      }
        //     })
       	// }),

       	// 删
        app.post('/orderdelect',function(req,res){
            var date = req.body.date; 
            var userid = req.body.userid; 
            console.log(date,userid);
            var sql=`
                delete from orders where 
                date= '${date}' and userid=${userid};
            `;

            db.delete(sql,function(data){
                // console.log(data);
                res.send(data);
            })
        })
	}
}