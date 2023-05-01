
const express = require('express') // function block

const app = express() // invoked function returns an object

const PORT = 3000;

// localhost:3000/faq /faq <- endpoint
// app.get(endpoint, cb)
app.get('/', (request, response) => {
    
    response.send('<h1>Hello World</h1>')
})

app.get('/faq', (request, response) => {
    
    response.send('<h1>FAQ</h1>')
})

app.get('/docs', (request, response) => {
    
    response.send('<h1>Documentation</h1>')
})

app.get('/cats?', (req, res) => {
    res.send('cats')
})

app.get('/bat(wo)?man', (req, res) => {
    res.send('batman')
})

//todo localhost:3000/name/fname/lname/city -> friendly URLs
// :'' = paramater safer against haxerz

app.get('/name/:fname/:lname/:city', (req, res) => {
    // let firstName = req.params.fname
    // let lastName = req.params.lname
    // let city = req.params.city

    const { fname:firstName, lname:lastName, city } = req.params; // destructuring is shorthand for above

    res.send(`<h1>${firstName} ${lastName} lives in ${city}</h1>`)
})

// localhost:3000/name?fname=Ethan&lname=Lehman&city=Naples

app.get('/name', (req, res) => {
    
    let firstName = req.query.fname
    let lastName = req.query.lname
    let city = req.query.city

    res.send(`<h1>${firstName} ${lastName} lives in ${city}</h1>`)
})

// thecat
// thecats
// thefancycats
// thefancycat
app.get('/the(fancy)?cats?', (req, res) => {
    
    res.send('fancy cats')
})

// data = {data: [{}, {}, {}, {}]}

let data = {data: [{
    id: 0,
    name: "Golden Retriever",
    
    img: "https://www.gannett-cdn.com/presto/2020/02/07/USAT/4a2add44-2e03-41a8-ba02-722c8044d711-VPC_GOLDEN_RETRIEVER_TENNIS_BALLS_DESK_THUMB.jpg?quality=10"
},
{
    id: 1,
    name: "Lab",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Labrador_on_Quantock_%282175262184%29.jpg"
},
{
    id: 2,
    name: "pug",
    img: "https://live.staticflickr.com/3095/3140892215_7fcba48323_b.jpg"
},
{
    id: 3,
    name: "poodle",
    img: "https://s3.amazonaws.com/ogden_images/www.morningjournalnews.com/images/2020/02/12231125/best-in-show-1-1100x733.jpg"
}
]}

//localhost:/dogs

app.get('/dogs', (req, res) => {
    let htmlFragment = ""

    let dogsArr = data.data

    dogsArr.forEach((obj)=>{
        htmlFragment += `
        
            <a href='/dogs/${obj.id}'>  <h1>${obj.name}</h1>  </a>

            <a href='/dogs/${obj.id}'>  <img src='${obj.img}' width='400px'>  </a>
        
        `
    })

    res.send(htmlFragment)
})

//localhost:3000/calculator/3/4/add
//localhost:3000/calculator/3/4/subtract
//localhost:3000/calculator/3/4/multiply
//localhost:3000/calculator/3/4/division

app.get('/calculator', (req, res) => {
    
    res.send('answer')
})

app.listen(PORT, ()=>{

    console.log(`Listening on port: ${PORT}`);
})

app.get('/dogs/:id', (req, res) => {
    
        let {id} = req.params
    
        let name = data.data[id].name;
        let img = data.data[id].img;
    
        res.send(`
        
            <h1>${name}</h1>
    
            <ul>
                <li> <a href='/dogs'>Home</a> </li>
                <li> <a href='/dogs/0'>Golden Retriever</a> </li>
                <li> <a href='/dogs/1'>Lab</a> </li>
                <li> <a href='/dogs/2'>Pug</a> </li>
                <li> <a href='/dogs/3'>Poodle</a> </li>
            </ul>
    
            <img src='${img}' width='400px'>
        `)
    
    })