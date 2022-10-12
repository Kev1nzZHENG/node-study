//1.导入fs模块，来操作文件
const fs = require('fs');

// 2.调用fs.readFile()方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用的编码格式，一般默认指定utf-8，可省略
// 参数3：回调函数，拿到读取失败和成败的结果err  result
fs.readFile(__dirname + '/成绩.txt1', 'utf-8', function (err, result) {
    // 2.1 打印失败的结果
    // 如果读取成功，则err的值为null
    // 如果读取失败，则err的值为 错误对象，result的值为undefined
    if (err) {
        return console.log('文件读取失败！' + err.message);
    }
    console.log('文件读取成功，内容是' + result);
})