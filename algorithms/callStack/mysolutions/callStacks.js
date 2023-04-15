

// let callStack = [main, func] //FIFO

class Stack {
    constructor() {

        this.data = []
    }

    push(item){

        this.data.push(item)
    }

    pop(){
        return this.data.pop()
    }

    peek(){ //last element in the array

        return this.data[this.data.length - 1]
    }

    length(){

        return this.data.length
    }
}

let stack = new Stack()

// figure out if there is a balanced # of brackets
// {{{{( )}}}}
// need to make sure they're balanced
// ["{", "{", "{", , ]

//todo make sure curlies and smoothies are balanced
//?  return true if true
// ()
// 
["()"]

// ({ { } )
//
// return false:
["(", "{", "{", "}", ")"]

