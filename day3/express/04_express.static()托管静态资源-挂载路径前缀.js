// 如果希望在托管的静态资源访问路径之前，挂载路径前缀，则可以使用如下的方式
// app.use('/public',express.static('./public))

const express = require('express');

const app = express();

// 将clock文件夹提供对外资源
app.use('/clock', express.static('../clock'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})
