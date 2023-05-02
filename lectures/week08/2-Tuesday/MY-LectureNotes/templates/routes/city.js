const express = require('express');

const router = express.Router() //sub routing

router.get('/city', (req, res)=>{

    res.send('City')
})

module.exports = router;