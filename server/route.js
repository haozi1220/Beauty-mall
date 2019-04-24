const express = require('express');
const mysql = require('mysql');
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vue-admin',
    port: 3307
});

module.exports = () => {
    const route = express.Router();
    const getHomeStr = `SELECT password, username FROM goods`;
    const getCateNames = 'SELECT * FROM goods ORDER BY price';

    route.post('/lll/login', (req, res) => {
        let mObj = {};
        for (let obj in req.body) {
            mObj = JSON.parse(obj);
        }
        let username = mObj.username;
        let password = mObj.password;
        const selectUser = `SELECT * FROM goods WHERE username = '${username}'`;
        db.query(selectUser, (err, data) => {
            if (err) {
                console.log(err);
                res.send({
                    'msg': '服务器出错',
                    'status': 0
                }).end();
            } else {
                if (data.length == 0) {
                    res.send({
                        'msg': '该用户不存在',
                        'status': -1,
                        'info': req.body,
                        'ots': typeof req.body.username,
                        'name': req.body.username
                    }).end();
                } else {
                    let dataw = data[0];
                    if (dataw.password === password) {
                        dataw.msg = '登陆成功',
                        dataw.status = 1;
                        dataw.info = req.body,
                        res.send(dataw).end();
                    } else {
                        res.send({
                            'msg': '密码不正确',
                            'status': 2,
                            'psw': password,
                            'info': mObj,
                        }).end();
                    }
                }
            }
        })
    });

    route.get('/category', (req, res) => {
        console.log('Enter back !');
        getCateNamesDatas(getCateNames, res);
    });

    function getCateNamesDatas(getCateNames, res) {
        db.query(getCateNames, (err, data) => {
            if (err) {
                console.log(err);
                res.status(500).send('database err').end();
            } else {
                if (data.length == 0) {
                    res.status(500).send('no datas').end();
                } else {
                    res.send(data);
                }
            }
        })
    };

    return route;
}