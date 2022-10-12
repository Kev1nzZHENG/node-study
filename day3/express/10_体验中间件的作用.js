// 中间件的作用：多个中间件之间，共享一份req和res；基于这样的特行，我们可以在上游的中间件中，统一为req或res对象添加自定义的属性或方法，供下游的中间件或路由进行使用
// 需求：获取每次请求到服务器的时间的时间
const express = require('express');

const app = express();

// 定义中间件的简化形式
app.use(function (req, res, next) {
    // 获取到请求到服务器的时间
    let time = Date.now();
    // 为req对象挂载自定义属性，从而把时间共享给后面的所有路由
    req.startTime = time;
    next();
})

app.get('/', (req, res) => {
    console.log('调用了/这个路由');
    res.send('Home page' + req.startTime)
})
app.get('/user', (req, res) => {
    console.log('调用了/user这个路由');
    res.send('User page' + req.startTime)
})
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})

