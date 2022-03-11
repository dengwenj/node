# 获取到的是笛卡尔乘积 x*y 
SELECT * FROM products, brand;
# 获取到的是笛卡尔乘积进行筛选 
SELECT * FROM products, brand WHERE products.brand_id = brand.id;

# 左连接 ON 后面写的连接的方式
SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id;
SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id WHERE brand.id IS NULL;

# 右连接 
SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id;
SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id WHERE products.brand_id IS NULL;

# 内连接 
SELECT * FROM products JOIN brand ON products.brand_id = brand.id;

# 全连接 
(SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id)
UNION
(SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id);
(SELECT * FROM products LEFT JOIN brand ON products.brand_id = brand.id WHERE brand.id IS NULL)
UNION
(SELECT * FROM products RIGHT JOIN brand ON products.brand_id = brand.id WHERE products.brand_id IS NULL);