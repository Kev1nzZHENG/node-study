// 使用require()方法加载其他模块时，会执行被加载模块中的代码

/* // 加载内置的fs模块
const fs = require('fs'); */

// 加载用户的自定义模块
// 使用require加载用户自定义模块可以省略.js的后缀名
const custom = require('./01_自定义模块custom.js');
console.log(custom);

/* // 加载第三方模块
const moment = require('moment'); */