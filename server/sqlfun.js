var sqlMap = {
    user: {
        login: 'SELECT userpsw FROM admin WHERE username = ?;',
        add: 'insert into admin(username,userpsw) values (?,?);'
    }
}

module.exports = sqlMap;