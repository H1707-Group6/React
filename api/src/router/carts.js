var db = require('../db/db')

module.exports = {
    register: function(app){
        //加入购物车
        app.post('/addcart', function(req, res){
            var userId = req.body.userId;
            var gId = req.body.goodsId;
            var num = 1;
            console.log(userId,gId)
            let sql = `select * from cartproduct where userid = ${userId} and gid = ${gId}`;
            db.select(sql, (result) => {
                console.log(result.data.results.length);
                if(result.data.results.length==0){
                    sql = `insert into cartproduct(userid, gid,num) values(${userId}, ${gId},${num})`;
                    db.insert(sql, (result) => {
                        res.send(result);
                    })
                }else{
                    console.log(result.data.results[0].num)
                    num = ++result.data.results[0].num;
                    console.log(num)
                    sql = `update cartproduct set num = ${num} where userid = ${userId} and gid = ${gId}`;
                    db.insert(sql, (result) => {
                        res.send(result);
                    })
                }     
            })
        })
        //获取购物车数据
        app.get('/getcart',function(req, res){
            var userId = req.query.userId; 
            let sql = `select 
                    g.*,
                    c.num
                from
                    cartproduct c
                    inner join goods g on g.id = c.gid
                where 
                    userid = ${userId}`;
            db.select(sql,(results)=>{
               res.send(results)
            })
        })
        //删除购物车
        app.post('/delcart',function(req,res){
            var gid = req.body.gid;
            var uid = req.body.uid;
            
            let sql = `
                    delete 
                        
                        from
                        cartproduct
                    where 
                        userid in (${uid}) and gid in (${gid})`;
                
                
            db.delete(sql,(date)=>{
                
                sql = `select 
                    g.*,
                    c.num
                from
                    cartproduct c
                    inner join goods g on g.id = c.gid
                where 
                    userid = ${uid}`;
                db.select(sql,(results)=>{
                   res.send(results)
                })
            })















            // let sql =`select gid from cart where userid = ${uid}`;
            // db.select(sql,(result)=>{
            //     var allgid = result.data.results[0].gid.split(',');
             
            //     allgid.forEach(function(item){
            //         if(item != gid){
            //             all_gid.push(item);
            //         }
            //     })
            //     if(all_gid.length>0){
            //         all_gid = all_gid.join(',');
            //     }
            //     sql = `update cart set gid = '${all_gid}' where userid = ${uid}`;
            //     db.update(sql, (data1) => {
                    
            //         sql = `select * from cart where userid = ${uid}`;
            //         db.select(sql,(result)=>{
                       
            //                 var arrId = result.data.results[0].gid.split(',');
            //                 sql = '';
            //                 arrId.map(function(iten){
            //                     sql += `
            //                         select 
            //                            *
            //                         from 
            //                             goods 
            //                         where 
            //                             id = ${iten};
            //                     `;
            //                 })
            //                 db.select(sql,(result1)=>{
            //                     res.send(result1);
            //                 })
                       
            //         })
            //     })   
            // })
        })   
           
    }
}