# 查看所有表 
SHOW TABLES;

# 新建表
CREATE TABLE IF NOT EXISTS `student` (
	`name` VARCHAR(10),
	`age` INT 
);

# 删除表
DROP TABLE IF EXISTS `student`