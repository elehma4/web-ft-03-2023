const express = require('express');
let app = express();
let PORT = 3000;

app.use(express.static('public'))

app.set('view engine', 'ejs')

//body parser 
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

//routes
app.use(require('./routes/index'))
app.use(require('./routes/admin'))


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})