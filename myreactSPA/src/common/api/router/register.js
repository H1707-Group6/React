var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.post('/register',function(req,res){
            var data = req.body;
            var uname = data.uname;
            var upsw = data.upsw;
            var position = '员工';
            var updatelimit = 0;
            var deletelimit = 0;
            var sql = `insert into administrator (username,password,position,updatelimit,deletelimit) values ('${uname}','${upsw}','${position}',${updatelimit},${deletelimit})`;
            db.insert(sql,function(result){
                res.send(result);
            })
        })
    }
}