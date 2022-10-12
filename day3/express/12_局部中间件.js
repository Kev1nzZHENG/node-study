// 不使用app.use()定义的中间件，叫做局部生效的中间件；
// 使用方法：在路由中，第二个参数为中间件即可；

const express = require('express');

const app = express();

// 定义中间件函数
const mw = function (req, res, next) {
    console.log('调用了局部生效的中间件');
    // 流转关系：转交给下一个中间件或路由
    next();
}
// 创建路由
// 需求：mw中间件只在/路径生效
app.get('/', mw, (req, res) => {
    console.log('调用了/这个路由');
    res.send('Home page')
})
app.get('/user', (req, res) => {
    console.log('调用了/user这个路由');
    res.send('User page')
})

// 启动服务器
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})