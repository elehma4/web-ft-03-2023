

// -100453


// -354001

// let num = -100453
// let sign = 1;

// if (num < 0){
//     sign = -1;
// }


// let numAbs = Math.abs(num)

// let numsAbsStr = numAbs.toString(); // 100453

// let revNumAbsStr = "" 


// for(let i =0; i< numsAbsStr.length; i++){

//     revNumAbsStr = numsAbsStr[i] + revNumAbsStr;  // 5  + "4001"
// }

// let revNum = Number(revNumAbsStr) * sign;

// console.log(revNum);

// console.log(revNumAbsStr);



// let numsAbsArr = numsAbsStr.split("");


// let revNumsAbsArr = numsAbsArr.reverse(); 

// console.log(revNumsAbsArr);

// numsAbsStr = revNumsAbsArr.join("")

// console.log(numsAbsStr);
// numAbs = Number(numsAbsStr) * sign; 

// console.log(numAbs);


let dupNums = [9, 8, 6, 9, 8, 6, 1, 2, 3, 1, 1, 4, 5, 6]

let sortedNums = dupNums.sort()

let noDupNums = [sortedNums[0]] // [1, 2, 3, 4, 5, 6]


// [ 1, 1,  2, 3, 4, 5, 6, 6, 6, 8, 8, 9, 9] 

//                         c 

//      n

// console.log(noDupNums);


// for(let c = 0; c <  sortedNums.length - 1; c++){  

//     // let n = c + 1 //next pointer

//     if(noDupNums[noDupNums.length -1] !=  sortedNums[c]) {  // 6 != 6
//         noDupNums.push(sortedNums[c])
//     }
// }

// console.log(noDupNums)

let codedString = "albh zhfg hayrnea jung lbh unir yrnearq"; 

let decodedString = ""


//  % 26 = 0

// 25 + 13 = 38 % 26 = 13 

// let code = "abz".charCodeAt(1)  98 - 96 = 2

// console.log(code);  //122 - 96 = 26

// "a"

// console.log(39 % 26);

// console.log(String.fromCharCode(97)) // a

console.log(" ".charCodeAt(0))

for(let i = 0; i < codedString.length; i++){


    if(codedString.charCodeAt(i) + 13 < 96){ 
        // "albh zhfg hayrnea jung lbh unir yrnearq". charCodeAt(0)  97 - 96 = 1
        // console.log('here');
        decodedString += " "
    }
    else{

        // console.log('there');
        let charCode = (codedString.charCodeAt(i) - 96 + 13) %  26

        //"albh zhfg hayrnea jung lbh unir yrnearq". charCodeAt(0) // (26 + 13) % 26 = 1 

        console.log(charCode);
        let char = String.fromCharCode(charCode + 96 )  //97

        // console.log(char);

        decodedString += char;

    }

}

console.log(decodedString);



