# 创建 学生表
CREATE TABLE IF NOT EXISTS students(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`age` INT NOT NULL
);

# 创建 课程表 
CREATE TABLE IF NOT EXISTS courses(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`name` VARCHAR(20) NOT NULL,
	`price` DOUBLE
);

-# 插入数据 
INSERT INTO students (name, age) VALUES ('dwj', 22);
INSERT INTO students (`name`, age) VALUES ('ww', 17);
INSERT INTO students (`name`, age) VALUES ('hmm', 28);
INSERT INTO students (`name`, age) VALUES ('xiaoming', 19);
INSERT INTO students (`name`, age) VALUES ('xd', 17);

INSERT INTO courses (`name`, price) VALUES ('语文', 32);
INSERT INTO courses (`name`, price) VALUES ('数学', 58);
INSERT INTO courses (`name`, price) VALUES ('英语', 40);
INSERT INTO courses (`name`, price) VALUES ('历史', 33);
INSERT INTO courses (`name`, price) VALUES ('地理', 39);


# 创建关系表 
CREATE TABLE IF NOT EXISTS students_select_courses(
	`id` INT PRIMARY KEY AUTO_INCREMENT,
	`student_id` INT NOT NULL,
	`course_id` INT NOT NULL,
	FOREIGN KEY (student_id) REFERENCES students(id) ON UPDATE CASCADE,
	FOREIGN KEY (course_id) REFERENCES courses(id) ON UPDATE CASCADE
);

# 插入数据
INSERT INTO students_select_courses (student_id, course_id) VALUES (1, 2);
INSERT INTO students_select_courses (student_id, course_id) VALUES (2, 1);
INSERT INTO students_select_courses (student_id, course_id) VALUES (1, 4);
INSERT INTO students_select_courses (student_id, course_id) VALUES (3, 3);
