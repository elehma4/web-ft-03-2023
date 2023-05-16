const express = require('express')

const app = express(); 
const helmet = require('helmet');

let PORT = 3000;

// request ==> middleware ==> route (as send)

//middleware

// [
//     public,
//     helmet

//     ['/', '/about/']
// ]

// app.use(express.static('public'))

// app.use(helmet())

app.use((req, res, next) => {
    console.log('first cb function');

    next()
})
app.use((req, res, next) => {
    console.log('second cb function');

    next()
})
app.use((req, res, next) => {
    console.log('third cb function');

    next()
})


const authLogin = (req, res, next) => {
    let passwordIsValid = true;

    if (passwordIsValid){
        next()
    }
    else{
        next(new Error('there was an error'))
    }
}

app.all('/', (req, res, next) => {
    
    console.log(`log some info`);
    next()
})

app.get('/', (req, res, next) => {
    // try{
    //     console.log('arrived at home');
    // }
    // catch{
        next(new Error('there was an error'))
    // }
})

app.get('/aboutus', authLogin, (req, res, next) => {
    res.send('about us')
})

// If there's an error: (like password=false)
app.use((err, req, res, next) => {
    console.log(`an error has occured`);

    res.send('there was an error')
})

app.listen(PORT, () => {
    console.log(`listening on PORT: ${PORT}`);
})