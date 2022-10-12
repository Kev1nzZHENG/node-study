// 1.导入mysql模块
const mysql = require('mysql');
// 2.建立与mysql数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库的ip地址
    user: 'root',          //登陆数据库的账号
    password: 'admin',     //登陆数据库的密码
    database: 'my_db_01'   //指定要操作哪个数据库
})
// 测试mysql模块能否正常工作
db.query('select 1', (err, results) => {
    // mysql模块工作期间报错
    if (err) return console.log(err.message);
    //mysql能够成功执行
    console.log(results);
})