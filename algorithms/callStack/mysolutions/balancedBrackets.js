// ## Balanced Brackets

// Write a function that takes inba string made up of brackets ( `(`, `[`, `{`, `}`, `]`, and `}`) and other optional characters.  

// Veronica's solution:

class Stack{

    constructor(){
        this.data = []
    }

    push(item){
        return this.data.push(item)
    }

    pop(){
        return this.data.pop()
    }

    peek(){
        return this.data[this.data.length - 1]
    }

    length(){
        return this.data.length;
    }

}

// {[()]}
// 
const balancedBrackets = (string) => {

    let stack = new Stack(); 

    let opening = {
        "(" : true,
        "{" : true,
        "[" : true
    }

    let closing = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    for(let i = 0; i < string.length; i++){

        let char = string[i]
        if(opening[char]){
            stack.push(char)
        }
        if (char in closing){
            let lastChar = stack.pop() // (

            if(lastChar != closing[char]){ // ( != (

                return false
            }
        }
    }

    return stack.length() === 0 ? true : false


}





// **The function should return a boolean representing whether the string is balanced with regards to brackets.** 

// A string is said to be balanced if it has as many opening brackets of a certain type as it has closing brackets of that type and if no bracket is unmatched.  

// **Note** that an opening bracket can't match a corresponding closing bracket that comes before it, and similarly, a closing bracket can't match a corresponding opening bracket that comes after it.  Also, brackets can't overlap each other as in `[(])`. ]
