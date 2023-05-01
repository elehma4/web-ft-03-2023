/**
 * @param {string} s
 * @return {number}
 */

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

var romanToInt = function(s) {
    let answer = 0
    for(let i = 0; i < s.length; i++){
        if(s[i] == 'I' && (s[i+1] == 'V' || s[i+1] == 'X')){
            answer -= 1;
        }
        else if(s[i] == 'I'){
            answer += 1;
        }
        else if(s[i] == 'V'){
            answer += 5;
        }
        else if(s[i] == 'X' && (s[i+1] == 'L' || s[i+1] == 'C')){
            answer -= 10;
        }
        else if(s[i] == 'X'){
            answer += 10;
        }
        else if(s[i] == 'L'){
            answer += 50;
        }
        else if(s[i] == 'C' && (s[i+1] == 'D' || s[i+1] == 'M')){
            answer -= 100;
        }
        else if(s[i] == 'C'){
            answer += 100;
        }
        else if(s[i] == 'D'){
            answer += 500;
        }
        else if(s[i] == 'M'){
            answer += 1000;
        }
        else {
            return 'error'
        }

    }
    return answer
};
console.log('III is: ' + romanToInt('III'))
console.log('LVIII is: ' + romanToInt('LVIII')) 
console.log('MCMXCIV is: ' + romanToInt('MCMXCIV')) 
console.log('LXIV is: ' + romanToInt('LXIV'));