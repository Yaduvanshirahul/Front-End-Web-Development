const student = {
    name: "Rahul",
    age: 20,
    email: "ry421072@gmail.com"
};

const studentstr = JSON.stringify(student);
console.log(studentstr); // convert Object into JSON format

const jsObject = JSON.parse(studentstr);
console.log(jsObject);