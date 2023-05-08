
const express = require('express');
const router = express.Router();

const fs = require('fs'); //read and write a to a file on file system 

const feedback = require('../data/feedback.json');  //node converts json to js object 

router.use(express.json())
router.use(express.urlencoded({extended: true}))

// display form
router.get('/feedback', (req, res) => { 

    res.render('feedback')
})

// /api = get all messages form feedback.json 

router.get('/api', (req, res) => { 

    res.json(feedback)
 })

/// submit a new message 

router.post('/api', (req, res) => { 


    // get our data form the header 
    // get form data 

    let {name, title, message} = req.body //{name. titl}


    //use fs module to write a new message object to that file 

    feedback.unshift(req.body)

    fs.writeFile('data/feedback.json', JSON.stringify(feedback), 'utf8', err=>{

        if(err){
            res.status(423).send(err)
        }
    })


    // sned back all messages the messages with the new message attached

    res.json(feedback)
 })


module.exports = router; 