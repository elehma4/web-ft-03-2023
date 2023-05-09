create table restuarant(
    id serial primary key,
    name varchar(50),
    distance_miles integer,
    stars integer,
    category varchar,
    fav_dish varchar,
    does_takeout boolean,
    most_recent_eat date
);

insert into restuarant values
(DEFAULT, 'Olive Garden', 5, 4.5, 'Italian', 'pasta', TRUE, '2021-10-04'),
(DEFAULT, 'Torchy', 8, 4.7, 'Tex-Mex', 'burrito', TRUE, '2021-10-04'),
(DEFAULT, 'Slurp', 4, 4.5, 'Ramen', 'brisket ramen', TRUE, '2022-07-04'),
(DEFAULT, 'The Union Kitchen', 1, 4, 'American', 'Beignets', TRUE, '2022-05-04'),
(DEFAULT, 'Crust Pizza Co', 1, 5, 'Pizza', 'BBQ Chicken Pizza', TRUE, '2022-01-04'),
(DEFAULT, 'Island Fin Poke Company', 1, 3, 'Poke', 'Vegetable Poke', TRUE, '2021-11-14'),
(DEFAULT, 'Ginger Thai', 4, 4, 'Asian', 'Pad THai', TRUE, '2022-04-14');

select * from restuarant where stars=5;
select fav_dish from restuarant;
select id from restuarant where name='Olive Garden';
select * from restuarant where category='Pizza';
select * from restuarant where does_takeout=TRUE;
select * from restuarant where does_takeout=TRUE AND category='American';
select * from restuarant where distance_miles <= 2;
select * from restuarant where most_recent_eat > '2022-04-01';
select * from restuarant where most_recent_eat > '2022-01-01' and stars='5';
--------------------------------------------------
select * from restuarant order by distance_miles;
select * from restuarant order by distance_miles limit 2;
select * from restuarant order by stars desc;
select * from restuarant where distance_miles < 2 order by stars desc;
select count(*) from restuarant;
SELECT count(*) from restuarant GROUP BY category;
select avg(stars), max(stars) from restuarant;