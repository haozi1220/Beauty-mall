const express = require('express');
const app = express();

app.use(express.urlencoded({
    extended: false
}));

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header('X-Powerd-By', '3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/lll/getList.json', function(req, res) {
    console.log(req);
    var obj = {
        code: 0,
        list: [
            {
                name: '苹果'
            },{
                name: '香蕉'
            },{
                name: '雪梨'
            }
        ]
    };
    res.jsonp(obj);
});

app.use('/',require('./route2.js')());

app.listen(3003, function(){
    console.log('Server is running at port 3003');
});