// 导入mysql模块
const mysql = require('mysql');
// 建立与mysql数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库的ip地址
    user: 'root',          //登陆数据库的账号
    password: 'admin',     //登陆数据库的密码
    database: 'my_db_01'   //指定要操作哪个数据库
});

// 在删除数据时，推荐根据id这样的唯一标识，来删除对应的数据；
const sqlStr = 'delete from users where id=?'
// 删除id为6的用户
db.query(sqlStr,6,(err,results)=>{
    if (err) return console.log(err.message);
    // 注意：执行delete语句之后，结果也是一个对象，也会包含affectedRows属性
    if (results.affectedRows === 1) {
        console.log('删除数据成功');
    }
})