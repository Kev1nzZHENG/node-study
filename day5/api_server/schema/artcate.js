const joi = require('joi');

const name = joi.string().required();
const alias = joi.string().alphanum().required();
const id = joi.number().integer().min(1).required();
// 新增文章
exports.add_cate_schema = {
    body: {
        name,
        alias
    }
}

// 根据id删除文章
exports.delete_cate_schema = {
    params: {
        id
    }
}

// 根据id获取文章
exports.get_cate_ById_schema = {
    params: {
        id
    }
}

// 根据id更新文章数据
exports.update_cate_schema = {
    body: {
        id,
        name,
        alias
    }
}