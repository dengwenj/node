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

# GROUP BY 的使用   分组 
SELECT brand, AVG(price), COUNT(*), MAX(price), AVG(score) FROM products GROUP BY brand;

# HAVING 的使用 HAVING 用在 GROUP BY 筛选， WHERE 用在 数据表筛选 
SELECT brand, AVG(price) avgPrice FROM products GROUP BY brand HAVING  avgPrice > 2000;

# 求评分 score 大于 7.5 的手机的平均价格 
SELECT AVG(price) FROM products WHERE score > 7.5;
# score平均分大于 7.5的手机，按照品牌进行分类，求平均价格  且平均价格大于 4000 的
SELECT brand, AVG(price) avgPrice FROM products WHERE score > 7.5 GROUP BY brand HAVING avgPrice > 4000;
