# 获取到的是笛卡尔乘积 x*y 
SELECT * FROM products, brand;
# 获取到的是笛卡尔乘积进行筛选 
SELECT * FROM products, brand WHERE products.brand_id = brand.id;