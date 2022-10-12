// 文章分类路由模块
const express = require('express');
const router = express.Router();
// 验证规则
const expressJoi = require('@escook/express-joi');
const { add_cate_schema, delete_cate_schema, get_cate_ById_schema, update_cate_schema } = require('../schema/artcate')

// 函数处理模块
const artcate_handler = require('../router-handler/artcate')

// 获取文章分类的列表数据
router.get('/cates', artcate_handler.getArticleCates);
// 新增文章分类
router.post('/addcates', expressJoi(add_cate_schema), artcate_handler.addArticleCates);
// 根据id删除文章分类
router.get('/deletecate/:id', expressJoi(delete_cate_schema), artcate_handler.deleteCateById);
// 根据id获取文章分类数据
router.get('/cates/:id', expressJoi(get_cate_ById_schema), artcate_handler.getCateById);
// 根据id更新文章分类数据
router.post('/updatecate', expressJoi(update_cate_schema), artcate_handler.updateCateById);

module.exports = router