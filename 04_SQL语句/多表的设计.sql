# 创建表 
CREATE TABLE IF NOT EXISTS brand (
	id INT PRIMARY KEY AUTO_INCREMENT,
	name VARCHAR(20) NOT NULL,
	website VARCHAR(100),
	phoneRank INT
);

INSERT INTO brand (name, website, phoneRank) VALUES ('华为', 'www.huawei.com', 1);
INSERT INTO brand (name, website, phoneRank) VALUES ('苹果', 'www.apple.com', 11);
INSERT INTO brand (name, website, phoneRank) VALUES ('小米', 'www.xiaomi.com', 21);
INSERT INTO brand (name, website, phoneRank) VALUES ('OPPO', 'www.oppo.com', 31);

-- 添加一个 brand_id 字段 
ALTER TABLE products ADD brand_id INT;

-- 修改 brand_id 字段为 外键 
ALTER TABLE products ADD FOREIGN KEY (brand_id) REFERENCES brand(id);

-- 更新字段的数据
UPDATE products SET brand_id = 1 WHERE brand = '华为';
UPDATE products SET brand_id = 2 WHERE brand = '苹果';
UPDATE products SET brand_id = 3 WHERE brand = '小米';
UPDATE products SET brand_id = 4 WHERE brand = 'oppo';