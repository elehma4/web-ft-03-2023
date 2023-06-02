const express = require('express');
const router = express.Router();
const auth = require('../auth');  //auth/index.js

router.get('/roster', auth, (req,res) => {

   
    console.log(req.user.dataValues.email);
    res.render('roster')

    JSON.stringify()
})



module.exports = router;