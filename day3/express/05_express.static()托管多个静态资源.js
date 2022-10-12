// 如果要托管多个静态资源目录，多次调用express.static()函数即可
// express.static()函数会根据目录的添加顺序查找所需的文件，先后顺序，如果找到则不会找第二个文件夹
const express = require('express');

const app = express();

// 将clock文件夹提供对外资源
// 先访问files
app.use(express.static('../files'))
app.use(express.static('../clock'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})
