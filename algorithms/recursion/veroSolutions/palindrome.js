
//  a mm a
//    ||  
const isPalindrome = (str) => {
    
    // base case 

    if(str.length == 1) return true;
    if(str.length == 2) return str[0] === str[1]

    if(str[0] == str.slice(-1)){
        // recurse
        return isPalindrome(str.slice(1, -1))
    }


    return false
}

// isPal(d) => true
// isPal(ada) => true
// madam => isPal(madam) => true