const student= {
    fullName: "Rahul",
    marks: 34.2,
    printMark: function(){
        console.log("marks =", this.marks); // student.marks
    }
} // Javascript object has special property called prototype
// we can set prototype using __proto__
// in javascript array is object internally

/* ****************************************************** */

const employee= {
    calTax1(){
        console.log("tax rate is 10%")
    },

    calTax2: function(){
        console.log("tax rate is 20%")
    }
}
// both are right way to declare the method in object

const karanArjun = {
    salary : 50000,
};

const karanArjun1 = {
    salary : 50000,
    calTax1: function(){
        console.log(" tax rate is 20%"); // if object and prototype have same method then object's method will be used 
        
    }
};
const karanArjun2 = {
    salary : 50000,
};
karanArjun.__proto__ = employee // here we include the property of employee in karanArjun
karanArjun1.__proto__ = employee // here calTax1 wil be tax rate is 20%
karanArjun2.__proto__ = employee // no need to write the calTax every time in each object just used prototype