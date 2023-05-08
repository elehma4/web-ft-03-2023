const express = require("express");
const router = express.Router();

router.get('/basic', (req, res)=>{

    res.render("basicForm")
})


router.post('/basic', (req, res) => { 

    // let firstName = req.body.fName
    // let lastName = req.body.lName

    let {fName: firstName, lName:lastName} = req.body


    res.send(`
        your first name is ${firstName} and your last name is
        ${lastName}
    `)

})

module.exports = router;