

// class BankAccount{

// }

// []
// let diego = new BankAccount
// let henry = new BankAccount
// let susan = new BankAccount
// let tarik = new BankAccount
// let hatem = new BankAccount



// campus  student

//? never going to directly instantiate this class

class Student {

    constructor(firstName, city){

        //? instance variables
        this.firstName = firstName; 
        this.city = city;
    }

    printStudent(){
        
        console.log(`${this.firstName} lives in ${this.city}`);
    }
}


class Campus {  //managment systemd for all of our clients

    constructor(){

        //instance variables 
        this.students = []  // hold all of our student instances\
        // [{firstName, city}, {}, {}]
    }

    addStudent(name, cityVal){

        //create an instance of student

        let studentObj = new Student(name, cityVal)

        //add student instance to array this.students

        this.students.push(studentObj)
    }

    printStudentName(){

        //loop throught my array and print each name 

        for (let studentObj of this.students){

            console.log(studentObj.firstName);
        }
    }

    numOfStudents(){

        return this.students.length
    }

}

let dc = new Campus(); 

dc.addStudent('Katie', "Atlanta")
dc.addStudent('Ethan', "Miami")
dc.addStudent('Jordan', "Nashville")
dc.addStudent('Mohammad', "Houston")
dc.addStudent('Justin', "Phoenix")


// dc.printStudentName()


//
// array = [3, 5, -4, 8, 11, 1, -1, 6]
//          |
// targetSum = 10

// targetSum = x + y
// 10 = 11 -1

// x = targetSum - y

/**
 *     {
 *       3: true, 
 *       5: true,
 *       -4: true,
 *       8: true, 
 *       11: true, 
 *       1: true, 
 *       -1: true, 
 *       6: : true   
 * 
 *      }
 */

// loop 

// x = targetSum - y
// array = [3, 5, -4, 8, 11, 1, -1, 6]
//                        |

// 10   -11` = -1
//         |      |


// array = [3, 5, -4, 8, 11, 1, -1, 6]
// function twoSum(array, targetSum){

//     let cache = {}
//     let results = []


//     for(let val of array){

//         cache[val] = val

//         // cache[3] = 3      // {3: 3
//                                 // 5: 5
//                                 //}
//         // cache[5] = 5

//     }

//     console.log(cache);


//     for(let i = 0; i < array.length; i++){

//         // x = targetSum -y
//         let y = array[i]
//         console.log(y);
//         let calcuatedVal = targetSum - y //7
//         console.log(calcuatedVal);

//         if(calcuatedVal === cache[calcuatedVal] && calcuatedVal != array[i] ){
//             //there is a match found

//             results.push(array[i])
//         }
//     }

//     return results

// }


// let result = twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)

// console.log(result);


// let add = (num1, num2)=>{

//     return num1 + num2 
// }


// let add= (num1, num2)=>{

//     return num1 + num2 
// }

let add = (num1, num2)=>{
    
    console.log('Hello world');
    return num1 + num2
} 


console.log(add(4, 5));




