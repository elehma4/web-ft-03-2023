const express = require('express');
let app = express();
const cookieSession = require('cookie-session');

let PORT = 3000;

app.use(cookieSession({
    name: 'session',
    keys: ['g;asoidfna;osdawef'],
    maxAge: 14 * 24 * 60 * 60 * 1000
    // days, hours, mins, secs, millisecs
}))

app.get('/', (req, res) => {

    let password = "Ethan"

    req.session.fName = "Ethan"
    req.session.lName = "Lehman"

    req.session.password = password

    res.send('home page')
})

app.get('/aboutus', (req, res) => {

    
    console.log(`my password is: ${req.session.password}`);
    res.send(`About us page: ${req.session.fName} ${req.session.lName}`)
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})