
const express = require('express');
const router = express.Router();

const db = require('../models/database'); //database instance



//shows our form
router.get('/newdish', async (req, res) => {

    try{

        let records = await db.query('SELECT * FROM categories'); //[{}, {}, {}]

        res.render('newDish', {
            categories: records
        })
    }
    catch{

        res.render('newDish', {
            categories: []
        })
    }

    
})

//

router.post('/newdish', async (req, res) => { 


    try{

        let {name, description, price, course, imageURL, category} = req.body;

        category = parseInt(category) //converst string to integer 

        price = parseFloat(price);  //converts from string to float 


        //store our information in our database 

        let result = await db.result(`INSERT INTO menuitem (name, category, fooddescription, price, course, imageurl) VALUES ($1, $2, $3, $4, $5, $6)`,
        [name, category, description, price, course, imageURL])

        res.redirect('/')
    }
    catch(error){
        console.log(error);
    }
 })




module.exports = router;