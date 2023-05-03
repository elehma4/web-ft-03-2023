const express = require("express");
const router = express.Router();

let number = 3


router.get('/counter', (req, res) => { 
    

    res.render('counter')
 })



router.get('/api', (req, res) => {
    res.json({
        status: "hello world"
    })
});

router.get('/api/counter', (req, res) => {
    //send the current value of the counter to the client

    res.json({value: number})
});

// adding 1 to the current value of the counter
router.post('/api/counter', (req, res) => {

    //increment the number

    number++;
    
    //send an object back to client
    //{status: 'incremented', value: }

    res.json({status: 'incremented', value: number})
    
});

// subtract 1 from the current value of the counter
router.put('/api/counter', (req, res) => {
    //decrement the number


    number--;
    //send an object back to client
    //{status: 'decremented', value: }

    res.json({status: 'decremented', value: number})
});

// reset: to variable number to zero
router.delete('/api/counter', (req, res) => {
    //reset the value of number to zero
    
    number = 0
    //send an object back to client
    //{status: 'reset', value: }

    res.json({status: 'reset', value: number})
});

module.exports = router;