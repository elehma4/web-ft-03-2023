

// let callStack = [main, func]  // FIFO

// let arr = []
// arr.push("lskdfj")
class Stack {

    constructor(){

        this.data = [] // 
    }

    push(item){

        this.data.push(item)

    }

    pop(){

        return this.data.pop()
    }


    peek(){ //last element in the array

        return this.data[this.data.length -1]
    }

    length(){

        return this.data.length
    }
}



let stack = new Stack()


//   {   {   {   ){(( )}}}}


//   ["{", "{", , , ]


//(){}
//   |

// [  { ]

// ({ { } ) 
//        |


// [(, {  ]


















