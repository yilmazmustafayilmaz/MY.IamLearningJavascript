//Variables
let age = 250; //replaceable
const name = "Darth Vader";
var old = "Anakin Skywalker";
console.log(name, age, old);

//Data Types
let number = 42;
let string = "Hello";
let isTrue = true;
let null_ = null;
let undefined;
let array = [1, 2, 3];
let object = { ad: "Ali", yas: 30 };
console.log(typeof isTrue);

//Operators
console.log(5 + 3);
console.log(5 == "5");
console.log(5 === "5");
console.log(true && false);
console.log(true || false);

//Functions
function sumNew(x, y){
    return x + y;
}
console.log(sumNew(5, 10));

const sumOld = (x, y) => (x + y);
console.log(sumOld(5, 10));