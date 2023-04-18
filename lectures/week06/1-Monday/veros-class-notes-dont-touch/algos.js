

const reverse = (str) => {

    // base 

    if(str.length === 0) return ""; 


    return reverse(str.slice(1)) + str[0]

}


// reverse('') =>  ""
// reverse('o') =>  "" + 'o' => "o"
// reverse('lo') =>  "o" + 'l'  => "ol"
// reverse('llo') =>  "ol" + 'l' => oll
// revseres("ello") => oll + "e" => olle
//reverse("hello") => olle + "h" => olleh

// hello 


class Stack{

    constructor() {
        this.data = []; //instance variable, is an empty array
    }

    push(item){
        this.data.push(item);
    }

    pop(){
        return this.data.pop();
    }

    peek(){
        return this.data[this.data.length -1];
    }

    length(){
        return this.data.length;
    }
}


// {[()]}}
//    |
const balancedBrackets = (string) => {   

    let stack = new Stack();  // [{, [, (]

    let opening = {

        "(" : true, 
        "{" : true, 
        "[" : true
    }

    let closing = {

        ")" : "(",
        "}" : "{",
        "]" : "["
    }


    for(let i= 0; i<string.length; i++){

        let char = string[i] // )

        if(opening[char]){
            stack.push(char)
        }

        if(char in closing){

            let lastChar = stack.pop()// ( 

            if(lastChar != closing[char]){ // ( !=  (

                return false
            }
        }
    }


    return stack.length() === 0 ? true : false;
    
}




