

// create a local module 

const fName = require('./string'); //common js

const logging = require('./log');

const Stack = require('./utilities/stack');



let stack = new Stack();  // 


stack.push(2)
stack.push(3)
stack.push(5)
stack.push(8)
stack.push(1)


console.log(stack.pop());

console.log(stack.peek());
// logging.warning("memory leak")

// console.log(fName);