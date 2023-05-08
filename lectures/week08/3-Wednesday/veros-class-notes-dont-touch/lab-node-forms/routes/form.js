const express = require("express");
const router = express.Router();


router.get("/form", (req, res) => {
  res.render("form");
});

router.get("/login", (req, res) => {
  res.render("form");
});

router.post("/login", (req, res) => {

  res.send(`
  
  <h1>Successfully Submitted</h1>
  <p>username and password successfully submitted</p>
  
  <b>username:</b>  <br/>
  <b>password:</b> 
  `);
});

module.exports = router;