
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs'); //hash and salt our password
const db = require('../models');  //models/index.js


// router.use(express.urlencoded({extended: false}))
// router.use(express.json())
//req.body
// collect username, password from reg. form 
// encrypt password 
// insert record into db 
// redirecit our user to login

router.get('/registration', (req,res) => {

    res.render('registration', {
        error: ""
    })
})


router.post('/registration', async (req, res) => { 
    //collect data from form and store it in our db 

    try{

        //scrape info from header 

        let {username, email, password} = req.body; 

        password = bcrypt.hashSync(password, 8) //a salted hash

        // create a new record in our db 

        let insertRecord = await db.users.create({

            username, 
            email, 
            password, 
            roleID: 1
        })

        res.redirect('/login')

    }
    catch(err){

        res.render('registration', {
            error: "error: can't register this username"
        })
    }

 })


module.exports = router;
