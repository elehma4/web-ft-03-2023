let input = document.querySelector('#cityInput')
// console.log(input);
let button = document.querySelector('button')
let emoji = document.querySelector('#emoji')
button.addEventListener('click', ()=>{
let url = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=9361bd03ec7175e9eea92fdf7a717518`

fetch(url)
.then(results=>results.json())
.then(data =>{
    console.log(data);
    console.log(data.main.temp);
    // convert C
    let degC = data.main.temp - 273.15;
    // C to F
    let degF = Math.floor((degC * 1.8) + 32)
    console.log(degF);
    if(degF > 85){
        emoji.innerHTML = "&#x1F975;"
    } else if(degF > 60){
        emoji.innerHTML = "&#x1F60E;"
    } else if (degF > 40){
        emoji.innerHTML = "&#x1F642;"
    } else {
        emoji.innerHTML = "&#x1F976;"
    }
    let temp = document.querySelector('#temp')
    temp.innerHTML = degF.toString();
})
.catch(err=>{
    console.log(err);
})
})

