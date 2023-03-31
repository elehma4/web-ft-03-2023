let data = require('./data');

/**
 * Print the following for each state and territory
 * 1. State Name 
 * 2. State Population 
 * 3. Number of Cases 
 * 4. Number of Deaths
 */
//todo 1-4 & 1-2 (below):
let totalCases = 0
let totalDeaths = 0;

for(let i = 0; i < data.length; i++){
    console.log(`State: ${data[i].state}`)
    console.log(`Population: ${data[i].population}`)
    console.log(`Cases: ${data[i].cases}`)
    console.log(`Deaths: ${data[i].deaths}`)
    totalCases += data[i].cases
    console.log(`Total Cases: ${totalCases}`);
    totalDeaths += data[i].deaths
    console.log(`Total Deaths: ${totalDeaths}`);
    console.log('-------------------------------');
}


// * Find the following 
// * 1. Total (sum) of all the cases for each state and territory
// * 2. Total (sum) of all deaths
// * 3. Which state or territory had the highest number of cases 
// * 4. Which state or territory had the higheest number of deaths
// * 
// * 5. lowest state or territory deaths
// * 6. lowest state or territory for cases

//todo 3:
console.log('California had the most cases with:');
//? let highestNumOfCases = {state : '', cases : 0}; // can make into object to store state as well
let highestNumOfCases = 0
for (let i = 0; i < data.length; i++){
   if (data[i].cases > highestNumOfCases){
    highestNumOfCases = data[i].cases
   }
   
    //? if (data[i].cases > highestNumOfCases.cases){
    //?     highestNumOfCases.cases = data[i].cases
    //?     highestNumOfCases.state = data[i].state
    //? }
}
console.log(highestNumOfCases);
// console.log(`${highestNumOfCases.state}: ${highestNumOfCases.cases}`);
console.log('------------------------------------------');

//todo 4: 
console.log('California had the most deaths with:');
let highestNumOfDeaths = 0;
for (let i = 0; i < data.length; i++){
    if (data[i].deaths > highestNumOfDeaths){
        highestNumOfDeaths = data[i].deaths
    }
}
console.log(highestNumOfDeaths);
console.log('------------------------------------------');

//todo 5:
console.log('Wuhan Repatriated & Diamond Princess Ship had the least deaths with:');
let lowestNumOfDeaths = highestNumOfDeaths; // could do infinity 
for (let i = 0; i < data.length; i++){
    if (data[i].deaths < lowestNumOfDeaths){
        lowestNumOfDeaths = data[i].deaths
    }
}
console.log(lowestNumOfDeaths);
console.log('------------------------------------------');

//todo 6: 
console.log('Wuhan Repatriated had the least cases with:');
let lowestNumOfCases = highestNumOfCases;
for (let i = 0; i < data.length; i++){
    if (data[i].cases < lowestNumOfCases){
        lowestNumOfCases = data[i].cases
    }
}
console.log(lowestNumOfCases);
console.log('------------------------------------------');