// 在外界使用require导入一个自定义模块的时候，得到的成员、变量、方法就是那个模块中module.exports指向的那个对象
const m = require('./05_module对象')

console.log(m);