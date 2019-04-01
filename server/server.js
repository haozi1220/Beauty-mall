const userApi = require('./api');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.resolve(__dirname,'../dist')))
app.get('*',function(req,res){
    const html = fs.readFileSync(path.resolve(__dirname,'../dist/index.html'),'utf-8')
    res.send(html);
})

app.use('/api',userApi);
app.listen(8088);
console.log('success listen at port:8088......');