// 导入模块
const http = require('http');
const fs = require('fs');
const path = require('path');

// 创建http服务器实例
const server = http.createServer();

// 监听web服务器的request事件
server.on('request', (req, res) => {
    // 获取请求url地址
    let fpath;
    let url = req.url;
    if (url == '/') {
        fpath = path.join(__dirname, '../', '/clock/index.html');
    } else {
        fpath = path.join(__dirname, '../clock', url);
    }
    // 把请求url地址映射为具体文件的存放路径
    fs.readFile(fpath, 'utf-8', (err, result) => {
        // 读取失败，向客户端响应固定的错误信息
        if (err) {
            return res.end('404 Not Found!')
        }
        // 读取成功，将读取成功的内容，响应给客户端
        res.end(result)
    })
});
// 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})