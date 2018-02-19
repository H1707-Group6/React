var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.post('/login',function(req,res){
            var uname = req.body.uname;
            var upsw = req.body.upsw;
            var sql = `select * from administrator where username='${uname}' and password='${upsw}'`;
            db.select(sql,function(result){
                var data = result.data.results[0];
                if(data){
                    res.send({status:'yes',result:data})
                }else{
                    res.send('no')
                }
            })
        })
    }
}