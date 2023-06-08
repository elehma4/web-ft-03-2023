
// Recursive Fibonacci (worse Big O than loop)
// 2^n

const recursiveFib = (num) => {
    
    if (num <= 1) return num;

    return recursiveFib(num - 1) + recursiveFib(num - 2)
}
console.log(recursiveFib(4));

// [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// think of it like a tree







const fib = (n, memo=[]) => {

    if(memo[n] !== undefined) return memo[n];
    
    if(n <= 2) return 1;

    let res = fib(n - 1, memo) + fib(n - 2, memo);

    memo[n] = res;
    console.log(memo);

    return res;
}

fib(50)