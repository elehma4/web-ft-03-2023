
const express = require('express');

const router = express.Router() //sub routing

router.get('/', (req, res)=>{

    // res.send('Home Page')
    // ejs knows it's in views folder -> only need name of file
    res.render('index', {  

        greeting: "Hello World",
        firstName: "Ethan",
        lastName: "Lehman",
        year: 2023,
        nums: [1,2,3,4,5],
        contacts: {cell: "222-222-2222", work: "333-333-3333"}

    }) 
})

module.exports = router;