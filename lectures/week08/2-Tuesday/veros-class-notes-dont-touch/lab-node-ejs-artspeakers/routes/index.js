const express = require('express');

const router = express.Router();

//importour data from data.json  

const dataFile = require('../data/data.json'); //node converts json to js object when imported in


// dataFile = {speakers: [{}, {}, {}, {}]}

// arr.concat    [1, 2, 3]   [4, 5, 6]   [1, 2,3, 4, 5, 6]   
let pageSpeakers = dataFile.speakers;  //an array of objects

router.get('/', (req, res) => { 
    //this array will hold all of the artwork
    let artworkArr = [] 

    pageSpeakers.forEach(speakerObj =>{

        artworkArr = artworkArr.concat(speakerObj.artwork)
    })

    res.render('index', {
        artwork: artworkArr
    })
 })


module.exports = router;