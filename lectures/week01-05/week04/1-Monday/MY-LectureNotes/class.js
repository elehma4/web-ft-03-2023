//? COMPOSITION - OOP
// A class that manages another class

//* never going to instantiate this class
class Student{
    constructor(firstName, city) {
        //? instance variables
        this.firstName = firstName;
        this.city = city;
    }
    printStudent(){
        console.log(`${this.firstName} lives in ${this.city}`);
    }
}

// Create methods that allows us to create student instances & Uses data structure array for all campuses
class Campus{ //* Management system for all of our clients
    constructor(){
        //? instance variables
        this.students = []; // holds all student instances

    }

    addStudent(name, cityVal){
        // create instance of student
        let studentObj = new Student(name, cityVal)
        // add student instance to array this.students
        this.students.push(studentObj);
    }
    printStudentNames(){
        for(let studentObj of this.students)
        console.log(studentObj.firstName);
    }
    numOfStudents(){
        return this.students.length;
    }
    
}

let DC = new Campus();
DC.addStudent("Ethan", "Bonita Springs")
DC.addStudent("Jordan", "Nashville")
DC.addStudent("Katie", "Atlanta")
DC.addStudent("Mohamed", "Houston")
DC.addStudent("Hunter", "Tuscaloosa")

//* DC.printStudentNames()


//* ---------------------------------------------------------------

//? ARROW FUNCTIONS 

//*shortcut (nfn)
const name = (params) => {
    
}


let add = (num1, num2) => {
    console.log(`Sum of ${num1} + ${num2}`);
    return num1 + num2
}

console.log(add(4, 5));

let subtract = (num1, num2) => {
    return num1 - num2
}

let multiply = (num1, num2) => {
    return num1 * num2
}

