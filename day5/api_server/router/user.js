const express = require('express');

const router = express.Router();

// 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 导入验证规则对象
const { reg_login_schema } = require('../schema/user')

// 挂载路由

// 导入用户路由处理函数对应的模块
const user_handler = require('../router-handler/user')

// 注册新用户
// 声明局部中间件，数据验证通过后，会把这次请求转给后面的路由处理函数
// 数据验证失败后，终止后续代码执行，并抛出一个全局的Error错误，进入全局错误级别中间进行处理
router.post('/reguser', expressJoi(reg_login_schema), user_handler.reguser)

// 登陆
router.post('/login',expressJoi(reg_login_schema), user_handler.login)

module.exports = router;