var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({extended: false}));

var list = require('./list')
var home = require('./home')
var classify = require('./classify')

var fbook = require('./fbook')
var order = require('./order')

// var cart = require('./cart')
var carts = require('./carts')


module.exports = {
    start: function(_port){

        app.all('*', function(req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
            res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
            res.header("X-Powered-By",' 3.2.1')
            if(req.method=="OPTIONS") {
                res.send(200);
            } else {
                next();
            }
        });

        //冯志伟
        list.register(app);
        // cart.register(app);
        carts.register(app);
        
        //龙飞宇
        home.register(app);
        classify.register(app);

        //韦职丽
        fbook.register(app);
        order.register(app);

        app.listen(_port,function(){
            console.log('连接成功')
        });
    }
}