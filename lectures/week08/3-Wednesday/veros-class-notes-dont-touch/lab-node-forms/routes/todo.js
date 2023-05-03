const express = require("express");
const router = express.Router();


router.get('/todos', (req,res)=>{

    res.render('todo')
})

module.exports = router;