// 导入express模块
const express = require('express')

const router = express.Router();



// 在这里挂载对应的路由
router.get('/get', (req, res) => {
    // 通过req.query获取客户端通过查询字符串，发送到服务器的数据
    const query = req.query;
    //  调用res.send()方法，向客户端响应处理结果
    res.send({
        status: 0,  //状态 0表示成功，1表示失败
        msg: 'GET请求成功', //状态描述
        data: query  //响应给客户端的数据
    })
})
router.post('/post',(req,res)=>{
    // 获取客户端通过请求体，发送到服务器的URL—encodeed数据
    const body = req.body;
    // 调用res.send()方法，把数据响应给客户端
    res.send({
        status: 0,  //状态 0表示成功，1表示失败
        msg: 'POST请求成功', //状态描述
        data: body  //响应给客户端的数据
    })
})



module.exports = router;