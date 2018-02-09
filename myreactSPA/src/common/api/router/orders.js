const db = require('../db/db')

module.exports = {
    register: (app) => {
        // 查
        app.get('/orders', function(req, res){
           
            var page = (req.query.page || 1) * 1;
            var limit = (req.query.limit || 10) * 1;
            var sql = `
            select 
                SQL_CALC_FOUND_ROWS
                users.username,users.id,users.address,orders.status,orders.date,users.phone 
            from 
                orders 
                INNER JOIN 
            users
            ON orders.userid=users.id
            limit ${(page - 1) * limit}, ${limit};
            select FOUND_ROWS() as rowscount;`;
            
            db.select(sql, function(data){
                console.log(data)
                res.send(data);
            })   
        })
        // 删
        app.post('/ordersdel',function(req,res){
            var id = req.body.id;
            var sql =`
                delete from orders where userid=${id}
            `;
            db.delete(sql,function(data){
                res.send(data);
            })

        })
        
        // Update 语句用于修改表中的数据。
        //语法：UPDATE 表名称 SET 列名称 = 新值 WHERE 列名称 = 某值
        
    }
}