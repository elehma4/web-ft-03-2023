create database associations2023;

create table author(
    id serial primary key, -- id for author
    name varchar(25)
);

create table articles(
    id serial primary key,
    title varchar(150),
    author_id integer references author(id) --foreign key -> references author primary table
);

INSERT INTO author VALUES
(DEFAULT, 'Jose'),
(DEFAULT, 'Mike'),
(DEFAULT, 'Brandon'),
(DEFAULT, 'Andrena'),
(DEFAULT, 'Destiny'),
(DEFAULT, 'Rio'),
(DEFAULT, 'Q'),
(DEFAULT, 'Jason M.'),
(DEFAULT, 'Bodgan'),
(DEFAULT, 'Jennifer'),
(DEFAULT, 'Layne'),
(DEFAULT, 'Lorenzo'),
(DEFAULT, 'Cook'),
(DEFAULT, 'Victoria'),
(DEFAULT, 'Giselle'),
(DEFAULT, 'Carol'),
(DEFAULT, 'Jason H.'),
(DEFAULT, 'Jim'),
(DEFAULT, 'Anjunique'),
(DEFAULT, 'Jacob'),
(DEFAULT, 'Matt'),
(DEFAULT, 'Jake');

INSERT INTO articles VALUES 
(DEFAULT, 'JS Prototypes', 1), 
(DEFAULT, 'JS Promises', 3),
(DEFAULT, 'Express Routes', 10),
(DEFAULT, 'Styling with Bootstrap', 4),
(DEFAULT, 'API calls with Google Maps', 3),
(DEFAULT, 'Python RPG Game', 7),
(DEFAULT, 'Object Oriented Programming in JS', 7),
(DEFAULT, 'Nested For Loops', 7),
(DEFAULT, 'Preparing for Technical Interviews', 1),
(DEFAULT, 'Why I went to a coding camp', 1),
(DEFAULT, 'Coding in Romanian', 2),
(DEFAULT, 'Fizz Buzz - The Solution', 9),
(DEFAULT, 'Recursive Fibonacci with Memoization', 11),
(DEFAULT, 'Merge Sort', 15);

select * from 
author inner join articles
ON
author.id = articles.author_id;
-- join 2 tables on a common attribute


select author.name, articles.title from 
author inner join articles
ON
author.id = articles.author_id;


select name, title from 
author left outer join articles
ON
author.id = articles.author_id;


select name, title from 
author full outer join articles
ON
author.id = articles.author_id;



create table member (
    id serial primary key,
    name varchar
);

create table groups (
    id serial primary key,
    name varchar
);

create table membership (
    id serial primary key,
    group_id integer references groups(id),
    member_id integer references member(id)
);


INSERT INTO groups VALUES 
(DEFAULT, 'Atlanta JavaScript Meetup'),
(DEFAULT, 'PyLadies'),
(DEFAULT, 'Girl Develop It'),
(DEFAULT, 'Atlanta Web Design Group');

INSERT INTO member VALUES
(DEFAULT, 'Alfie'),
(DEFAULT, 'Michael'),
(DEFAULT, 'Tarek'),
(DEFAULT, 'Kevin'),
(DEFAULT, 'Glen'),
(DEFAULT, 'David'),
(DEFAULT, 'Ollie'),
(DEFAULT, 'Chris'),
(DEFAULT, 'Sabrina'),
(DEFAULT, 'Garrett'),
(DEFAULT, 'Jeroen'),
(DEFAULT, 'Deron');


insert into membership VALUES
(default, 1, 9);

INSERT INTO membership VALUES
(DEFAULT, 4, 4),
(DEFAULT, 1, 5),
(DEFAULT, 1, 6),
(DEFAULT, 1, 10),
(DEFAULT, 2, 1),
(DEFAULT, 2, 5),
(DEFAULT, 2, 6),
(DEFAULT, 2, 10),
(DEFAULT, 3, 8),
(DEFAULT, 3, 9),
(DEFAULT, 3, 10),
(DEFAULT, 3, 12),
(DEFAULT, 4, 1),
(DEFAULT, 4, 3),
(DEFAULT, 4, 7),
(DEFAULT, 4, 8);

-- mapping table:
select groups.name, member.name from groups
inner join membership
ON
groups.id = membership.group_id
inner join member
ON
member.id = membership.member_id;
-----------------------------------------------
select groups.name AS "group name", member.name as "member name" from groups
inner join membership
ON
groups.id = membership.group_id
inner join member
ON
member.id = membership.member_id
order by member.name;