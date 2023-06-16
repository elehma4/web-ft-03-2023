const cors = require('cors')
const express = require('express');
let app = express();

let port = 3005;

let data = [
    {
        id: 1, 
        name: 'Victoria'
    }, 

    {
        id: 2, 
        name: 'Hunter'
    },
    {
        id: 3, 
        name: 'Devin'
    },
    {
        id: 4, 
        name: 'Ryan'
    },
    {
        id: 5, 
        name: 'Sam'
    },
    {
        id: 6, 
        name: 'Christine'
    }
]

app.use(cors({
    origin: ['http://localhost:3000']
}));

app.get('/api', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log('listening on port ' + port);
})