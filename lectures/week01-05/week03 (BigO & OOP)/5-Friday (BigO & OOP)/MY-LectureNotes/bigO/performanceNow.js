

    // function addUpTo(n) {
    //     let total = 0;
    //     for (let i = 1; i<=n; i++){
    //         total += i;
    //     }
    //     return total
    // }
    //? Time Elapsed: 0.8941387160047889 seconds

    //*THIS SOLUTION WILL ONLY USE 3 OPERATIONS - it is more efficient & uses less computing power
        function addUpTo(n){
            return n * (n + 1) / 2
        }
    //? Time Elapsed: 0.000011381998658180236 seconds

    //checkpoint 1 (start the timer)
    let t1 = performance.now();
    //call the function
    addUpTo(1000000000)
    // stop the timer
    let t2 = performance.now()
    //calculate time difference
    console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);