
class Car {
    constructor(name){
        this.name = name;
    }

    printNameOfCar(){
        console.log(this.name);
    }
}

let toyota = new Car('Corolla');

toyota.printNameOfCar();


class Hybrid extends Car {
    constructor(gasMileage, name){
        super(name);
        this.gasMileage = gasMileage;
    }

    printGasMileage(){
        console.log(this.name + ' has a gas mileage of ' + this.gasMileage + 'mpg');
    }
}

let jeepCherokee = new Hybrid(26, 'Jeep Cherokee')

jeepCherokee.printGasMileage();


// class can hold state and functions cannot


class Buttons{
    constructor(){
        this.click = 0;
    }

    increment() {
        this.click++;
        return this.click;
    }

}

let navButton = new Buttons();

let infoButton = new Buttons();

navButton.increment();
navButton.increment();
navButton.increment();
infoButton.increment();
infoButton.increment();
infoButton.increment();
infoButton.increment();
infoButton.increment();


console.log(navButton.click);
console.log(infoButton.click);