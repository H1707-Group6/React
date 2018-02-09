var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.get('/verify',function(req,res){
            var data = req.query;
            var uname = data.uname;
            var sql = `select * from administrator where username='${uname}'`;
            db.select(sql,function(result){
                var data = result.data.results[0];
                if(!data){
                    res.send('yes');
                }else{
                    res.send('no');
                }
            })
        });
        app.get('/selectlimit',function(req,res){
            var id = req.query.id;
            var sql = `select * from administrator where id=${id}`;
            db.select(sql,function(result){
                var data = result.data.results[0];
                res.send({updatelimit:data.updatelimit,deletelimit:data.deletelimit});
            })
        })
    }
}