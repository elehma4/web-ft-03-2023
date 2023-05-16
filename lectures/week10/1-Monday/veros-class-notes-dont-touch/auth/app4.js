const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const PORT = 3000;


app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use(cookieSession({

    name: 'session', 
    keys: ['alsdjflakjdlweoalkdj'], 
    maxAge: 14 * 24 * 60 * 60 * 1000
}))

let users = [
    {username: 'Matt', password: '1234'}, 
    {username: 'Jake', password: '4567'}, 
    {username: 'Brandon', password: '8901'}, 
    {username: 'Jose', password: '1122'} 
]

const authLogin = (req,res, next) => {

    //check the session username 
    if(req.session.username){
        next()
    }
    else{
        res.redirect('/login')
    }
    
}

app.get('/', (req, res) => { 

    // all of our visitors should be able to see the homepage
    res.send('home page')
})

app.all('/admin/*', authLogin, (req, res, next) => { 
    next()
 })

app.get('/admin/dashboard',  (req,res) => { 

    res.send('admin page')
})

app.get('/admin/users',  (req,res) => { 

    res.send('admin users')
})


app.get('/login', (req,res) => { 

    res.render('login')
})


app.post('/login', (req, res) => { 

    //req.body.userID  req.body.password

    let {userID, password} = req.body 

    let user = users.find(userRecord =>{

        return userRecord.username === userID && userRecord.password === password
    })

    if(user != null){
        //if user auth information was found
        req.session.username = userID;

        res.redirect('/')
    }
    else{
        res.redirect('/login')
    }

 })


app.get('/logout', (req, res) => { 

    req.session.username = null; 
    // console.log('logut');

    res.redirect('/')
 })

app.listen(PORT, () => { 

    console.log(`listening on port ${PORT}`);
 })