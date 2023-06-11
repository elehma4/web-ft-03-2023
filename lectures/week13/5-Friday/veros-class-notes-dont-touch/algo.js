


// const counter = () => {
    
//     let count = 0; 

//     return incrementCount = () => {
        
//         count++

//         return count;
//     }

    

// }


// let incrmentFunction = counter()


// console.log(incrmentFunction());
// console.log(incrmentFunction());
// console.log(incrmentFunction());
// console.log(incrmentFunction());

// []
// bind, call, apply

const memoize = (fn) => {
    
    let cache = {}

    return function(...args){  //

        if(cache[args]){ //if the value is already in our cache
            return cache[args]
        }

        const result = fn.apply(this, args)  //where the recursion happens

        cache[args] = result;

        return result;
    }

}

let slowFib = (n) => {
    
    if(n<2){
        return n;
    }

    return fib(n-1) + fib(n-2)
}


const fib = memoize(slowFib)  //this is also a function

console.log(fib(40))


// const sum = (...args) => { 
    
//     return args.reduce((prev, curr)=>{

//         return prev + curr
//     }, 0)
//  }


//  console.log(sum(3, 4, 5))

//  console.log(sum(2,3))

//  console.log(sum(7,8, 9, 10, 11, 12, 13))
