// ## Coin Flip 

// You have a line of quarters. Write a function that returns the minimum number of changes necessary to make each quarter in the line of quarters alternate between heads and tails. For instance if the line of quarters were represented by the array [1,1,0,1,1], your function should return 2 because you need only 2 changes: changing the first 1 and the last 1 to zero.

const coinFlip = (coinArr) => {

    let arr = coinArr

    let val = 0
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] == arr[i+1] && arr[i] == 0){
            val += 1
            arr[i+1] = 1

        }
        if(arr[i] == arr[i+1] && arr[i] == 1){
            val += 1
            arr[i+1] = 0
        }
    }

    console.log(val);
    console.log(arr);

};

coinFlip([1,1,0,1,1]);
coinFlip([0,0,1,0,0]);