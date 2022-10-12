const db = require('../db/index')
const bcrypt = require('bcryptjs')

// 获取用户信息
exports.getUserInfo = (req, res) => {
    // 定义查询用户信息的sql语句
    const sql = 'select id,username,nickname,email,user_pic from ev_users where id=?'
    db.query(sql, req.user.id, (err, results) => {
        // 执行失败
        if (err) return res.cc(err);
        // 执行成功
        if (results.length !== 1) return res.cc('获取用户信息失败');
        // 用户信息获取成功
        res.send({
            status: 0,
            message: '获取用户信息成功',
            data: results[0]
        })
    })
}

// 更新用户信息
exports.updateUserInfo = (req, res) => {
    const sql = 'update ev_users set ? where id=?';
    db.query(sql, [req.body, req.body.id], (err, results) => {
        // 执行sql语句失败
        if (err) return res.cc(err);
        // 执行sql语句成功，但是影响行数不等于1
        if (results.affectedRows !== 1) return res.cc('更新用户信息失败');
        // 如果传入的id不一致
        if (req.body.id !== req.user.id) return res.cc('id不一致,更新用户信息失败');
        res.cc('更新用户信息成功', 0)
    })
}

// 更改密码
exports.updatepwd = (req, res) => {
    // 根据id查询用户的信息
    let sql = 'select * from ev_users where id=?'
    db.query(sql, req.user.id, (err, results) => {
        // 执行sql语句失败
        if (err) return res.cc(err);
        // 判断结果是否存在
        if (results.length !== 1) return res.cc('用户不存在');
        // 判断用户输入的旧密码是否正确
        const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password);
        if (!compareResult) return res.cc('旧密码错误')
        // 定义更新用户密码的sql语句
        let sql = 'update ev_users set password=? where id=?';
        // 对新密码进行加密处理
        let newPwd = bcrypt.hashSync(req.body.newPwd, 10);
        db.query(sql, [newPwd, req.user.id], (err, results) => {
            // 执行sql语句失败
            if (err) return res.cc(err);
            // 判断影响的行数
            if (results.affectedRows !== 1) return res.cc('更新密码失败')
            res.cc('更新密码成功', 0)
        })
    })
}

// 更换头像
exports.updateAvatar = (req, res) => {
    let sql = 'update ev_users set user_pic= ? where id =?'
    db.query(sql, [req.body.avatar, req.user.id], (err, results) => {
        // 失败
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc('更换头像失败')
        // 成功
        res.cc('更换头像成功', 0)
    })
}