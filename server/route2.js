// 使用express
const express = require('express');
// 使用node的fs模块
const fs = require('fs');

// 生成token方法
function generateToken(data){
    let created = Math.floor(Date.now() / 1000);
    let token = data + created;
    return token;
}

module.exports = () => {
    const route = express.Router();
    route.post('/lll/login', (req, res) => {
        let mObj = {};
        for (let obj in req.body) {
            mObj = JSON.parse(obj);
        }
        let selectUser = mObj.username;
        let selectPassword = mObj.password;
        fs.readFile('../data/user.json', function(err, data) {
            if (err) {
                console.error(err);
            }
            let selectUserArray = [];
            let getData = JSON.parse(data.toString());
            for ( let i in getData.result ) {
                if ( selectUser === getData.result[i].username ) {
                    selectUserArray.push( getData.result[i] );
                }
            }
            if (selectUserArray.length == 0) {
                res.send({
                    'msg': '该用户不存在',
                    'status': -1,
                    'info': req.body,
                    'ots': typeof req.body.username,
                    'name': req.body.username
                }).end();
            } else {
                let dataw = selectUserArray[0];
                if (dataw.password === selectPassword) {
                    dataw.msg = '登陆成功';
                    dataw.status = 1;
                    dataw.info = req.body;
                    dataw.token = generateToken(dataw.username);
                    res.send(dataw).end();
                } else {
                    res.send({
                        'msg': '密码不正确',
                        'status': 2,
                        'psw': selectPassword,
                        'info': mObj,
                    }).end();
                }
            }
        })
    });

    route.post('/lll/regist', (req, res) => {
        let rObj = {};
        for (let obj in req.body) {
                rObj = JSON.parse(obj);
        }
        fs.readFile('../data/user.json', function (err, data) {
            if (err) {
                console.error(err)
            }
            // 将二进制数据转化为字符串
            let readData = data.toString();
            // 把字符串数据解析成json对象
            readData = JSON.parse(readData);
            // 把新增的数据添加进用户数组中
            readData.result.push(rObj);
            // 将更改后的数据转换成字符串
            let strData = JSON.stringify(readData);
            // 将改写后的文件重新写入
            fs.writeFile('../data/user.json', strData, function(err) {
                if(err) {
                    console.error(err);
                }
                res.send({
                    'msg': '注册成功',
                    'status': 2
                }).end();
            })
        })
    });

    // 获取礼物等数据
    route.get('/lll/product/:prodcutname', (req, res) => {
        let reqProName = req.params.prodcutname;
        fs.readFile('../data/'+reqProName+'.json', function (err, data){
            if (err) {
                return;
            }
            let queryGoods = JSON.parse(data.toString());
            res.send(queryGoods).end();
        })
    })
    return route;
}