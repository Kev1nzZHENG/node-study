// 1.导入http模块
const http = require('http');
// 2.创建web服务器实例
const server = http.createServer();
// 3.为服务器实例绑定request事件，监听客户端的请求
// 使用服务器实例.on(事件名，cb回调)方法，为服务器绑定事情
server.on('request', (req, res) => {
    // 只要有客户端请求我们自己的服务器，就会触发request事件，从而调用这个事件处理函数
    console.log('Someone visit our web server');
})
// 4.启动服务器
// 调用server.listen(端口号，cb回调)方法，即可启动web服务器
// 80端口可以省略，其余端口不能省略
server.listen(8080, () => {
    console.log('server running at http://127.0.0.1:8080');
})