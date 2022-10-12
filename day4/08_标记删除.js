/* ● 使用delete语句，会把真正的数据从表中删除掉。为了保险起见，推荐使用标记删除的形式，来模拟删除的动作；
● 所谓的标记删除，就是在表中设置类似于status这样的状态字段，来标记当前这条数据是否被删除；
● 当用户执行了删除的动作时，我们并没有执行delete语句把数据删除掉，而是执行update语句，将这条数据对应的status字段标记为删除即可； */

// 导入mysql模块
const mysql = require('mysql');
// 建立与mysql数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库的ip地址
    user: 'root',          //登陆数据库的账号
    password: 'admin',     //登陆数据库的密码
    database: 'my_db_01'   //指定要操作哪个数据库
});

// 标记删除:使用update语句代替delete语句；只更新数据的状态，并没有真正的删除
const sqlStr = 'update users set status=1 where id=?'
// 标记删除id为7的用户
db.query(sqlStr, 7, (err, results) => {
    if (err) return console.log(err.message);
    if (results.affectedRows === 1) {
        console.log('标记删除成功');
    }
})