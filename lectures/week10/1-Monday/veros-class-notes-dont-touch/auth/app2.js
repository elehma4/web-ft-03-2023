const express = require('express');
let app = express();
const cookieSession = require('cookie-session');

let PORT = 3006;

app.use(cookieSession({

    name: 'session', 
    keys: ['lskjls;ajd;lakjdslkjfd'], 
    maxAge: 14 * 24 * 60 * 60 * 1000

}))

// req.session.fName

app.get('/', (req, res) => { 

    let password = 'Veronica'

    req.session.fName = "Veronica" 
    req.session.lName = "Lino"

    req.session.password = password

    res.send('home page')
 })


app.get('/aboutus', (req,res) => { 

    console.log(`my password is : ${req.session.password}`);
    res.send(`About us page: ${req.session.fName} ${req.session.lName}`)
 })


app.listen(PORT, () => {
    
    console.log(`listening on port ${PORT}`);
})