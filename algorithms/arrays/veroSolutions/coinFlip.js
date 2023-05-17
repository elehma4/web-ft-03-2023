

// [1, 0,  1, 0]  =>2
//  1  0    1 0   2
//  |  

const flip = (coinFace) => {
    
    return coinFace === 0 ? 1 : 0;
}

const getFlipCount = (arrayOfCoins, expectedFace) => {

    let flipCount = 0; ///return , number of times we flip a coin

    for(let i =0; i < arrayOfCoins.length; i++){

        if(arrayOfCoins[i] !== expectedFace){
            flipCount +=1
        }

        expectedFace = flip(expectedFace)
    }

    return flipCount;
}


const minFlipCount = (arrOfCoins) => {
    
    return  Math.min(getFlipCount(arrOfCoins, 0), getFlipCount(arrOfCoins, 1)) 
}

console.log(minFlipCount([1, 1, 0, 1, 1]));//expected 2

console.log(minFlipCount([0, 0, 0, 1, 0, 1, 0, 1, 1, 1])); //expected 2