// 可以使用多次app.use()连续定义多个全局中间件；客户端请求到达服务器之后，会按照中间件定义的先后顺序依次进行调用
const express = require('express');

const app = express();

// 定义第一个全局中间件
app.use((req, res, next) => {
    console.log('调用了第1个全局中间件');
    next();
})
// 定义第二个全局中间件
app.use((req, res, next) => {
    console.log('调用了第2个全局中间件');
    next();
})

// 定义路由
app.get('/', (req, res) => {
    res.send('Home page')
})

app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})