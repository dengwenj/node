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
-- 查询指定的字段 
SELECT title, price FROM products
-- 对字段结果起别名 
SELECT title as phoneTitle, price as phonePrice FROM products;

# where 查询条件
-- WHERE 的比较运算符 
SELECT * FROM products WHERE price >= 999;
SELECT * FROM products WHERE price < 999;
SELECT title FROM  products WHERE price < 999;
SELECT title FROM  products WHERE price = 999;

-- WHERE 的逻辑运算符
SELECT * FROM products WHERE price > 999 && price < 3999;
SELECT * FROM products WHERE price > 999 AND price < 3999;
SELECT * FROM products WHERE price > 5555 || brand = '华为';
-- BETWEEN 包含等于
SELECT * FROM products WHERE price BETWEEN 999 AND 2000;

-- 更新数据
UPDATE products SET url = NULL WHERE id > 33 && id < 39;

SELECT * FROM products WHERE url IS NULL;
SELECT * FROM products WHERE url IS NOT NULL;

-- WHERE 模糊查询
-- 查询带 p 的 title
SELECT * FROM products WHERE title LIKE '%P%';
-- 查询带 o 开头的 title
SELECT * FROM products WHERE title LIKE 'o%';
-- 查询带 i 的 title 必须第二字符是 i
SELECT * FROM products WHERE title LIKE '_i%';

-- IN 表示取多个值中的其中一个即可 
SELECT * FROM products WHERE brand = '华为' || brand = '小米';
SELECT * FROM products WHERE brand IN ('华为'， '小米');

-- 查询结果进行排序 
-- 价格从低到高，价格一样的话 就看评分从高到低
SELECT * FROM products WHERE brand = '华为' ORDER BY price ASC, score DESC;

-- 分页查询
-- LIMIT limit OFFSET OFFSET
-- LIMIT offset, limit 
SELECT * FROM products LIMIT 20 OFFSET 0;
SELECT * FROM products LIMIT 20 OFFSET 20;
SELECT * FROM products LIMIT 20 OFFSET 40;
SELECT * FROM products LIMIT 0, 10;
SELECT * FROM products LIMIT 10, 10;
SELECT * FROM products LIMIT 20, 10;







