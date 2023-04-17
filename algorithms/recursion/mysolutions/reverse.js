// ## Reverse
//? Write a recursive function called reverse which accepts
//? a string and returns a new string in reverse

// Veronica solution:

const reverse = (str) => {
    
    //base case: (when str.length == 0)
    if(str.length == 0) return "";
    
    // returns strin with index 1 missing & append to str
    return reverse(str.slice(1)) + str[0]

}

//                  base case
//5 reverse('o') =? reverse('') + "olleh"
//4 reverse('lo') =? reverse('o') + "lleh"
//3 reverse('llo') =? reverse('lo') + "leh"
//2 reverse("ello") => reverse("llo") + "eh"
//1 reverse("hello") => reverse("ello") + "h"

reverse("hello")