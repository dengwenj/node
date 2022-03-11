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

# 查询所有有选课的学生，选择了哪些课程 
SELECT students.id id, students.name stuName, students.age stuAge, courses.id csId, courses.`name` csName, courses.price csPrice
	FROM students
	LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
	LEFT JOIN courses ON students_select_courses.course_id = courses.id
	WHERE students_select_courses.student_id IS NOT NULL;

# 查询所有学生的选课情况 
SELECT students.id id, students.name stuName, students.age stuAge, courses.id csId, courses.`name` csName, courses.price csPrice
	FROM students
	LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
	LEFT JOIN courses ON students_select_courses.course_id = courses.id;


# 查询哪些学生是没有选课 
SELECT students.id id, students.name stuName, students.age stuAge, courses.id csId, courses.`name` csName, courses.price csPrice
	FROM students
	LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
	LEFT JOIN courses ON students_select_courses.course_id = courses.id
	WHERE students_select_courses.student_id IS NULL;
	
# 查询哪些课程是没有被选择的 
-- SELECT *
-- 	FROM students
-- 	RIGHT JOIN students_select_courses ON students_select_courses.student_id = students.id
-- 	RIGHT JOIN courses ON courses.id = students_select_courses.course_id
SELECT * 
	FROM courses
	LEFT JOIN students_select_courses ON courses.id = students_select_courses.course_id
	LEFT JOIN students ON students_select_courses.student_id = students.id
	WHERE students.id IS NULL;


# 查看某一个写生选择了哪些课程 （dwj）
SELECT students.id id, students.name stuName, students.age stuAge, courses.id csId, courses.`name` csName, courses.price csPrice
	FROM students
	LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
	LEFT JOIN courses ON students_select_courses.course_id = courses.id
	WHERE students.id = 1;
