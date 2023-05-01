// stack is an array where you can push & pop from that array

class Stack {
    constructor(){

        this.arr = []
    }

    // peek, push, pop, length

    peek = () => {
        
        if (this.arr.length == 0){
            return null
        }

        return this.arr[this.arr.length - 1]
    }

    push = (val) => {
        return this.arr.push(val)
    }

    pop = () => {
        return this.arr.pop()
    }

    length = () => {
        return this.arr.length
    }
}

module.exports = Stack