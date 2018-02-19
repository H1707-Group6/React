var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.get('/searchgoods',function(req,res){
            var keyword = req.query.keyword;
            var sql = `select * from goods where concat (title,price,saleprice,color,hot) like '%${keyword}%'`;
            db.select(sql,function(result){
                if(result.status){
                    res.send(result.data)
                }else{
                    res.send('no');
                }
            })
        });
        app.get('/searchuser',function(req,res){
            var keyword = req.query.keyword;
            var sql = `select * from users where concat (id,username,nickname,gender) like '%${keyword}%'`;
            db.select(sql,function(result){
                if(result.status){
                    res.send(result.data)
                }else{
                    res.send('no');
                }
            })
        });
        app.get('/searchorder',function(req,res){
            var keyword = req.query.keyword;
            var sql = `select * from orders where concat (id,userid,status,total) like '%${keyword}%'`;
            db.select(sql,function(result){
                if(result.status){
                    res.send(result.data)
                }else{
                    res.send('no');
                }
            })
        });
        app.get('/searchadministrator',function(req,res){
            var keyword = req.query.keyword;
            var sql = `select * from administrator where concat (id,username,updatelimit,deletelimit,position) like '%${keyword}%'`;
            db.select(sql,function(result){
                if(result.status){
                    res.send(result.data)
                }else{
                    res.send('no');
                }
            })
        })
    }
}