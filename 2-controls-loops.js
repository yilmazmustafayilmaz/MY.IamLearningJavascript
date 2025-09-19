//If / Else / Switch
let age = 20;
if(age >= 18){
    console.log("Adult");
} else{
    console.log("Child");
}
//Ternary 
let status = age >= 18 ? "Adult" : "Child";
console.log(status);
//Switch
let color = "green";
switch(color){
    case "red":
        console.log("Color is Red")
        break;
    case "green":
        console.log("Color is Green")
        break;
    default:
        console.log("Default color");
}

//LOOPS
//For
for(let i = 1; i <= 5; i++){
    console.log("Number:", i);
}
let array = [10, 20, 30];
for (let num of array) {
    console.log(num);    
}
let object = { ad: "Arthur", age: 42 };
for(let key in object){
    console.log(key, ":",object[key]);
}
//While
let i = 1;
while(i <= 5){
    console.log("While number:", i);
    i++;
}

//Practical Loop Alternatives
let numbers = [1, 2, 3, 4, 5];
//foreach
numbers.forEach(x => console.log("foreach:", x));
//map
let new_ = numbers.map(x => x + 1);
console.log("map:", new_);
//filter
let couples = numbers.filter(x => x % 2 === 0);
console.log("filter:", couples);
//reduce
let sum = numbers.reduce((acc, x) => acc + x, 0);
console.log("reduce:", sum);