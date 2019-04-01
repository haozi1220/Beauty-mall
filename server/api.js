var models = require('./db');
var express = require('express');
var Router = express.Router();
var mysql = require('mysql');
var $sql = require('./sqlfun');

var conn = mysql.createConnection(models.mysql);

conn.connect();

var jsonWrite = function(res, ret){
    if (typeof ret === 'undefined'){
        res.json({
            code: '1',
            msg: '操作失败'
        });
    } else {
        res.json(ret)
    }
}

Router.post('./login',(req,res) => {
    var sal = $sql.user.login;
    var params = req.body;
    console.log('sql',sql);
    console.log("params",params);
    conn.query(sql,[params.username],function(err, result){
        if(err){
            console.log(err);
        }
        if(result){
            jsonWrite(res,result);
            for(var i = 0; i < result.length; i ++){
                console.log('请求回来',result[i]);
                console.log('请求结果',typeof result[i],result[i].userpsw);
                if(result[i].userpsw == params.userpsw){
                    res.send('返回回来了！');
                }
            }
            res.end('is over');
        }
    })
})

module.exports = Router;