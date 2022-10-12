const fs = require('fs');

fs.readFile(__dirname + '/成绩.txt', 'utf-8', function (err, result) {
    if (err) {
        return console.log('读取文件失败' + err.msg);
    }
    // console.log('读取文件成功' + result);
    // 1.先将成绩的数据，按照空格进行分隔
    const arr = result.split(' ');
    let newArr = [];
    // 2.循环遍历分割后的数据，对每一项数据，进行字符串的替换操作
    arr.forEach(item => {
        newArr.push(item.replace('=', ':'));
    })
    // 3.把新的数组转换为字符串
    const str = newArr.join('\r\n');
    // 4.调用fs.writeFile方法，把处理完毕的成绩，写入到成绩-ok.txt中
    fs.writeFile(__dirname + '/成绩-ok.txt', str, 'utf-8', function (err) {
        if (err) {
            return console.log('文件写入失败' + err.message);
        }
        console.log('文件写入成功！');
    })
})