const express = require('express');

const router = express.Router() //sub routing

router.get('/faq', (req, res)=>{

    res.render('faq')
})

module.exports = router;