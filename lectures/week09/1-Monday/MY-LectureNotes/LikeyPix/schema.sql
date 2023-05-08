-- Create table statement:
create table users (
    -- serial means posgres will start id values at 1, primary means id can't be used again
    -- The first column you define in a create table statement should be: id serial primary key
    id serial primary key,
    name varchar(50) not null,
    email varchar(50) not null
    -- will hold strings
    -- varchar is short for character varying
);

create table posts (
    id serial primary key,
    url text not null,
    user_id integer references users (id) on delete cascade
);

create table tags (
    id serial primary key,
    tag varchar(50) not null
);

create table tags_posts (
    tag_id integer references tags (id) on delete cascade,
    post_id integer references posts (id) on delete cascade
);

create table likes (
    user_id integer references users (id) on delete cascade,
    post_id integer references posts (id) on delete cascade
);

create table comments (
    id serial primary key,
    comment text not null,
    created_at timestamp default now(),
    post_id integer references posts (id) on delete cascade,
    user_id integer references users (id) on delete cascade
);