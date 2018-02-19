var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.get('/getgoods',function(req,res){
            var data = req.query;
            var time = data.time;
            var sql = `select * from goods where date like '${time}%';
            select count(date) from goods;`;
            db.select(sql,function(result){
                var data = result.data.results;
                var results = data[0].length;
                var total = data[1][0];
                var thetotal;
                for(var item in total){
                    thetotal = total[item];
                }
                res.send({results:results,total:thetotal,data:data[0]})
            })
        });
        app.get('/getuser',function(req,res){
            var data = req.query;
            var time = data.time;
            var sql = `select * from users where date like '${time}%';
            select count(date) from users;`;
            db.select(sql,function(result){
                var data = result.data.results;
                var results = data[0].length;
                var total = data[1][0];
                var thetotal;
                for(var item in total){
                    thetotal = total[item];
                }
                res.send({results:results,total:thetotal,data:data[0]})
            })
        });
        app.get('/getorder',function(req,res){
            var data = req.query;
            var time = data.time;
            var sql = `select * from orders where date like '${time}%';
            select count(date) from orders;`;
            db.select(sql,function(result){
                var data = result.data.results;
                var results = data[0].length;
                var total = data[1][0];
                var thetotal;
                for(var item in total){
                    thetotal = total[item];
                }
                res.send({results:results,total:thetotal,data:data[0]})
            })
        });
        app.get('/getadministrator',function(req,res){
            var data = req.query;
            var time = data.time;
            var sql = `select * from administrator where date like '${time}%';
            select count(date) from administrator;`;
            db.select(sql,function(result){
                var data = result.data.results;
                var results = data[0].length;
                var total = data[1][0];
                var thetotal;
                for(var item in total){
                    thetotal = total[item];
                }
                res.send({results:results,total:thetotal,data:data[0]})
            })
        })
    }
}