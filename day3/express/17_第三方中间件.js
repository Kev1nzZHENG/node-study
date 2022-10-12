// 非express官方内置，而是由第三方开发出来的中间件，叫做第三方中间件；在项目中，按需下载并配置第三方中间件，从而提高项目的开发效率；
// 1.使用npm install 第三方中间件名，安装中间件
// 2.使用require导入中间件
// 3.调用app.use()注册并使用中间件

const express = require('express');

const app = express();

// 2.导入解析表单数据的中间件body-parser
const parser = require('body-parser')
app.use(parser.urlencoded({ extended: false }))

// 1.定义路由
app.post('/user', (req, res) => {
    console.log(req.body); //默认情况下，如果不配置解析表单数据的中间件，则req.body默认为undefined
    res.send('ok')
})

// 启动服务器
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})