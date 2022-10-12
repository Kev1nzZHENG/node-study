-- 通过*把users表中所有的数据查询出来
-- select * from users

-- 查询用户名和密码列的内容
-- 多个列之间，使用英文逗号进行分隔
-- select username,password from users

-- 向user表中，插入一条username为tony stark，password为098123的用户数据
-- insert into users (username,password) values ('tony stark','098123')

-- 把user表中id为4的用户密码，更新为888888
-- update users set password = '888888' where id = 4

-- 更新某一行中的若干列：把users表中id为2的用户密码和用户状态，分别更新为admin123和1
-- update users set password = 'admin123',status = 1 where id = 2

-- 从users表中，删除id为4的用户
-- delete from users where id = 4

-- 查询users表中所有status为0，并且id小于3的用户
-- select * from users where status = 0 and id <3

-- 查询users表中所有状态为1或username为zs的用户
-- select * from users where status = 1 or username = 'zs'

-- 对users表中的数据，按照status字段进行升序排序
-- select * from users order by status ASC

-- 对users表中的数据，按照id字段进行降序排序
-- select * from users order by id DESC

-- 对users表中的数据，先按照status字段进行降序排序，再按照username的字母顺序，进行升序排序
-- select * from users order by status DESC,username ASC

-- 查询users表中status为0的总数据条数
-- select * from users;
-- select count(*) from users where status = 0
-- 将列名称从count(*)修改为total
select count(*) as total from users where status = 0
