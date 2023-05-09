# Intro to SQL Homework

## 1. Create Database

Create a database, call it `restaurant`. In your terminal:

```bash
createdb restaurant

```

## 2. Create Database Table

Write a database schema: create a `restaurant.sql` file, in it write a *CREATE TABLE* statement to create a table called `restaurant`. This table will contain the following information, you will use the appropriate data types to represent the info. Please use an auto-incrementing primary key ID:

- name
- distance (in miles from HeadQuarters)
- stars
- category (type of food)
- favorite dish
- does takeout?
- last time you ate there


## 3. Run your file one of two ways

1. Copy the *"CREATE TABLE"* statement and paste it into the PostgreSQL shell
2. `psql restaurant -f restaurant.sql`

If the table has been created successfully, you should see *"CREATE TABLE"* being printed. You can also describe the table schema in the shell using the `\d` command:

```bash 
restaurant=# \d restaurant
```


## 4.  Insert Data
Write INSERT statements to enter data into the restaurant table. You can paste the statements into the *psql* shell.


## 5. Writing Queries

Write queries to get

- The names of the restaurants that you gave a 5 stars to
- The favorite dishes of all 5-star restaurants
- The the id of a restaurant by a specific restaurant name, say 'Moon Tower'
- restaurants in the category of 'BBQ'
- restaurants that do take out
- restaurants that do take out and is in the category of 'BBQ'
- restaurants within 2 miles
- restaurants you haven't ate at in the last week
- restaurants you haven't ate at in the last week and has 5 stars


## 6. Aggregation and Sorting Queries

1. list restaurants by the closest distance.
2. list the top 2 restaurants by distance.
3. list the top 2 restaurants by stars.
4. list the top 2 restaurants by stars where the distance is less than 2 miles.
5. count the number of restaurants in the db.
6. count the number of restaurants by category.
7. get the average stars per restaurant by category.
8. get the max stars of a restaurant by category.

