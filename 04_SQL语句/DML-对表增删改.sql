# 插入数据
INSERT INTO `users1` VALUES (001, '邓文杰', '020-111111', '2022-3-10', '2023-4-20');
INSERT INTO `users1` (name, telPhone, createTime, updateTime)
						VALUES ('ww', '02033034434', '2022-11-24', '2026-12-08');
INSERT INTO `users1` (name, telPhone)  VALUES ('ww1', '0203303422434');
								
# createTime 和 updateTime 可以自动设置值
ALTER TABLE users1 MODIFY createTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE users1 MODIFY updateTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

INSERT INTO `users1` (name, telPhone) VALUES ('ww2', '01203303422434');
INSERT INTO `users1` (name, telPhone) VALUES ('ww3', '012013303422434');

# 删除数据 
-- 删除所有数据 
DELETE FROM `users1`
-- 删除符合条件的数据 
DELETE FROM `users1` WHERE id = 4;

# 更新数据 
-- 更新所有的数据 
UPDATE `users1` SET `name` = 'hh', telPhone = '53312142';
-- 更新符合条件的数据 
UPDATE `users1` SET `name` = 'jj', telPhone = '1888888888' WHERE id = 6;
UPDATE `users1` SET `name` = 'jj1', telPhone = '1888882228888' WHERE id = 7;

# decimal(5, 3)，表示数值中共有5位数，其中整数占2位，小数占3位 22.453 精度为5，小数位为3

# 修改 brand_id 关联外键时的 action 
-- 获取到目前的外键的名称 
SHOW CREATE TABLE products;
-- CREATE TABLE `products` (
--   `id` int NOT NULL AUTO_INCREMENT,
--   `brand` varchar(20) DEFAULT NULL,
--   `title` varchar(100) NOT NULL,
--   `price` double NOT NULL,
--   `score` decimal(2,1) DEFAULT NULL,
--   `voteCnt` int DEFAULT NULL,
--   `url` varchar(100) DEFAULT NULL,
--   `pid` int DEFAULT NULL,
--   `brand_id` int DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `brand_id` (`brand_id`),
--   CONSTRAINT `products_ibfk_1` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci

-- 根据名称将外键删除掉 
ALTER TABLE products DROP FOREIGN KEY products_ibfk_1;

-- 重新设置 外键  id 修改了 外键 也要修改 关联的 ON UPDATE CASCADE
ALTER TABLE products ADD FOREIGN KEY (brand_id) REFERENCES brand(id) ON UPDATE CASCADE ON DELETE RESTRICT;


UPDATE brand SET id = 100 WHERE id = 1;
