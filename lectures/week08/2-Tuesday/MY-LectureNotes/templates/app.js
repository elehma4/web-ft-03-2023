const express = require('express') 

const app = express() // invoke

const PORT = 3000;

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