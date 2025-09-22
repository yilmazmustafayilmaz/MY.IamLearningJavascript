//Objects
const user = {
    name: "Alice",
    age: 25,
    email: "alice@example.com"
};
console.log(user.name);
console.log(user["age"]);

//Object insinde Function
const person = {
    name: "Bob",
    age: 30,
    greet: function(){
        console.log("Hello, my name is " + this.name);
    }
}
person.greet();

//JSON
const user2 = { name : "Charlie", age: 22 };
const jsonString = JSON.stringify(user2);
console.log(jsonString);
const parsed = JSON.parse(jsonString);
console.log(parsed.age);

//Destructuring
const book = { title:"1984", author:"George Orwell", year: 1949 };
console.log(book.title);
const { title, author } = book;
console.log(title + " " + author);

//Spread and Rest
const user3 = { name: "David", age: 28 };
const user4 = { ...user3, email: "david@mail.com" };
console.log(user4);

function sum(...number){
    return number.reduce((total, n) => total + n, 0);
}
console.log(sum(1,2,3,4));