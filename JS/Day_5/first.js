let a =10;
let b=a;
b =30;
console.log(b);
console.log(a);
// Primitive data type vs Non Primitive data type
// Primitive data type : Immutable
// NON Primitive data type : mutable

// Object example :

let obj1 ={
    id:20,
    naming: "rohit"
}

let obj2 = obj1;
// console.log(obj1);
// console.log(obj2);

obj2.id=30;
console.log(obj1);
console.log(obj2);