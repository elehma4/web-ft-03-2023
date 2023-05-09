-- create table student(
--   name varchar,
--   website varchar,
--   github_username varchar,
--   points integer,
--   gender char(1),
--   cohort_start_date date,
--   graduated boolean
--  );

-- insert into student values (
-- 	'Ethan', 'e@dc.com', 'eth1elohim', 10, 'M', '2023-03-13', FALSE 
-- );

-- insert into student values 
-- ('Kelly', 'k@dc.com', 'kelly', 10, 'F', '2023-03-13', FALSE ),
-- ('Katie', 'kt@dc.com', 'katie', 10, 'F', '2023-03-13', FALSE ),
-- ('Jordan', 'j@dc.com', 'jordan', 10, 'M', '2023-03-13', FALSE ),
-- ('Hunter', 'h@dc.com', 'hunter', 10, 'M', '2023-03-13', FALSE );

-- update student set points = 8;

-- update student set website='kelly@dc.com' where name='Kelly';

-- delete from student;

-- delete from student where name='Ethan';

-- delete from student where gender='F';

-- select * from student where name='Jordan';

-- create table blogs (
--   id serial primary key,
--   title varchar(150),
--   start_date date, 
--   isVisible boolean default false
-- );
 
-- insert into blogs values 
-- (default, 'js is awesome', '2023-05-08', TRUE),
-- (DEFAULT, 'learning node', '2022-08-22', TRUE),
-- (DEFAULT, 'installing Postgres on Macs', '2022-05-22', TRUE),
-- (DEFAULT, 'installin Postgre on PCs', '2022-03-22', TRUE),
-- (DEFAULT, 'Goolge APIs', '2022-09-22', TRUE);
 
-- delete from blogs where id=5;

-- insert into blogs values (default, 'google APIs', '2023-05-04', TRUE);

-- * = all rows

-- select * from blogs;
-- select title from blogs;
-- select * from blogs where start_date > '2023-01-01';
-- select * from blogs where title ilike '%install%';

-- alter table blogs
-- add body varchar NULL;

-- alter table blogs
-- drop column body;

-- alter table blogs
-- alter column title type varchar(30);

-- counts total rows:
-- select count(*) from blogs;

-- select sum(points), avg(points), min(points), max(points) from student;

-- select * from student order by name, gender;
-- select * from student order by name limit 3;
-- select * from student order by name limit 3 offset 3;

