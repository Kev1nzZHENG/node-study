// 导入mysql模块
const mysql = require('mysql');
// 建立与mysql数据库的连接
const db = mysql.createPool({
    host: '127.0.0.1',     //数据库的ip地址
    user: 'root',          //登陆数据库的账号
    password: 'admin',     //登陆数据库的密码
    database: 'my_db_01'   //指定要操作哪个数据库
});

// 向users表中插入username为Spider-Man2，password为pcc4321
// 1.要插入到users表中的数据对象
let user = { username: 'Spider-Man2', password: 'pcc4321' };
// 2.待执行的SQL语句，其中英文d的？表示占位符
let sqlStr = 'insert into users set ?';
// 3.调用query方法，执行sql语句
// 直接将数据对象当作占位符的值
db.query(sqlStr, user, (err, results) => {
    // 执行SQL语句失败
    if (err) return console.log(err.message);
    // 成功
    // 注意：如果执行的insert into插入语句，则results是一个对象
    // 可以通过affectedRows属性，来判断是否插入数据成功
    if (results.affectedRows === 1) {
        console.log('插入数据成功');
    }
})

// 注意：向表中新增数据时，如果数据对象的每个属性和数据表的字段一一对应，才可以通过如下方式快速插入数据