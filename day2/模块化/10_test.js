// 导入自定义格式化时间的模块
const Time = require('./09_格式化时间的传统做法')

// 调用方法，进行时间的格式化
const dt = new Date();
const newDT = Time.dateFormat(dt)
console.log(newDT);