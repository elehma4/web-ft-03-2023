const express = require('express');
const app = express();
const helmet = require('helmet');
const passport = require('passport');

require('./auth/passport-config')(passport)

const cookieSession = require('cookie-session');
const port = 3000;


app.use(express.static('public'));
app.use(helmet())
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({

    name: 'session', 
    keys: ['slkajldfjaslkdja'], 
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

app.use( passport.initialize() );
app.use( passport.session() );

//routes 
app.use(require('./routes/index.js'))
app.use(require('./routes/lectures.js'))
app.use(require('./routes/roster.js'))




app.use(require('./routes/login.js'))
app.use(require('./routes/registration.js'))

app.listen(port, () => {
    console.log(`listening on ort ${port}`);
})