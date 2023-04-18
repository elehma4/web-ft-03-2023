
// Given a nested array, flatten it to a single level array
const nestedArray = [[1, 2], 4, [3, 4, [5, 6]], 7, [8, [9, 10]]];
//                                                  |



// [1, 2, 4, 3, 4, 5, 6, 7, 8, 9, 10]

//[8, [9, 10]]
//     |

//[]


// [9, 10]
//  | 

//[9, 10]

//result should be [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const flatten = (arr) => arr.reduce((prev, val)=>{

        if(Array.isArray(val)){

            return prev.concat(flatten(val))

        }
        else{
            prev.push(val)

            return prev
        }

    }, [])

let result = flatten(nestedArray)

console.log(result);


