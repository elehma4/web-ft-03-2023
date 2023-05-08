-- load data each time we rebuild the database

-- what table we're adding new rows to
insert into users 
    (name, email)
-- specifies columns (and the order)

values  
    ('Alice', 'alice@email.com'),
    ('Bob', 'bob@email.com'),
    ('Cho', 'cho@email.com'),
    ('Daryl', 'daryl@email.com'),
    ('Emmy', 'emmy@email.com')
;


insert into posts
    (url, user_id)
values
    ('walking-the-cat.jpg', 2),
    ('day-at-the-beach.jpg', 3),
    ('new-puppy.jpg', 1),
    ('cat-in-a-box.jpg', 5),
    ('doggos.jpg', 5)
;