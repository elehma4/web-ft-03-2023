const express = require('express');

const app = express(); //helmel
const helmet = require('helmet');

let PORT = 3000; 

//request ====> midlleware ==> route

//middleware

/**
 
[

    1st cb, 
    2nd cb, 
    3cb,

    ['/', '/aboutus/], 

    error,


]
 */

// app.use(express.static('public'))

// app.use(helmet())

app.use((req, res, next)=>{
    
    console.log('first cb function');

    next()
})


app.use((req, res, next)=>{
    
    console.log('second cb function');

    next()
})


app.use((req, res, next)=>{
    
    console.log('third cb function');

    next()
})


const authLogin = (req, res, next) => {
    
    let passwordIsValid = false; 

    if(passwordIsValid){
        next()
    }
    else{

        next(new Error('there was an error'))
    }
}


app.all('/', (req, res, next) => { 
    
    console.log('log some information');
    next()
 })

app.get('/',  (req, res, next) => { 

    
    next(new Error('there was an error'))
})

app.get('/aboutus', authLogin, (req, res, next) => { 
    
    res.send('about us')

 })


app.use((err, req, res, next)=>{

    console.log('an error has occured');

    res.send('there was an error')
})

app.listen(PORT, ()=>{
    console.log(`listening on port : ${PORT}`);
})