//0, 1, 1, 2, 3

function memoizeFib(fn) {
    const cache = {};
    return function(...args) {

        console.log("cache: ", cache);
        console.log("args: ", args);
      if (cache[args]) {

        // console.log(args, "argument for if");
        return cache[args];
      }
  
      //const result = fn.apply(this, args);  //this is recursively calling itself
      const result = fn.apply(this, args);  //this is recursively calling itself
      
      cache[args] = result;
  
      return result;
    };
  }
  
  function slowFib(n){
      console.log('inside slow fib n: ', n);
      if (n < 2){
          return n;
      }
  
    //   return slowFib(n-1) + slowFib(n-2)
      return fib(n-1) + fib(n-2)  //calls memoized function
  }
  
const fib = memoizeFib(slowFib);

console.log(fib(4));

// console.log(fib(8));


// function fib(n,memo=[]){
//     if(memo[n] !== undefined) return[n] 

//     if(n <=2) return 1; 

//     let res = fib(n-1, memo) + fib(n-2, memo);

//     memo[n] = res; 
//     console.log(memo)
//     return res;
// }

