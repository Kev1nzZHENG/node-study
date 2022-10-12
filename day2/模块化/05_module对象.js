// 每个.js自定义模块中都有一个module对象，它里面存储了和当前模块有关的信息
console.log(module);

// 在一个自定义模块中，默认情况下，module.exports = {}；

// 向module.exports对象上挂载username属性
module.exports.username = 'zs';
// 向module.exports对象上挂载sayHello方法
module.exports.sayHello = function () {
    console.log('hello');
}
console.log('--', module);
// 让module.exports指向一个全新的对象
// 使用require方法导入模块时，导入的结果永远以module.exports指向的对象为准；
module.exports = {
    nickname: '小黑',
    sayHi() {
        console.log('hi');
    }
}