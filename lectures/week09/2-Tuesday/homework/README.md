# SQL Relationships, Distincts & Subselects Homework

## 1.  Restaurant DB V2

### Table
For version 2 of the restaurant database, you will have the following tables:

- restaurant
- reviewer
- review

A reviewer could write any number of reviews for any number of restaurants.

The `restaurant` table has these columns:

- id
- name
- address
- category

The `reviewer` table would have these columns:

- id
- name
- email
- karma - between 0 to 7 (please use a constraint)

The `review` table would have these columns:

- id
- reviewer id (please use a foreign key constraint)
- stars - 1 to 5 stars (please use a constraint)
- title
- review - the text of the review
- restaurant id (please use a foreign key constraint)

## 2. Create Schema

Create these table schemas by writing CREATE statements in a `.sql` file and loading them in using something like `psql restaurant -f restaurant.sql` (this command assumes your database is called `restaurant` and your file is `restaurant.sql`).

Windows:
```bash
psql -U postgres restaurant
```

```bash
\i restaurant.sql
```

## 3. Enter Data

Enter some data for restaurants by either writing insert statements or through the Postico UI.


## 4. Answer These Questions With a Query


- List all the reviews for a given restaurant given a specific restaurant ID.
- List all the reviews for a given restaurant, given a specific restaurant name.
- List all the reviews for a given reviewer, given a specific author name.
- List all the reviews along with the restaurant they were written for. In the query result, select the restaurant name and the review text.
- Get the average stars by restaurant. The result should have the restaurant name and its average star rating.
- Get the number of reviews written for each restaurant. The result should have the restaurant name and its review count.
- List all the reviews along with the restaurant, and the reviewer's name. The result should have the restaurant name, the review text, and the reviewer name. Hint: you will need to do a three-way join - i.e. joining all three tables together.
- Get the average stars given by each reviewer. (reviewer name, average star rating)
- Get the lowest star rating given by each reviewer. (reviewer name, lowest star rating)
- Get the number of restaurants in each category. (category name, restaurant count)
- Get number of 5 star reviews given by restaurant. (restaurant name, 5-star count)
- Get the average star rating for a food category. (category name, average star rating)


## 5. Projects DB Exercise

### Setup

Download the [projects.sql](https://dc-web2.onrender.com/Postgres/projects.sql) file and move the file into your project folder.

Create a new database called projects_db or whatever you want. Restore the database from the projects.sql file via the command:

Mac:
`psql projects_db -f projects.sql`

Windows:
```bash
psql -U postgres projects_db
```

```bash
\i projects.sql
```
<h2>Problems</h2>


Write queries to find the answers below:

- What are all projects that use JavaScript?
- What are all technologies used by the Personal Website?
- Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project?
- Based on the previous query, get the count of the number of techs used by each project.
- Perform a left outer join from the project table to the project_users_tech table - which projects has no associated tech?
- Based on the previous query, get the count of the number of projects that use each tech.
- List all projects along with each technology used by it. You will need to do a three-way join.
- List all the distinct techs that are used by at least one project.
- List all the distinct techs that are not used by any projects.
- List all the distinct projects that use at least one tech.
- List all the distinct projects that use no tech.
- Order the projects by how many tech it uses.
- Order the tech by how many projects use it.
- What is the average number of techs used by a project?


