const express = require('express');
const app = express();
const PORT = 3001;



app.use(require('./routes/authentication'))

app.listen(PORT,() => { 
    
    console.log(`listening on port ${PORT}`);
 })