

//[10, 17,19,22, 34,]
//                i
//                 s
//                   j 




const selectionSort = (arr) => {
    
    for(let i = 0; i< arr.length; i++){

        let smallest = i;

        for(let j= i+ 1; j<arr.length; j++ ){

            if(arr[j] < arr[smallest]){

                smallest = j
            }
            
        }


        if(i !== smallest){

            [arr[i], arr[smallest]] = [arr[smallest], arr[i]]

        }

    }

}