// create a local module

const firstName = require('./string'); //commonJS

const logging = require('./log')

const Stack = require('./utilities/stack')

// console.log(firstName);

// console.log(logging);

logging.warning("memory leak")

let stack = new Stack();

stack.push(2)
stack.push(3)
stack.push(5)
stack.push(8)
stack.push(1)

console.log(stack.pop());

console.log(stack.peek());

const math = require('./utilities/math');

console.log(math);

console.log(math.sum1([4,5,6,7,8]));
console.log(math.mult([4,5,6,7,8]));