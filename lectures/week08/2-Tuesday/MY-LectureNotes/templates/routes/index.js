
const express = require('express');

const router = express.Router() //sub routing

router.get('/', (req, res)=>{

    res.send('Home Page')
})

module.exports = router;