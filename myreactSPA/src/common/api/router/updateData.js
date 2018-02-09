var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.post('/updateGoods',function(req,res){
            var data = req.body;
            var fieldsName,value,id;
            for(var item in data){
                if(item == 'id'){
                    id = data[item];
                }else{
                    fieldsName = item;
                    value = data[item];
                }
            }
            if(fieldsName=='title' || fieldsName=='price' || fieldsName=='saleprice' || fieldsName=='hot' || fieldsName=='mainimg' || fieldsName=='detailsimg' || fieldsName=='color'){
                var sql = `update goods set ${fieldsName}='${value}' where id=${id}`;
            }else{
                var sql = `update goods set ${fieldsName}=${value} where id=${id}`;
            }
            db.update(sql,function(result){
                res.send(result);
            })
        });
        app.post('/updateUser',function(req,res){
            var data = req.body;
            var fieldsName,value,id;
            for(var item in data){
                if(item == 'id'){
                    id = data[item];
                }else{
                    fieldsName = item;
                    value = data[item];
                }
            }
            if(fieldsName=='username' || fieldsName=='email' || fieldsName=='password' || fieldsName=='nickname' || fieldsName=='address' || fieldsName=='gender' || fieldsName=='birthdan' || fieldsName=='address1'){
                var sql = `update users set ${fieldsName}='${value}' where id=${id}`;
            }else{
                var sql = `update users set ${fieldsName}=${value} where id=${id}`;
            }
            db.update(sql,function(result){
                res.send(result);
            })
        });
        app.post('/updateOrder',function(req,res){
            var data = req.body;
            var fieldsName,value,id;
            for(var item in data){
                if(item == 'id'){
                    id = data[item];
                }else{
                    fieldsName = item;
                    value = data[item];
                }
            }
            if(fieldsName=='total'){
                var sql = `update orders set ${fieldsName}='${value}' where id=${id}`;
            }else{
                var sql = `update orders set ${fieldsName}=${value} where id=${id}`;
            }
            db.update(sql,function(result){
                res.send(result);
            })
        });
        app.post('/updateAdministrator',function(req,res){
            var data = req.body;
            var fieldsName,value,id;
            for(var item in data){
                if(item == 'id'){
                    id = data[item];
                }else{
                    fieldsName = item;
                    value = data[item];
                }
            }
            if(fieldsName=='username' || fieldsName=='position' || fieldsName=='password'){
                var sql = `update administrator set ${fieldsName}='${value}' where id=${id}`;
            }else{
                var sql = `update administrator set ${fieldsName}=${value} where id=${id}`;
            }
            db.update(sql,function(result){
                res.send(result);
            })
        })
    }
}