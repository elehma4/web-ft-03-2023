
//connect to postgres through pg-promise 

const pgp = require('pg-promise')();

let connectionString ={

    host: 'localhost', 
    port: 5432, 
    database: 'menus2023', 
    user: 'postgres'
}

const db = pgp(connectionString)

module.exports = db