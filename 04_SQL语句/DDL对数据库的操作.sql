# 查询数据库 
SHOW DATABASES;

# 选择某一个数据库
USE ww;

# 查看当前正在使用的数据库
SELECT DATABASE();

# 创建新的数据库
CREATE DATABASE IF NOT EXISTS ww;
CREATE DATABASE IF NOT EXISTS jj;

# 删除数据库
DROP DATABASE IF EXISTS jj;

# 修改数据库的编码
ALTER DATABASE ww CHARACTER SET = utf8 COLLATE = utf8_unicode_ci;
