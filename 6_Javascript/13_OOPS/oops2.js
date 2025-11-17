/* Class -> class is a program-code template for creating objects.those objects will have same state(variable) and behaviour(function) inside it

Constructor -> constructor() method is : 
       i. automatically invoked by new
       ii. initialize object

*/
class ToytaCar{

    constructor(mileage){
        console.log("constructor is invoked");
        this.mileage = mileage;
    }
    start(){
        console.log("start");
    }
    stop(){
        console.log("stop");
        
    }
    setbrand(brand){
        this.brandName = brand; // here this.brand is the property for all the object who make with this mycar class and brand is argument for setbrand function
    }
}

let mycar = new ToytaCar("12"); // here constructor invoked automatically after creating object mycar
mycar.setbrand("Fortuner");
let lexus = new ToytaCar();