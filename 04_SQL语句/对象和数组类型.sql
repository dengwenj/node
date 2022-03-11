# 将联合查询到的数据转成对象(一对多)
SELECT 
	products.id id, products.title title,
	JSON_OBJECT('id', brand.id, 'name', brand.`name`, 'website', brand.`website`) brand
FROM products LEFT JOIN brand ON products.brand_id = brand.id;

# 将查询到的多条数据，组织成对象，放入一个数组中（多对多）
SELECT 
	students.id id, students.name stuName, students.age stuAge,
	JSON_ARRAYAGG(JSON_OBJECT('id', courses.id, 'name', courses.`name`, 'price', courses.price)) courses
	FROM students
	LEFT JOIN students_select_courses ON students.id = students_select_courses.student_id
	LEFT JOIN courses ON students_select_courses.course_id = courses.id
	GROUP BY students.id;
	