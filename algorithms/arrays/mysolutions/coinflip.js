// ## Coin Flip 

// You have a line of quarters. Write a function that returns the minimum number of changes necessary to make each quarter in the line of quarters alternate between heads and tails. For instance if the line of quarters were represented by the array [1,1,0,1,1], your function should return 2 because you need only 2 changes: changing the first 1 and the last 1 to zero.

const coinFlip = (coinArr) => {

    let arr = coinArr

    let val = 0
    

    // need to adjust for arr starts with heads & starts with tails
    // answer for both should be 2
    // use spread operator to create 2 arrays
    // use 2 counters
    for(let i = 0; i < arr.length; i++){
        // arr[0] = 0
        if(arr[i] == arr[i+1] && arr[i] == 1){
            val += 1
            arr[i+1] = 0
        }
        if (arr[i] == arr[i+1] && arr[i] == 0){
            val += 1
            arr[i+1] = 1

        }
    }

    console.log(val);
    console.log(arr);

};

coinFlip([1,1,0,1,1]);
coinFlip([0,0,1,0,0]);


// Vero's Solution:

const flip = (coinFace) => {
    
    return coinFace === 0 ? 1 : 0;
}

const getFlipCount = (arrayOfCoins, expectedFace) => {

    let flipCount = 0;

    for(let i = 0; i < arrayOfCoins.length; i++){

        if(arrayOfCoins[i] !== expectedFace){
            flipCount += 1;
        }

        expectedFace = flip(expectedFace)

    }

    return flipCount;
    
}

const minFlipCount = (arrOfCoins) => {

    return Math.min(getFlipCount(arrOfCoins, 0), getFlipCount(arrOfCoins, 1))
    
}

console.log(minFlipCount([1,1,0,1,1]));