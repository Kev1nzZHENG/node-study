// 不使用app.use()定义的中间件，叫做局部生效的中间件；
// 使用方法1：在路由中，第二个参数为中间件1,第三个参数为中间件2；
// 使用方法2：在路由中，第二个参数以数组存储，[中间件1,中间件2]；

const express = require('express');

const app = express();

// 定义中间件函数
const mw1 = function (req, res, next) {
    console.log('调用了局部生效的中间件1');
    // 流转关系：转交给下一个中间件或路由
    next();
}
const mw2 = function (req, res, next) {
    console.log('调用了局部生效的中间件2');
    // 流转关系：转交给下一个中间件或路由
    next();
}
// 创建路由
// 需求：mw中间件只在/路径生效
app.get('/', mw1, mw2, (req, res) => {
    console.log('调用了/这个路由');
    res.send('Home page')
})
app.get('/test', [mw1, mw2], (req, res) => {
    console.log('调用了/test这个路由');
    res.send('test page')
})
app.get('/user', (req, res) => {
    console.log('调用了/user这个路由');
    res.send('User page')
})

// 启动服务器
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})