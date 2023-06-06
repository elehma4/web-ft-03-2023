

let numArr = [29, 11, 37, 17, 41, 3]

const selectionSort = (arrOfNums) => {

    let length = arrOfNums.length
    
    for(let i = 0; i < length - 1; i++){
        // console.log(arrOfNums[i]);
        for(let j = 0; j < length - 1 - i; j++){

            if (arrOfNums[j] > arrOfNums[j + 1]){
                let temp = arrOfNums[j]
                arrOfNums[j] = arrOfNums[j + 1]
                arrOfNums[j + 1] = temp;
            }
        }
        
    }
    finalArr = [...arrOfNums]
    console.log(finalArr);
}

selectionSort(numArr)


// Veros solution

let arr1 = [29, 10, 22, 34, 17, 19]

const selectionSort2 = (arr) => {

    for(let i = 0; i < arr.length; i++){
        let smallest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[smallest]){
                smallest = j
            }

            if(i !== smallest){
                [arr[i], arr[smallest]] = [arr[smallest], arr[i]]
            }
        }
    }
}