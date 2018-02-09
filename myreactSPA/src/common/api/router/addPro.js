var db = require('../db/db.js');
module.exports = {
    register:function(app){
        app.post('/addPro',function(req,res){
            var data = req.body;
            var title = data.title;
            var bigtype = data.bigtype;
            var smalltype = data.smalltype;
            var price = data.price;
            var saleprice = data.saleprice;
            var saleqty = data.saleqty;
            var hot = data.hot;
            var mainimg = data.mainimg;
            var detailsimg = data.detailsimg;
            var color = data.color;
            var qty = data.qty;
            var sql = `insert into goods (title,bigtype,smalltype,price,saleprice,saleqty,hot,mainimg,detailsimg,color,qty) values('${title}',${bigtype},${smalltype},${price},${saleprice},${saleqty},'${hot}','${mainimg}','${detailsimg}','${color}',${qty})`;
            db.insert(sql,function(result){
                res.send(result);
            })
        });
        app.post('/addAdmin',function(req,res){
            var data = req.body;
            var username = data.username;
            var password = data.password;
            var position = data.position;
            var updatelimit = data.updatelimit;
            var deletelimit = data.deletelimit;
            var sql = `insert into administrator (username,password,position,updatelimit,deletelimit) values ('${username}','${password}','${position}',${updatelimit},${deletelimit})`;
            db.insert(sql,function(result){
                res.send(result);
            })
        })
    }
}