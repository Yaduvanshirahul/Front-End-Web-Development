// Inheritance -> passing down the properties & method from parent class to child class
// Super -> super keyword is used to call the constructor of its parent class to access the parent's properties and method
class person{
    eat(){
        console.log("eat");
        
    }
    sleep(){
        console.log("sleep");
        
    }
    work(){
        console.log("do nothing");
        
    }
}

class engineer extends person{
    work(){
        console.log("solve problems, build something");
        
    } // always invoked the child class method when we have the same method in child or parent class which called method overriding
}

let man = new engineer();
let woman = new person();