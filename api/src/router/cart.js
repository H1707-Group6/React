var db = require('../db/db')

module.exports = {
    register: function(app){
        app.post('/addCart', function(req, res){
            var userId = req.body.userId;
            var gId = req.body.goodsId;
            var goodsId = [];
            let sql = `select * from cart where userid = ${userId}`;
            db.select(sql, (result) => {
                if(result.data.results.length<=0){
                    goodsId.push(gId);
                    goodsId = goodsId.join(',');
                    sql = `insert into cart(userid, gid) values(${userId}, ${goodsId})`;
                    db.insert(sql, (result) => {
                        res.send(result);
                    })
                }else{
                    goodsId = result.data.results[0].gid.split(',');
                    goodsId = goodsId.concat(gId);
                    goodsId = goodsId.join(',');
                    sql = `update cart set gid = '${goodsId}' where userid = ${userId}`;
                    db.update(sql, (result) => {
                        res.send(result);
                    })
                }        
            })
        })
        app.get('/getCart',function(req, res){
            var userId = req.query.userId;
            let sql = `select * from cart where userid = ${userId}`;
            db.select(sql,(result)=>{
                if(result.data.results.length>0){
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
                    db.select(sql,(result)=>{
                        res.send(result);
                    })
                }
            })
        })

        app.post('/delCart',function(req,res){
            var gid = req.body.gid;
            var uid = req.body.uid;
            console.log(gid,uid);
            var sql =`select gid from cart where userid = 2`
            db.select(sql,(result)=>{
                var allgid = result.data.results[0].gid;
                res.send(result)
            })
        })
       
       
       
    }
}
  // sql += `
  //   select 
  //       g*,
  //       b.type,
  //       s.type
  //   from 
  //       goods g
  //       inner join bigtype b on g.bigtype = b.id
  //       inner join smalltype s on g.smalltype = s.id
  //   where 
  //       id = ${iten};