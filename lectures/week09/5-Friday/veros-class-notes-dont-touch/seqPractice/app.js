const express = require('express');
let app = express();
let PORT = 3000;

app.use(express.static('public'))

app.set('view engine', 'ejs')

//routes

app.use(require('./routes/index'))


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})