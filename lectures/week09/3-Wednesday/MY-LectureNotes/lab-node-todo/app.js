
const express = require('express');
const app = express();

const port = 3000;
app.use(express.static('public'));

app.set('view engine', 'ejs');

//body parser 
app.use(express.urlencoded({extended: false})); 
app.use(express.json());

//routes
app.use(require('./routes/index'));

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})