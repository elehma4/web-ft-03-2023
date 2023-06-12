

//  [0, 1, 1, 2, 3, 5, 8]
//?  0  1  2  3  4  5  6         

// O(n)
// const fib = (n) => {
    
//     // if(n == 0) return 0; 
//     // if(n == 1) return 1;
//     // if (n < 0) return undefined;

//     if(n <2) return n;

//     let arr = [0, 1]

//     for(let i = 2; i<= n; i++){

//             // let a = arr[i -2] 
//             // let b = arr[i -1]

//             // arr.push(a + b)
//         let temp = arr[i-2] + arr[i-1]

//         arr.push(temp)
//     }


//     return arr[arr.length - 1]

// }


// console.log(fib(40))


//  [0, 1, 1, 2, 3, 5, 8]
//?  0  1  2  3  4  5  6  

//2^n
// const fibR = (n) => { 
    
//     if(n < 2){
//         return n
//     }


//     return fibR(n-1) + fibR(n-2)
// }


// console.log(fibR(40))


//* memoization


// let cache = {} //10: 100

// const times10 = (n) => {

//     return n * 10
    
// }

// const memoTimes10 = (n) => {
    
//     if(n in cache){
//         console.log('Fetching from our cache', n);
//         return cache[n]
//     }
//     else{

//         console.log('calcuating result', n);
//         cache[n] = times10(n) 

//         return cache[n]
//     }
// }


// console.log(memoTimes10(4));
// console.log(memoTimes10(40));
// console.log(memoTimes10(3));
// console.log(memoTimes10(4));
// console.log(memoTimes10(4));
// console.log(memoTimes10(4));


// const closure = () => {

//     let a = 34; 
//     let b  = 99;

//     setTimeout(() => {
//         console.log(a + b);
//     }, 2000);


//     return "outside function has completed"
    
// }


// console.log(closure());


// const counter = () => {
    
//     let count = 0;  //private variable

//     const actualCount = () => {
        
//         count++; 

//         return count;
//     }

//     return actualCount;
// }


// let count = counter();
// let newCount = counter();


// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(count());
// console.log(newCount());
// console.log(newCount());
// console.log(count());



// ()=>setCount(5)


const fib = (n, memo=[]) => {  // 

    if(memo[n] !== undefined) return memo[n]

    if(n <=2) return 1; 

    let res = fib(n-1, memo) + fib(n-2, memo);

    memo[n] = res
    console.log(memo)

    return res;
    
}

console.log(fib(50))





