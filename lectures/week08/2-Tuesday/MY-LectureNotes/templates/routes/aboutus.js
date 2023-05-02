const express = require('express');

const router = express.Router() //sub routing

router.get('/aboutus', (req, res)=>{

    res.send('About Us')
})

module.exports = router;