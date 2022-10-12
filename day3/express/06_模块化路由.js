// 为了方便对路由进行模块化的管理，Express不建议将路由直接挂载到app上，而是推荐将路由抽离为单独的模块；
// 将路由抽离为单独模块的步骤：
// 1：创建路由模块对应的js文件
// 2：调用express.Router()函数创建路由对象
// 3.向路由对象上挂载具体的路由
// 4.使用module.exports对外共享路由对象
// 5.使用app.use()函数注册路由模块

const express = require('express');

const app = express();

// 导入路由模块
const router = require('./07_router');
// 注册路由模块
app.use(router);
// 若要为路由模块添加前缀
// app.use('/前缀名',router);

app.listen(80, () => {
    console.log('express serve running at http://127.0.0.1');
})