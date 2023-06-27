[Part 1](./Part1.md) | [Part 2](./Part2.md) | [Part 3](./Part3.md) | [Part 4](./Part4.md) | [Part 5](./Part5.md)
# Part2: Create a Database and Setup Sequelize

[Sequelize Lecture Presentation](https://dc-houston.herokuapp.com/p2/Postgres/Sequelize.html#1)

## Install

- `sequelize`
- `pg`
- `pg-hstore`

## Steps
- Create a new database called `jwt-auth-server`
- Verify that your database exists in **Beekeeper Studios**
- Initialize `sequelize` in your project (scaffold out a sequelize folder structure.)
    - you should now have a `migration`, `seeders`, `config`, `models` folder inside of your application. 
- Navigate to your `sequelize` `config` folder and open `config.json` 
- Configure your sequelize config file to use your new `jwt-auth-server` database
    - get rid of the test and the production sections in `config.json`
- Navigate back to the top of your directory (where your `node_modules` folder is located)
- Create a `init.bash` file
- Inside the file, generate a sequelize model for `users`
    - this model should have two attributes: `email` and `password`
    - both attributes should be a string
- Run your `init.bash` file to generate the models
- Go to your migrations folder and open your migration file to make sure it looks correct 
- Run the sequelize command to create the migration files from your root directory
    - go to your database in **Beekeeper Studios** and make sure you have a table called `users` in the `jwt-auth-server` database
 


