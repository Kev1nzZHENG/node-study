// 注意：先运行中间件函数，再执行路由的回调

const express = require('express');

const app = express();

// 定义一个最简单的中间件函数；注意中间件函数必须包含next参数
// next函数是实现多个中间件连续调用的关键，它表示把流转关系转交给下一个中间件或路由
// 将mw注册为全局生效的中间件,通过调用app.use(中间件函数)；

// 定义中间件的简化形式
app.use(function (req, res, next) {
    console.log('这是最简单的中间件函数');
    // 流转关系：转交给下一个中间件或路由
    next();
})

// 创建路由
app.get('/', (req, res) => {
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

