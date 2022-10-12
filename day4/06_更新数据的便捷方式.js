// 导入mysql模块
const mysql = require('mysql');
// 建立与mysql数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库的ip地址
    user: 'root',          //登陆数据库的账号
    password: 'admin',     //登陆数据库的密码
    database: 'my_db_01'   //指定要操作哪个数据库
});

// 1.要更新的数据对象
let user = { id: 6, username: 'bbb', password: '111' };
// 2.要执行的SQL语句
let sqlStr = 'update users set ? where id=?'
// 3.调用db.query()执行sql语句的同时，使用数组依次为占位符指定具体的值
db.query(sqlStr, [user,user.id], (err, results) => {
    // 执行SQL语句失败
    if (err) return console.log(err.message);
    // 注意：执行了update语句之后，执行的结果，也是一个对象，可以通过affectedRows属性判断是否成功
    if (results.affectedRows === 1) {
        console.log('更新数据成功');
    }
})