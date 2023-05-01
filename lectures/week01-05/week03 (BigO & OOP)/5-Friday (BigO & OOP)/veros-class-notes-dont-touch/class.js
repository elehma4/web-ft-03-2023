
// let justin =  {
//     firstName : "Justin", 
//     city: "Phoenix"
// }


// let kelly = {
//     firtName : "Kelly", 
//     city:"Houston"
// }


// let jordan = {
//     firtName: "Jordan", 
//     city: "Nashville"
// }

// class Student {

//     constructor(firstName, city){

//         this.firstName = firstName; // this = address memory block
//         this.city = city;

//         //initialize data
//         console.log("inside of my constructor");
//     }

//     greeting(){  //instance methods

//         console.log('hello world');
//     }
// }

// let jordan = new Student("Jordan", "Nashville")  //initiates an object   //memory this
// //jordan is object, jordan an instance of the class Student

// let kelly = new Student("Kelly", "Houston")

// let mo = new Student('Mohammad', "Houston")

// // jordan.greeting()

// console.log(jordan);
// console.log(kelly);
// console.log(mo);
// // let str = "Hunger"

// // str.toLowerCase()



// class Person{
//     constructor(name, surname, birthdate, address, telephone, email){
//         this.name = name  //instance variable
//         this.surname = surname
//         this.birthdate = birthdate
//         this.address = address
//         this.telephone = telephone
//         this.email = email
//     }

//     age(){
//         let today = new Date()
        
//         let age = today.getFullYear() - this.birthdate.getFullYear() // 2023 -1992

//         return age
        
//     }
// }


// let person = new Person(
//     "Jane",
//     "Doe",
//     new Date(1992, 3, 12), // year, month, day
//     "No. 12 Short Street, Greenville",
//     "555 456 0987",
//     "jane.doe@example.com"
// )


// console.log(person.name);

// console.log(person.age())

// console.log(person);


class Person{
    constructor (name){
      this.name = name  //instanscde variable. this.name
    }

    greet (friend){
      console.log(`Hello ${this.name} and ${friend} `)
    }

    // hello(){
    //     console.log(`${this.name}  ${friend}`);
    // }
  }



  let me = new Person('Paul')


  me.greet('Pepper')


//   let matt = new Person('Matt')
//   matt.greet('Eric')
//   let travis = new Person('Travis')
//   travis.greet('Hussein')
//   me.greet('Pepper')
//   matt.greet('Eric')
//   travis.greet('Hussein')





