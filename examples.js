const array = [
  { name: "Jacop", age: 27 },
  { name: "Lizzie", age: 33 },
  { name: "Yosef", age: 29 },
  { name: "Michael", age: 33 },
];

const filterArray = array.filter((x) => x.age === 33);
console.log(filterArray);
const stringifyArray = JSON.stringify(filterArray);
console.log(stringifyArray);
