
//install express 

const express = require('express');
const app = express()
let PORT = 3000;

//configure a public folder 
app.use(express.static('public'))  //static assets go here

//install ejs templates
app.set('view engine', 'ejs')

// setup a routes folder 
//index.js 
//speakers.js 

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))


//start your server

app.listen(PORT, ()=>{
    console.log(`listenikng on port ${PORT}`);
})

