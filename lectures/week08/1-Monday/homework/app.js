const express = require('express') // function block

const app = express() // invoked function returns an object

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/cats', (req, res) => {
    res.send('<h1>Meow</h1>')
})

app.get('/dogs', (req, res) => {
    res.send('<h1>Woof</h1>')
})

app.get('/cats_and_dogs', (req, res) => {
    res.send('<h1>Living together</h1>')
})

// ? after name makes it optional:
app.get('/greet/:name?', (req, res) => {
    let {name} = req.params
    if(!name){
        name = 'world'
    }
    res.send(`<h1>Hello, ${name}!</h1>`)
})

app.get('/year/:age', (req, res) => {
    let {age} = req.params
    let year = 2023 - Number(age)
    res.send(`<h1>You were born in ${year}</h1>`)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
})