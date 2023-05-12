# SQL-CLI

## Setup
- clone the repository to you local computer 
    - `git clone` repo path
- navigate into the repository that you just cloned
- run `npm install` 

## install sequelize cli globally 
`npm install -g sequelize-cli` 

If you are getting permission denied then use the following command:
`sudo npm install -g sequelize-cli`

## install the sequelize package for your app.

```bash
npm install sequelize pg 
```

This will initialize sequelize and create config, migrations, seeders and models folders

## Initialize the sequelize project

sequelize init 

## Edit config/config.json. 

The dialect should be "postgres"


## creating a model

sequelize model:create --name user --attributes 'name:string email:string bio:text'

After creating the model always run sequelize `db:migrate` so model can be used to create a table.

## run migration to create/update schema of your tables

```bash
sequelize db:migrate
```

## creating a new migration

sequelize migration:create --name 'nameofthemigration'


