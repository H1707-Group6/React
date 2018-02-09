var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.post('/deleteGoods',function(req,res){
            var id = req.body.id;
            var sql = `delete from goods where id=${id}`;
            db.delete(sql,function(result){
                res.send(result);
            })
        });
        app.post('/deleteUser',function(req,res){
            var id = req.body.id;
            var sql = `delete from users where id=${id}`;
            db.delete(sql,function(result){
                res.send(result);
            })
        });
        app.post('/deleteOrder',function(req,res){
            var id = req.body.id;
            var sql = `delete from orders where id=${id}`;
            db.delete(sql,function(result){
                res.send(result);
            })
        });
        app.post('/deleteAdministrator',function(req,res){
            var id = req.body.id;
            var sql = `delete from administrator where id=${id}`;
            db.delete(sql,function(result){
                res.send(result);
            })
        })
    }
}