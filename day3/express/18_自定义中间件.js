// 需求：自定义解析表单数据的中间件

// 1.定义中间件
// 2.监听req的data事件，获取客户端发送到服务器的数据
// 3.监听req的end事件，当请求体数据接收完毕之后，会自动触发req的end事件
// 4.使用querystring模块解析请求体数据
// 5.将解析出来的数据对象挂载为req.body中
// 6.将自定义中间件封装为模块

const express = require('express')
const app = express()
// 导入querystring模块
const qs = require('querystring')

// 定义中间件
app.use((req, res, next) => {
    // 监听req的data事件，获取客户端发送到服务器的数据
    // 如果数据量大，无法一次性发送完毕，客户端会把数据切割后，分批发送到服务器
    // 定义一个str字符串，专门用来存储客户端发送过来请求体数据
    let str = '';
    // 监听req的data事件
    req.on('data', (chunk) => {
        str += chunk;
    })
    // 监听req的end事件，当请求体数据接收完毕之后，会自动触发req的end事件
    req.on('end', () => {
        // 将字符串格式的请求体数据，解析成对象格式  querystring的parse()
        const body = qs.parse(str)
        req.body = body;
        next();
    })

})

app.post('/user', (req, res) => {
    res.send(req.body)
})

app.listen(80, () => console.log('express serve running at http://127.0.0.1'))
