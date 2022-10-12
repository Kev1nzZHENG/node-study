// 导入express模块
const express = require('express');
// 创建服务器实例
const app = express();
// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }))

// jsonp
app.get('/api/jsonp', (req, res) => {
    // 1.获取客户端发送过来的回调函数名
    const funcName = req.query.callback;
    // 2.得到要通过JSONP形式发送给客户端数据
    const data = { name: 'zs', age: 22 };
    // 拼接出一个函数调用的字符串
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    res.send(scriptStr)
})
// 配置跨域的中间件，使用cors中间件解决跨域问题
const cors = require('cors');
app.use(cors())
// 导入路由
const router = require('./22_apiRouter')
app.use('/api', router)
// 启动服务器
app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})