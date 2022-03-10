# 聚合函数的使用 

-- 求所有手机的价格的总和
SELECT SUM(price) as phonePrice FROM products;
-- 求华为手机价格的总和 
SELECT SUM(price) as huaweiPhonePrice FROM products WHERE brand = '华为';
-- 求华为手机的平均价格 
SELECT AVG(price) FROM products WHERE brand = '华为';
-- 求最高手机和最低手机的价格 
SELECT MAX(price) FROM products;
SELECT MIN(price) FROM products;

-- 求华为手机的个数 
SELECT COUNT(*) FROM products WHERE brand = '华为';
-- 全部 *
SELECT COUNT(*) FROM products WHERE brand = 'vivo';
-- url 不为空的
SELECT COUNT(url) FROM products WHERE brand = 'vivo';

SELECT COUNT(price) FROM products;
-- 重复的删除
SELECT COUNT(DISTINCT price) FROM products;