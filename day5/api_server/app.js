// 导入express
const express = require('express');
// 创建服务器实例对象
const app = express();
// 导入并配置cors中间件
const cors = require('cors');
// 导入定义验证规则的包
const joi = require('joi')
app.use(cors());
// 配置解析表单数据的中间件，注意这个中间件，只能解析application/x-www-form-urlencoded格式的表单数据
app.use(express.urlencoded({ extended: false }))

// 封装res.send函数为res.cc中间件,要在路由之前封装
app.use((req, res, next) => {
    res.cc = (err, status = 1) => {
        // err的值可能是一个错误对象，也可能是一个错误的描述字符串
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next();
})

// 配置token的中间件
const expressJwt = require('express-jwt');
const config = require('./config')

app.use(expressJwt({ secret: config.jwtSecretKey }).unless({ path: [/^\/api/] }));


// 导入并使用路由模块
const userRouter = require('./router/user')
app.use('/api', userRouter)
// 用户信息路由模块
const userinfoRouter = require('./router/userinfo');
app.use('/my', userinfoRouter)
// 导入文章分类管理模块
const artcaseRouter = require('./router/artcate')
app.use('/my/article', artcaseRouter)

// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失误对象
    if (err instanceof joi.ValidationError) return res.cc(err);
    // 身份认证失败后的错误
    if (err.name === 'UnauthorizedError') return res.cc('身份验证失败');
    // 未知的错误
    res.cc(err)
})
// 启动服务器
app.listen(80, () => {
    console.log('api server running at http://127.0.0.1');
})