
const prompt = require('prompt-sync')({sigint: true});


let todos = ["feed puppy"]  //how to store our information from our user 


console.log(todos);
/**
 * 
 * 1 list 1 0
 * 2 list 2
 * 
 */

// 1. prompt our user to 
//?    1. add a todo list item 
//          - prompt them for the item that they want to add
//          - take the item (string) push it to our list 
//          - want to display our list
//?    2. update a todo list item 
//          - print out a list of items by numbers for them to choose.
//          - caste chosen number to a integer
//          - integer - 1 to access array value
//          - prompt the user for the updated input
//          - todos[index - 1] = new value
//              
//?    3. remove a todo list item
//?    4. end program 


let menuChoice = 0;
let quit = 4;
let userInput = "";

while (menuChoice != quit){  //4 != 4

    //print a list of todolist items
    // 1. feed puppy

    for(let index = 0; index < todos.length; index++){
        
        console.log(`${index + 1}. ${todos[index]}`);
    }

    menuChoice = Number(prompt(`***** Select a menu item *****
1. Add a todo list item 
2. Update a todo list item  
3. Remove a todo list item
4. Quit
    
`))

    switch(menuChoice){
        case 1:  //adding an item 
            //prompt the user to enter a todolist item
            userInput = prompt("Enter a todolist item >> ")

            todos.push(userInput);
            break;
        case 2: //update 
            break; 

        case 3: // remove 
            break;
        
        default:
            break;

    }


    
}

console.log("exited progarm, goodbye");
