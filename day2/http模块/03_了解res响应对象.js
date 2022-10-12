const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    // res是响应对象，它包含了服务端相关的数据和属性
    // 调用res.end()方法，向客户端发送指定的内容，并结束这次请求的处理过程；
    // 向客户端发送中文内容的时候，会出现乱码问题，此时，需要手动设置内容的编码格式;需要设置响应头Content-Type的值为text/html;charset=utf-8
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    const str = `您请求的URL地址是${req.url}，请求的方法类型是是${req.method}`;
    res.end(str);
})

server.listen(80, () => {
    console.log('server running at http://127.0.0.1');
})