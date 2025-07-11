/*

New Keyword: jab bhi new lagta hai humesha ek blank object apne maan mein bana lo.

In JavaScript, the new keyword is used to create an instance of an object or to invoke a constructor function.

Important Points to Remember:

1.
Not Using new: If you call a constructor function without new, this will refer to the global object (in non-strict mode) or be undefined (in strict mode), which can lead to unexpected behavior.

       const person3 = Person('Charlie', 40); // Incorrect usage
console.log(window.name); // Output: "Charlie" in non-strict mode

2.
Returning Values: If the constructor function returns a non-primitive value (like an object), that value will be returned instead of the newly created object. If it returns a primitive value (like a string or number), the newly created object will be returned.

    function Car(model) {
    this.model = model;
    return { brand: 'Toyota' }; // Returning an object
}

const myCar = new Car('Camry');
console.log(myCar); // Output: { brand: 'Toyota' }



*/

// Constructor function
function Person(name, age) {
    this.name = name;  // Assign name property
    this.age = age;    // Assign age property
}

// Create a new instance of Person using the new keyword
const person1 = new Person('Alice', 30);
const person2 = new Person('Bob', 25);

console.log(person1.name); // Output: "Alice"
console.log(person1.age);  // Output: 30

console.log(person2.name); // Output: "Bob"
console.log(person2.age);  // Output: 25
