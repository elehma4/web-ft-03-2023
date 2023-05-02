const express = require('express');

const router = express.Router() //sub routing

router.get('/aboutus', (req, res)=>{

    res.render('aboutus')
})

module.exports = router;