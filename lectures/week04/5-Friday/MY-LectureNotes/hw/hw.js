//* Kelly's solution:
const nestedArray = [[1, 2], [3, 4, [5, 6]], 7, [8, [9, 10]]];

function flat(array){
    let flatArr = array.reduce ((prev, curr)=>{
    
         
         if(!Array.isArray(curr)){
         
             return prev.concat(curr)
         }
         else{
             return prev.concat( flat(curr))
         }
        
      },[])
    return flatArr
 }
 let result = flat(nestedArray)
 console.log(result);

//----------------------------------------------------
//* Veronica's solution:

const nestedArray2 = [[1, 2], [3, 4, [5, 6]], 7, [8, [9, 10]]];

const flatten = (arr) => arr.reduce((acc, cur)=>{

        if(Array.isArray(cur)){
            return acc.concat(flatten(cur))
        }
        else{
            acc.push(cur)
            return acc
        }

    }, []) // initial is empty array}

let result2 = flatten(nestedArray)
console.log(result2);