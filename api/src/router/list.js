var db = require('../db/db')

module.exports = {
    register: function(app){
        app.get('/getgoodslist', function(req, res){
            var keyword = req.query.keyword;
            var type = req.query.type;
            var dec = req.query.desc;
            var sql = `
                select                           
                    g.*
                from
                    goods g 
                    inner join bigtype b on g.bigtype = b.id
                where
                    type = '${keyword}'
            `;
            if(type == '销量'){
                console.log(dec)
                if(dec == 'false'){
                  
                    sql +='order by saleqty desc';
                }else{  
                   
                    sql +='order by saleqty asc';
                }
            }else if(type == '价钱'){
                if(dec == 'false'){
                    sql+='order by saleprice desc';
                }else{
                    sql+='order by saleprice asc'
                }
            }
            db.select(sql, function(data){
               
                res.send(data);
            })
        })
        app.get('/getdetails',function(req, res){
            var goodid = req.query.gid;
            var sql = `
            select                           
                *
            from
                goods 
            where
                id = ${goodid}
            `;   
            db.select(sql, function(data){
               
                    res.send(data);
                
            })
        })
        app.post('/comment',function(req, res){
            var gid = req.body.goodsId;
            
        
            var sql = `
                select 
                    g.mainimg,
                    gr.*,                          
                    u.username
                from
                    
                    grade gr
                    inner join goods g  on g.id = gr.gid
                    inner join users u on gr.userid = u.id
                where 
                    gr.gid = ${gid}`;
            db.select(sql, function(data){
                 
                res.send(data);
                
            })
        })
    }
}