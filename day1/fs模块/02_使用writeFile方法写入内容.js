// 1.导入fs模块
const fs = require('fs');

// 2.调用fs.writeFile()方法，写入文件内容
// 如果文件存在，则直接覆盖该文件内容；文件不存在，则创建新文件      
//   参数1：表示文件的存放路径
//   参数2：表示要写入的内容
//   参数3：编码格式，可省略
//   参数4：回调函数
fs.writeFile(__dirname + '/1.txt', 'hello,NodeJs', function (err) {
    // 2.1如果文件写入成功，则err的值等于null
    // 2.2如果文件写入失败，则err的值等于一个错误对象
    if (err) {
        return console.log('文件写入失败！' + err.message);
    }
    console.log('文件写入成功！');
})
