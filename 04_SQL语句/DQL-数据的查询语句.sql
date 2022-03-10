# 创建表 
CREATE TABLE IF NOT EXISTS `products` (
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`brand` VARCHAR(20),
	title VARCHAR(100) NOT NULL,
	price DOUBLE NOT NULL,
	score DECIMAL(2,1),
	voteCnt INT,
	url VARCHAR(100),
	pid INT
);

# 1 基本查询 
-- 查询表中所有的字段以及所有的数据 
SELECT * FROM products;
