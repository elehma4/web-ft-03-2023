const express = require('express');

const router = express.Router();
// get data from json file 

let dataFile = require('../data/data.json'); //node convert json to js object 

let pageSpeakers = dataFile.speakers;  //an array of objects [{}, {}, {}]

router.get('/speakers', (req, res) => { 


    let artwork = []; 

    pageSpeakers.forEach(speakerObj =>{

        artwork = artwork.concat(speakerObj.artwork)
        
    })


    // console.log('checkpoing 1', artwork);
    res.render('speakers', {
        artwork: artwork, 
        pageTitle : "Roux Meetups -- Speakers", 
        speakers: pageSpeakers // [{}, {}, {}]
    })
})

// localhost:3000/speakers/lorenzo_garcia
router.get('/speakers/:speakerID', (req, res) => { 

    let shortName = req.params.speakerID

    let speaker = []; //[{}]   

    let photos = []; 

    pageSpeakers.forEach(speakerObj =>{

        if(speakerObj.shortname == shortName){

            speaker.push(speakerObj)
            photos = speakerObj.artwork
        }
    })

    res.render('speakers', {
        artwork: photos, 
        speakers: speaker, 
        pageTitle: `Roux Meetups -- ${speaker[0].name}`
    })
})


module.exports = router;