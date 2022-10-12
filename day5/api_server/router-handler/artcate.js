// 导入数据库操作模块
const db = require('../db/index')

// 获取文章分类
exports.getArticleCates = (req, res) => {
    let sql = 'select * from ev_article_cate where is_delete=0 order by id asc'
    db.query(sql, (err, results) => {
        if (err) return res.cc(err);
        console.log(results);
        res.send({
            status: 0,
            message: '获取文章分类数据成功',
            data: results
        })
    })
}
// 新增文章分类
exports.addArticleCates = (req, res) => {
    let sql = 'select * from ev_article_cate where name=? or alias=?'
    db.query(sql, [req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err);

        // length等于2：分类名称和分类别名同时被占用
        if (results.length === 2) return res.cc('分类名称与别名同时被占用，就更换后重试');
        // length等于1的三种情况
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
            return res.cc('分类名称与别名同时被占用，就更换后重试');
        }
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试')

        // todo：分类名称和分类别名都可用，执行添加操作
        let addSql = 'insert into ev_article_cate set ?'
        db.query(addSql, req.body, (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc('新增文章分类失败');
            // 成功
            res.cc('新增文章分类成功', 0)
        })
    })
}

// 根据id删除文章分类
exports.deleteCateById = (req, res) => {
    let sql = 'update ev_article_cate set is_delete = 1 where id=?'
    db.query(sql, req.params.id, (err, results) => {
        // 失败
        if (err) return res.cc(err);
        if (results.affectedRows !== 1) return res.cc('删除文章分类失败')
        // 成功
        res.cc('删除文章分类成功', 0)
    })
}

// 根据id获取文章分类
exports.getCateById = (req, res) => {
    let sql = 'select id,name,alias from ev_article_cate where id = ? and is_delete = 0'
    db.query(sql, req.params.id, (err, results) => {
        if (err) return res.cc(err);
        if (results.length !== 1) return res.cc('获取文章数据失败');
        // 成功
        res.send({
            status: 0,
            message: '获取文章分类数据成功',
            data: results[0]
        })

    })
}
// 根据id更新文章分类
exports.updateCateById = (req, res) => {
    // 定义查询 分类名称与分类别名是否被占用
    let sql = 'select * from ev_article_cate where id <> ? and (name=? or alias=?)';
    db.query(sql, [req.body.id, req.body.name, req.body.alias], (err, results) => {
        if (err) return res.cc(err);
        // length等于2：分类名称和分类别名同时被占用
        if (results.length === 2) return res.cc('分类名称与别名同时被占用，就更换后重试');
        // length等于1的三种情况
        if (results.length === 1 && results[0].name === req.body.name && results[0].alias === req.body.alias) {
            return res.cc('分类名称与别名同时被占用，就更换后重试');
        }
        if (results.length === 1 && results[0].name === req.body.name) return res.cc('分类名称被占用，请更换后重试')
        if (results.length === 1 && results[0].alias === req.body.alias) return res.cc('分类别名被占用，请更换后重试')

        // 更新文章分类
        let updateSql = 'update ev_article_cate set ? where id =?'
        db.query(updateSql, [req.body, req.body.id], (err, results) => {
            if (err) return res.cc(err);
            if (results.affectedRows !== 1) return res.cc('更新文章分类失败')
            // 成功
            res.cc('更新分类信息成功', 0)
        })

    })

}