

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

