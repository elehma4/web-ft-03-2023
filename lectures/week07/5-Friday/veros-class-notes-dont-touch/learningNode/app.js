// build a server 

const http = require('http')
const cow = require('cowsay');

let students = [
    {
        fName: "Victoria",
        city: "Atlanta"
    },
    {
        fName: "Andrew",
        city: "Atlanta"
    },
    {
        fName: "Stephen",
        city: "Houston"
    },
    {
        fName: "James",
        city: "Austin"
    },
    {
        fName: "Matt",
        city: "Seattle"
    },

]

// setup server 

const server = http.createServer((request, response) => { 

    response.setHeader('Content-Type', "text/html") //letting the client know we're sending back html 
    
    switch(request.url){  //      /      /about    /faq   /api  
        
        case '/':  // yahoo.com

            response.end(`<h1>Hello World</h1>`)
            break;

        case '/aboutus':

            response.end('<h1>About us<h1>')
            break;

        case '/api':

            response.setHeader('Content-Type', 'application/json')  //sending back json data 

            let studentsJSON = JSON.stringify(students)

            response.end(studentsJSON)


        default: 
            break;
            
    }
 })



console.log(cow.say({

    text: "I'm a moooooodule and I'm learning node", 
    e: "oO", 
    T: "U"
}))

// turn on our server 

server.listen(3000,  ()=>{

    console.log(`Server is running on port 3000`);  //    localhost:3000
})