const express = require('express');

const router = express.Router(); //sub routing 

router.get('/faq', (req, res) => { 

    // res.send('FAQ')

    res.render('faq')
})

module.exports = router;