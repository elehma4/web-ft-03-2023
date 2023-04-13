
// console.log('hello world');

// // Asynchronous function: -> even with 0s it is placed on callstack after cuz it's async
// setTimeout(()=>{
//     console.log('This is a set time out.');
// }, 2000) //5s delay

// for(let i = 1; i < 4; i++){
//     console.log(i);
// }

// console.log('goodbye world');

//*----------------------------

// let div = document.getElementById('hello')

// div.addEventListener('click', ()=>{ //all async goes into task queue (defer until stack is clear then uses event loop)
//     console.log('second');
// })

// console.log('third');

//*----------------------------

// setTimeout(()=>{
//     console.log('retrieving data');
// }, 1000)

// console.log('process data');

// console.log('some sync stuff');

// let promise = new Promise((resolve, reject)=>{

//     let isValid = true
//     //async
//     setTimeout(()=>{

//         if(isValid){
//             resolve('success')
//         }
//         else {
//             reject('error in your code, see below:')
//         }
//     }, 1000)

// })

// promise.then((success)=>{
//     console.log(success);
// })
// promise.catch((error)=>{
//     console.log(error);
// })
// console.log('hello there, waiting to process data');


//*----------------------------

// Create a Promise that resolves after 2 seconds with the message “Hello, world!” and logs the result to the console.

// let promise = new Promise((resolve, reject)=>{
//     let isValid = false
//     //async
//     setTimeout(()=>{
//         if(isValid){
//             resolve(console.log('hello world'))
//         }
//         else {
//             reject(console.log('world is not helloed'))
//         }
//     }, 2000)
// })
// promise.then((success)=>{
//     console.log(success);
// })
// promise.catch((error)=>{
//     console.log(error);
// })

//*----------------------------

// Create a Promise that generates a random number between 1 and 10 and resolves with that number. If the generated number is less than 5, reject the Promise with the message “Number too low!“.

let promise = new Promise((resolve, reject)=>{
    
    let number = Math.floor(Math.random() * 10)

    setTimeout(()=>{
        if(number > 5){
            resolve(number)
        } else {
            reject(number)
        }
    })
})

promise.then((num)=>{
    console.log(`${num} is fine.`);;
})
promise.catch((error)=>{
    console.log(`${error} is too low.`);
})