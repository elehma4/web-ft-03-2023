
const express = require('express');

let app = express(); 

let PORT = 3000;

app.use(express.static('public')) //hold all of our static resource in a folder called public

app.set('view engine', 'ejs')

//  MVC 
// model viewer controller 

app.use(require('./routes/index'))
app.use(require('./routes/faq'))
app.use(require('./routes/city'))
app.use(require('./routes/aboutus'))


app.listen(PORT, ()=>{
    console.log(`Listening on port: ${PORT}`);
})