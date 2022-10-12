// node提供了exports对象，默认情况下，exports和module.exports指向同一个对象；
// 最终共享的结果，还是以module.exports指向的对象为准；

console.log(exports === module.exports); //true

exports.username = 'zs';
exports.age = 21;
exports.sayHello = function () {
    console.log('hello');
};
