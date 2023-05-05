
//install express 

const express = require('express');
const app = express()
const socket = require('socket.io');

let PORT = 3000;

//configure a public folder 
app.use(express.static('public'))  //static assets go here

//install ejs templates
app.set('view engine', 'ejs')

// setup a routes folder 
//index.js 
//speakers.js 

app.use(require('./routes/index'))
app.use(require('./routes/speakers'))
app.use(require('./routes/feedback'))
app.use(require('./routes/chat'))


//start your server

const server = app.listen(PORT, ()=>{
    console.log(`listenikng on port ${PORT}`);
})


let io = socket(server) 

io.on('connection', (socket)=>{

    console.log('connecteed');

    socket.emit('chatMessage', {msg: "Hello from our backend server"})

    socket.on('postMessage', (data)=>{  //what our client sends to the server 

        io.emit('updateMessages', data)  //broadcasting out to all listening clients
    })

    // socket.on('disconnect', (user)=>{

    //     io.emit('User has left the room')
    // })

})

