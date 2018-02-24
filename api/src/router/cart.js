var db = require('../db/db')

module.exports = {
    register: function(app){
        //加入购物车
        app.post('/addCart', function(req, res){
            var userId = req.body.userId;
            var gId = req.body.goodsId;
            var goodsId = [];
            let sql = `select * from cart where userid = ${userId}`;
            db.select(sql, (result) => {
                if(result.data.results.length==0){
                    goodsId.push(gId);
                    goodsId = goodsId.join(',');
                    sql = `insert into cart(userid, gid) values(${userId}, ${goodsId})`;
                    db.insert(sql, (result) => {
                        res.send(result);
                    })
                }else{
                    if(result.data.results[0].gid !==''){
                        goodsId = result.data.results[0].gid.split(',');
                    }else{
                        goodsId = [];
                    }
                    
                    goodsId = goodsId.concat(gId);
                    goodsId = goodsId.join(',');
                  
                   
                    console.log(goodsId);
                    sql = `update cart set gid = '${goodsId}' where userid = ${userId}`;
                    db.update(sql, (result) => {
                        res.send(result);
                    })
                }        
            })
        })
        //获取购物车数据
        app.get('/getCart',function(req, res){
            var userId = req.query.userId;
            
            let sql = `select * from cart where userid = ${userId}`;
            db.select(sql,(results)=>{
                console.log(results.data.results)
                if(results.data.results[0].gid != ''){
                    var arrId = results.data.results[0].gid.split(',');
                    sql = '';
                    arrId.map(function(iten){
                        sql += `
                            select 
                               *
                            from 
                                goods 
                            where 
                                id = ${iten};
                        `;
                    })
                    db.select(sql,(result)=>{
                        res.send(result);
                    })    
                }else{
                     res.send(results);
                }
            })
        })
        //删除购物车
        app.post('/delCart',function(req,res){
            var gid = req.body.gid;
            var uid = req.body.uid;
            var all_gid = [];
          
            let sql =`select gid from cart where userid = ${uid}`;
            db.select(sql,(result)=>{
                var allgid = result.data.results[0].gid.split(',');
             
                allgid.forEach(function(item){
                    if(item != gid){
                        all_gid.push(item);
                    }
                })
                if(all_gid.length>0){
                    all_gid = all_gid.join(',');
                }
                sql = `update cart set gid = '${all_gid}' where userid = ${uid}`;
                db.update(sql, (data1) => {
                    
                    sql = `select * from cart where userid = ${uid}`;
                    db.select(sql,(result)=>{
                       
                            var arrId = result.data.results[0].gid.split(',');
                            sql = '';
                            arrId.map(function(iten){
                                sql += `
                                    select 
                                       *
                                    from 
                                        goods 
                                    where 
                                        id = ${iten};
                                `;
                            })
                            db.select(sql,(result1)=>{
                                res.send(result1);
                            })
                       
                    })
                })   
            })
        })   
           
    }
}