// 1.express.static()快速托管静态资源的内置中间件，例如html文件、图片、css样式等（无兼容性）
// 2.express.json()解析JSON格式的请求体数据（有兼容性，仅在4.16.0+版本中使用）
// 3.express.urlencoded({extend:false})解析URL-encoded格式的请求体数据（有兼容性，仅在4.16.0+版本中使用）
// 使用:app.use(express.中间件名)

const express = require('express');

const app = express();

// 注意：除了错误级别的中间件，其他中间件，必须在路由之前进行配置
// 2.
// express.json()中间件，解析表单中的JSON格式数据
app.use(express.json());
// express.urlencoded()中间件,解析URL-encoded格式的请求体数据
app.use(express.urlencoded({ extend: false }))

// 1.定义路由
app.post('/user', (req, res) => {
    // 在服务器，可以使用req.body这个属性，来接受url-encoded格式的数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认为undefined
    console.log(req.body);
    res.send('ok')
})

app.post('/book', (req, res) => {
    // 在服务器，可以使用req.body这个属性，来接受客户端发送过来的请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认为undefined
    console.log(req.body);
    res.send('ok')
})


// 启动服务器
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})