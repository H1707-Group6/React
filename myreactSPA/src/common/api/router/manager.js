const db = require('../db/db')

module.exports = {
    register: (app) => {
        // 查
        app.get('/manager', function(req, res){
           
            var page = (req.query.page || 1) * 1;
            var limit = (req.query.limit || 10) * 1;
            var sql = `
            select 
                SQL_CALC_FOUND_ROWS
                *
            from 
                administrator 
                
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`;
            
            db.select(sql, function(data){
                
                res.send(data);
            })   
        })
        // 删
        app.post('/managerdel',function(req,res){
            var id = req.body.id;
            var sql =`
                delete from administrator where id=${id}
            `;
            db.delete(sql,function(data){
                res.send(data);
            })

        })
         // 增
         
        app.post('/managerinsert',function(req,res){
          
            var id = req.body.id;
            var username = req.body.username;
            var password = req.body.password;
            var position = req.body.position;
            var updatelimit = req.body.updatelimit;
            var deletelimit = req.body.deletelimit;
            var date = req.body.date;
           
            var sql = `
                insert into
             administrator 
             (username,password,position,updatelimit,deletelimit)
              values
              ('${username}','${password}','${position}',${updatelimit},${deletelimit})
              `;
            db.insert(sql,function(data){
                console.log(data)
                res.send(data);
            })
        })
        // Update 语句用于修改表中的数据。
        //语法：UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
        app.post('/managerupdate',function(req,res){
            // 参数
            var id= req.body.id;
            console.log(id)
            var username= req.body.username;
         
            var password= req.body.password;
            console.log(password)
            var position= req.body.position;
           
            var updatelimit= req.body.updatelimit;
       
            var deletelimit= req.body.deletelimit;
          var date= req.body.date;

            var sql=`
                update administrator
                set administrator.username='${username}', administrator.password='${password}', administrator.position='${position}',administrator.updatelimit='${updatelimit}',
                    administrator.deletelimit='${deletelimit}'
                where administrator.id='${id}';
                
            `;
            db.update(sql,function(data){
                console.log(data);
                res.send(data);
            })

        })
    }
}