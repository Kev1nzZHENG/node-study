//  express提供了一个非常好用的函数，express.static()通过这方法我们可以非常方便地创建一个静态资源服务器；
// 例如，通过如下代码就可以将public目录下的图片、CSS文件、JS文件对外开放,访问时无须通过前缀访问
// app.use(express.static('./public')) 

// 如果要托管多个静态资源目录，多次调用express.static()函数即可
// express.static()函数会根据目录的添加顺序查找所需的文件，先后顺序，如果找到则不会找第二个文件夹
const express = require('express');

const app = express();

// 将clock文件夹提供对外资源
app.use(express.static('../clock'))

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1');
})
