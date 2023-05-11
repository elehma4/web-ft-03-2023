const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs')

//body parser 
app.use(express.urlencoded({extended: false}));  //req.body.
app.use(express.json());

app.use(require('./routes/index'))
app.use(require('./routes/newDish'))
app.use(require('./routes/hack'))

app.listen(port, ()=>{
    console.log(`listening on port ${port}`);
})