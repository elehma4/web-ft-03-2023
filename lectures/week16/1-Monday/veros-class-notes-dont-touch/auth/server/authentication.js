// const express = require("express");
// const router = express.Router();

const jwt = require('jwt-simple');


let token = jwt.encode({sub: "testing", id: 1, iat: new Date().getTime()}, "slkdfjaljfalkdjfs")


console.log(token);

let decode = jwt.decode(token, "slkdfjaljfalkdjfs")

console.log(decode);
// module.exports = router;
