
const express = require('express');
const router = express.Router();



router.get('/', (req, res) => {
    res.render('index')
})


router.post('/', (req, res) => { 

    let {firstName, isValid, password, isStudent, days} = req.body

    res.send(`
    
        ${firstName} 

        ${isValid}

        ${isStudent} 

        ${days}
    
    `)
})


    

module.exports = router;