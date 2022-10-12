//导入数据库模块
const db = require('../db/index')
// 导入bcryptjs 密码加密与密码对比
const bcrypt = require('bcryptjs')
// 导入jwt
const jwt = require('jsonwebtoken')
// 导入全局配置文件
const config = require('../config')
// 注册新用户的处理函数
exports.reguser = (req, res) => {
    // 获取客户端提交到服务器的用户信息
    let userInfo = req.body;
    // 对表单中的数据，进行合法性的校验
    if (!userInfo.username || !userInfo.password) {
        // return res.send({ status: 1, message: '用户名或密码不合法' })
        return res.cc('用户名或密码不合法')
    }
    // 定义sql语句，查询用户名是否被占用
    const sqlStr = 'select * from ev_users where username=?'
    db.query(sqlStr, userInfo.username, (err, results) => {
        if (err) {
            // return res.send({ status: 1, message: err.message })
            return res.cc(err)
        }
        // 判断用户名是否被占用
        if (results.length > 0) {
            // return res.send({ status: 1, message: '用户名已被占用，请更换其他用户名' })
            return res.cc('用户名已被占用，请更换其他用户名');
        }
        // 用户名可用
        // 调用bcrypt.hashSync()对密码进行加密
        userInfo.password = bcrypt.hashSync(userInfo.password, 10);
        // 插入新用户
        const sqlInsert = 'insert into ev_users set ?'
        db.query(sqlInsert, { username: userInfo.username, password: userInfo.password }, (err, results) => {
            if (err) {
                // return res.send({ status: 1, message: err.message })
                return res.cc(err)
            }
            // 判断影响行数是否为1
            if (results.affectedRows !== 1) {
                // return res.send({ status: 1, message: '注册用户失败，请稍后尝试' })
                return res.cc('注册用户失败，请稍后尝试')

            }
            // res.send({ status: 0, message: '注册成功' })
            res.cc('注册成功', 0)
        })
    })
}

exports.login = (req, res) => {
    // 接收表单数据
    const userInfo = req.body;
    // 定义sql语句
    const sql = 'select * from ev_users where username=?'
    db.query(sql, userInfo.username, (err, results) => {
        // 执行失败
        if (err) return res.cc(err)
        // 执行成功，但是获取到的数据条数不等于1也为失败
        if (results.length !== 1) return res.cc('用户名错误')
        // 判断密码是否正确：调用bcrypt.compareSync(用户提交的密码,数据库的密码)进行对比
        const compareResult = bcrypt.compareSync(userInfo.password, results[0].password);
        if (!compareResult) return res.cc('密码错误')
        // 在服务器端生成token的字符串
        // 1.剔除密码和头像信息
        const user = { ...results[0], password: '', user_pic: '' };
        // 对用户信息进行加密，生成token字符串
        const tokenStr = jwt.sign(user, config.jwtSecretKey, { expiresIn: config.expiresIn })
        res.send({
            status: 0,
            message: '登陆成功',
            token: 'Bearer ' + tokenStr
        })
    })

}