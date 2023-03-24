const prompt = require('prompt-sync')({sigint: true});

let i = 0;
let password = "";

while(password !== "1234" & i < 5){ // "" !== 1234 

    password = prompt("Enter Password"); // 2345 -> re prompt until correct
    i++;
    if (password == "1234"){
        console.log("correct password");
    } else {
        console.log("incorrect password");
    }
}