


























// use the spread operator to convert a Set back into an array
let arr = [10,30,20,10,40,50,30];
const set1 = new Set(arr);
arr = [...set1];
console.log(arr); // [10, 30, 20, 40, 50]