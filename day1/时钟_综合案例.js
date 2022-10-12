// 导入fs模块
const fs = require('fs');
const { resolve } = require('path');
// 导入path模块
const path = require('path');

// 匹配<style></style>标签的正则
// \s表示空白字符     \S表示非空白字符   *表示匹配任意次
const regStyle = /<style>[\s\S]*<\/style>/

// 匹配<script></script>标签的正则
// \s表示空白字符     \S表示非空白字符   *表示匹配任意次
const regScript = /<script>[\s\S]*<\/script>/

// 调用fs.readFile()方法读取文件
fs.readFile(path.join(__dirname, '/index.html'), 'utf-8', function (err, result) {
    // 读取HTML文件失败
    if (err) {
        return console.log('读取HTML文件失败！' + err.message);
    }
    // 读取文件成功后，调用对应的 三个方法，分别拆接出css,js,html文件
    resolveCss(result);
    resolveJs(result);
    resolveHtml(result);
})

// 定义处理css样式的方法
function resolveCss(htmlStr) {

    // 使用正则提取需要的内容
    const r1 = regStyle.exec(htmlStr);  //打印出匹配表达式的对应的内容，数组形容接受
    // console.log(r1);
    // 将提出出来的样式字符串，进行字符串的replace替换操作
    // 处理完的css文件内容
    const newCss = r1[0].replace('<style>', '').replace('</style>', '');
    // console.log(newCss);    

    // 调用fs.writeFile()方法写入文件
    fs.writeFile(path.join(__dirname, '/clock/index.css'), newCss, function (err) {
        if (err) {
            return console.log('写入CSS样式失败！' + err.message);
        }
        console.log('写入样式文件成功！');
    })
}

// 定义处理js的方法
function resolveJs(htmlStr) {

    // 使用正则提取需要的内容
    const r2 = regScript.exec(htmlStr);  //打印出匹配表达式的对应的内容，数组形容接受
    // console.log(r1);
    // 将提出出来的样式字符串，进行字符串的replace替换操作
    // 处理完的css文件内容
    const newJs = r2[0].replace('<script>', '').replace('</script>', '');
    // console.log(newCss);    

    // 调用fs.writeFile()方法写入文件
    fs.writeFile(path.join(__dirname, '/clock/index.js'), newJs, function (err) {
        if (err) {
            return console.log('写入JS样式失败！' + err.message);
        }
        console.log('写入JS文件成功！');
    })
}

// 定义处理html文件
function resolveHtml(htmlStr) {
    // 使用字符串的replace方法，把内嵌的<style>和<script>标签，替换为外联的<link>和<script>标签
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css">').replace(regScript, '<script src="./index.js"></script>')

    // 替换成功后的html代码，写入到index.html文件中
    // 调用fs.writeFile()方法写入文件
    fs.writeFile(path.join(__dirname, '/clock/index.html'), newHtml, function (err) {
        if (err) {
            return console.log('写入HTML文件失败！' + err.message);
        }
        console.log('写入HTML文件成功！');
    })
}