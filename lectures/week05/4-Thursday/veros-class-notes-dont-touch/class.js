

// console.log('first');


// setTimeout(()=>{  //asynchronous function
//     console.log("second");
// }, 0)

// // for(let i= 0; i< 10; i++){
// //     console.log(i);
// // }


// console.log('third');

// let div = document.getElementById('hello')

// console.log('first');

// div.addEventListener('click', ()=>{

//     console.log('second');
// })

// console.log('third');



// setTimeout(()=>{

//     console.log('retrieving data');
// }, 0)


// //after we data 

// console.log('proccess data');


// console.log('some synch stuff');


let promise = new Promise((resolve, reject)=>{

    let isValid = false
    //async code

    setTimeout(() => { 
        
        if(isValid){
            resolve('success')
        }
        else{
            reject('you have an error in your code')
        }

     }, 1000)


})

promise.then((result)=>{

    //process data
    console.log(result);
})
promise.catch((error)=>{

    console.log(error);
})


console.log('hello there, waiting to process data');


// Create a Promise that resolves after 2 seconds with the message "Hello, world!" and logs the result to the console.


// Create a Promise that generates a random number between 1 and 10 and resolves with that number. If the generated number is less than 5, reject the Promise with the message "Number too low!".