
const express = require('express');
const router = express.Router();
const auth = require('../auth');  //auth/index.js

router.get('/lectures', auth, (req,res) => {

//    console.log(req.session.passport.user);

    console.log(req.user);
    res.render('lectures')
})


module.exports = router;
