// 导入定义验证规则的包
const joi = require('joi')
/* 
    string()值必须是字符串
    integer()值必须是整数型
    alphanum()值只能是包含a-z A-Z 0-9的字符串
    min(length)最小长度
    max(length)最大长度
    required()值是必填项，不能为undefined
    pattern(正则表达式)值必须符合正则表达式的规则
 */

// 定义用户名和密码的验证规则
const username = joi.string().alphanum().min(2).max(10).required();
const password = joi.string().pattern(/^[\S]{6,12}$/).required();


// 定义id，nickname,email的验证规则
const id = joi.number().integer().min(1).required();
const nickname = joi.string().required();
const email = joi.string().email().required();


// 定义头像avatar的验证规则
const avatar = joi.string().dataUri().required();

//定义验证注册和登陆表单数据的规则对象
exports.reg_login_schema = {
    body: {
        username,
        password
    }
}

// 定义验证更新用户信息数据的规则对象
exports.update_userinfo_schema = {
    body: {
        id,
        nickname,
        email
    }
}

// 验证更改密码
exports.update_password_schema = {
    body: {
        oldPwd: password,
        // joi.ref('oldPwd)表示newPwd的值必须和oldPwd的值保持一致
        // joi.not(joi.ref('oldPwd'))表示新密码和旧密码不能相同
        // concat()用于合并验证规则
        newPwd: joi.not(joi.ref('oldPwd')).concat(password)
    }
}

// 验证更换头像
exports.update_avatar_schema = {
    body: {
        avatar
    }
}