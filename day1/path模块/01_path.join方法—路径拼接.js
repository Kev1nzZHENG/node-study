// 导入path模块
const path = require('path');

// 注意：../会抵消前面的路径
const pathStr = path.join('/a', '/b/c', '../', '/d', 'e');
console.log(pathStr);  //\a\b\d\e
const pathStr2 = path.join('/a', '/b/c', '../../', '/d', 'e');
console.log(pathStr2);  //\a\d\e
console.log('-----------------');
// 今后凡是涉及到路径拼接的操作，都要使用path.join()方法进行处理，不要直接使用+字符串拼接；


// 导入fs模块
const fs = require('fs');

fs.readFile(path.join(__dirname, '../', '/fs模块/成绩-ok.txt'), 'utf-8', function (err, result) {
    if (err) {
        return console.log(err.message);
    }
    console.log(result);
})
