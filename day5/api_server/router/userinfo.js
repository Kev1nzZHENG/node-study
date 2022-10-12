const express = require('express');

const router = express.Router();

// 导入验证数据的中间件
const expressjoi = require('@escook/express-joi')
// 导入更新用户信息验证的规则对象, 导入更改密码的规则对象
const { update_userinfo_schema, update_password_schema, update_avatar_schema } = require('../schema/user')



// 导入路由处理函数模块
const userinfo_handler = require('../router-handler/userinfo')
// 获取用户基本信息
router.get('/userinfo', userinfo_handler.getUserInfo)

// 更新用户信息
router.post('/userinfo', expressjoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

// 重置密码
router.post('/updatepwd', expressjoi(update_password_schema), userinfo_handler.updatepwd)

// 更新用户头像
router.post('/update/avatar', expressjoi(update_avatar_schema), userinfo_handler.updateAvatar)

module.exports = router;