

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


dc.printStudentName()

