var express = require('express');
var bp = require('body-parser');
var app = express();

app.use(bp.urlencoded({extended: false}));

var addPro = require('./addPro.js');
var login = require('./login.js');
var register = require('./register.js');
var verify = require('./verify.js');
var getNum = require('./getNum.js');
var search = require('./search.js');
var goods = require('./goods');
var orders = require('./orders');
var deleteMsg = require('./deleteMsg.js');
var manager = require('./manager');
var updateData = require('./updateData.js');


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
        addPro.register(app);
        login.register(app);
        register.register(app);
        verify.register(app);
        getNum.register(app);
        search.register(app);
        goods.register(app);
        orders.register(app);
        deleteMsg.register(app);
        manager.register(app);
        updateData.register(app);
        app.listen(_port,function(){
            console.log('连接成功')
        });
    }
}