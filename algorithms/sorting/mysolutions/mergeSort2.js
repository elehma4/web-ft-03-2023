// Hunter Solution:
const arr1 = [3,7,9,11]
const arr2 = [1,3,6,9,13,14,18]

let sortArrs = (arr1, arr2) => {

    let i = 0
    let j = 0;
    let combined = []

while(i < arr1.length && j < arr2.length){
    let curr1 = arr1[i]
    let curr2 = arr2[j]

    if(curr1 < curr2){
        combined.push(curr1)
        i++
    }
    else if(curr2 < curr1){
        combined.push(curr2)
        j++
    }
    else{
        combined.push(curr1);
        combined.push(curr2);
        i++;
        j++;
    }
    
}
if (i < arr1.length){
    let leftover1 = arr1.slice(i)
    combined = combined.concat(leftover1)
}
if (j < arr2.length){
    let leftover2 = arr2.slice(j);
    // combined = [...combined,]
    combined.push(...leftover2)
    // console.log(combined)
}
return(combined)

}

console.log(sortArrs(arr1,arr2))