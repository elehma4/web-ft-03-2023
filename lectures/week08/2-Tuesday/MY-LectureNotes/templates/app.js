const express = require('express') 

const app = express() // invoke

const PORT = 3000;

app.use(express.static('public')) //hold all static resources in a folder called public

app.set('view engine', 'ejs')

// MVC
// Model Viewer Controller
// data -> models folder
// views -> deals with user (UX)
// controller -> logic

app.use(require('./routes/index'))
app.use(require('./routes/faq'))
app.use(require('./routes/city'))
app.use(require('./routes/aboutus'))

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})