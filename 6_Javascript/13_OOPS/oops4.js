class Person{
    constructor(){
        console.log("enter parent class constructor");
        
    }
    eat(){
        console.log("eat");
        
    }
}

class Engineer extends Person{
    constructor(branch){
        console.log("enter child class constructor")
        super() // super keyword is used to invoked the parent class if we used this in child class and creating the child class constructor
        this.branch = branch;
        console.log("exit child class constructor")
    }
    work(){
        console.log("solve problem , build something");
        
    }
}

let engobj = new Engineer("Chemical engg");

/* *************************************************** */

class Person1{
    constructor(name){
        this.species = "homo sapiens";
        this.name = name;
        
    }
    eat(){
        console.log("eat");
        
    }
}

class Engineer1 extends Person1{
    constructor(name){
        
        super(name) // if we have to pass the name to parent class then we pass name argument in super keyword
       
    }
    work(){
        super.eat() // as we know Engineer first eat then work so like that if we want to invoked eat method then we used super()
        console.log("solve problem , build something");
        
    }
}

let engobj1 = new Engineer1("Chemical engg");
