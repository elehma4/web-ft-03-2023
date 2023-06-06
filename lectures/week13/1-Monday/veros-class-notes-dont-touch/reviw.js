
// class Car {

//     constructor(name){

//         this.name = name
//     }

//     printNameOfCar(){
//         console.log(this.name);
//     }
// }


// class Hybrid extends Car{

//     constructor(gasMilage, name) {

//         super(name)// calling the base class 
//         this.gasMilage = gasMilage
        
//     }

//     printGasMilage(){

//         console.log(this.gasMilage);
//     }
// }


// let toyota = new Hybrid(50, "prius")

// toyota.printGasMilage(); 
// toyota.printNameOfCar()

// let toyota = new Car("Prius")


// toyota.printNameOfCar()


// button clicked 


// class Button{

//     constructor(){
//         this.click = 0
//     }

//     increment = () => {
        
//         this.click++; 

//         return this.click
//     }
// }

// let navButton = new Button(); 

// let faqButton = new Button();

// navButton.increment()
// navButton.increment()
// navButton.increment()
// navButton.increment()

// faqButton.increment() 


// console.log(navButton.click);
// console.log(faqButton.click);


let navButton = 0; 
let faqButton = 0;
// let click = 0; 

const Button = (click) => {
    
    click = click + 1; 

    return click


}

navButton = Button(navButton);
navButton = Button(navButton);
navButton = Button(navButton);
navButton = Button(navButton);



faqButton = Button(faqButton)

console.log(navButton);
console.log(faqButton);
