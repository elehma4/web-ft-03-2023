const prompt = require('prompt-sync')({sigint: true});

//? You are going to build a game where a player has to guess the secret word one letter at a time. The player is initially given 9 lives. If the player guesses a wrong letter, they lose a life. The object of the game is to guess the word (one character at a time, before they lose all of the their lives (or chances)

let words = ["kites"/*, "plate", "space", "cycle", "brave", "light"*/]

let heartSymbols = ['\u2764', ' \u2764', ' \u2764', ' \u2764', ' \u2764', ' \u2764', ' \u2764', ' \u2764', ' \u2764']
let lives = heartSymbols.toString()
console.log(`Lives: ${lives}`);

let secretWordIndex = Math.floor(Math.random() * 1) // 6 for all
// console.log(secretWordIndex);

let clue = ['?', '?', '?', '?', '?'];
// each index of clue needs to be equal to the index of the string and transform ? into the letter if user guesses correctly
//todo if prompt answer equals letter of words[i] guessed change '?' of correct index with correct letter of words[i] being guessed
//? setCharAt(position, 'char')

let guessWordCorrectly = false;
console.log(clue);
let guess = prompt(`Try to guess the secret word one letter at a time.
Enter your first guess: `); //convert to lower case

for(i = 0; i <= words[secretWordIndex].length - 1; i++){
    console.log(words[secretWordIndex][i]);
if (guess === words[secretWordIndex][i]){
    clue[i] = words[secretWordIndex][i]
    console.log(clue);
    // clue.splice(words[secretWordIndex][i], 1, guess)
    // clue.charCodeAt(words[secretWordIndex](i))
    let guess = prompt(`Correct! Guess your next letter: `)
}
  else  {
    console.log("Wrong! You have lost a life.");
    heartSymbols.pop()
    let lives = heartSymbols.toString()
    console.log(lives);
    let guess = prompt(`Guess your next letter: `)
  } 
}

// for(let i = 0; i < codedString.length; i++){

//     } else {
//         let charCode = (codedString.charCodeAt(i) - 96 + 13) % 26
//         //"albh zhfg hayrnea jung lbh unir yrnearq" -> .charCodeAt(0) (1+13)%26 = 14 || (26+13) % 26 = 13
//         //console.log(charCode);
//         let char = String.fromCharCode(charCode + 96)

//         decodedString += char;
//     }
    

// let stringy = "Hello World"
// let stringy2 = ""

// for(i = stringy.length - 1; i > -1; i--){
//     stringy2 += stringy[i];
// }
// console.log(stringy2);
// console.log("---------------------------------------------");