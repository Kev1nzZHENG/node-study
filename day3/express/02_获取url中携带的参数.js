const express = require('express');

const app = express();

// 1.获取url中携带的查询参数  通过req.query对象
// 访问http://127.0.0.1/?name=zs&age=20 
app.get('/', (req, res) => {
    // 通过req.query可以获取到客户端发送过来的查询参训
    // 注意：默认情况下req.query是一个空对象
    console.log(req.query);
    res.send(req.query)
})
// 2.获取url中的动态参数  通过req.params对象
// http://127.0.0.1/user/10/zs { id: '10', name: 'zs' }
app.get('/user/:id/:name', (req, res) => {
    // req.params默认是一个空对象
    // 里面存放着：动态匹配到的参数值
    console.log(req.params);
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})