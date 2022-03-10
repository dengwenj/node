# 查看所有表 
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS `student` (
	`name` VARCHAR(10),
	`age` INT 
);

# 删除表
-- DROP TABLE IF EXISTS `student`

# 查看表的结构
DESC student;

# 查看创建表的 SQL 语句 
SHOW CREATE TABLE student;
-- CREATE TABLE `student` (
--   `name` varchar(10) DEFAULT NULL,
--   `age` int DEFAULT NULL
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

# 完整的创建表
CREATE TABLE IF NOT EXISTS `user1` (
	id INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	age INT DEFAULT 0,
	phoneNum VARCHAR(20) UNIQUE  DEFAULT '',
	createTime TIMESTAMP
);

# 修改表
-- 修改表的名字 
ALTER TABLE user1 RENAME users1;
-- 添加一个新的列
ALTER TABLE users1 ADD updateTime TIMESTAMP;
-- 修改字段的名字
ALTER TABLE users1 CHANGE phoneNum telPhone VARCHAR(20);
-- 修改字段的类型
ALTER TABLE users1 MODIFY `name` VARCHAR(50);
-- 删除某个字段
ALTER TABLE users1 DROP `age`;

# 复制表
--  根据一个表结构创建另外一个表
CREATE TABLE `users2` LIKE `users1`;
-- 根据另外一个表中的所有内容，创建一个新的表
CREATE TABLE `users3` (SELECT * FROM `users1`)

