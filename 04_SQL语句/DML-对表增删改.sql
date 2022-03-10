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


