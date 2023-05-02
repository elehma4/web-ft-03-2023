const express = require('express');

const router = express.Router() //sub routing

let cities = [
    "Atlanta",
    "Houston",
    "Seattle",
    "Miami"
];

let pictures = [
    "https://i.pinimg.com/originals/f4/01/0b/f4010b762ef1cd617f5e9a0a8ca0533a.jpg",
    "https://cdn.hpm.io/wp-content/uploads/2016/10/07162709/IMG_5206.jpg",
    "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/houston-skyline-from-above-tod-and-cynthia-grubbs.jpg",
    "https://www.swatchgroup.com/sites/default/files/watchmaking-wostep/schools/754-603-miami-skyline.jpg"
];


//localhost:3000/city
//localhost:3000/city/1
//localhost:3000/city/2
//localhost:3000/city/3
//localhost:3000/city/4
router.get('/city', (req, res)=>{

    res.render('city', {
        cities: cities,
        pictures: pictures
    })
})

router.get('/city/:id', (req, res) => {
    
    let {id} = req.params;

    res.render('city', {
        cities: [cities[id]],
        pictures: [pictures[id]]
    })

})

module.exports = router;