// Number, string, boolean, null, underfined, Bigint, Symbol

// Non Primitive data types
// Array, Object, function, date

// let n =10;
// let n2 =20;
// let n3 =50;
// array

// let arr = [10,20,50,"Ajit","mohit"];
// console.log(typeof arr);

// // Object 

// let obj ={
//     user_name : "Ajit",
//     account_number : 3222323,
//     balance: 420

// }
//  console.log(obj);
//  console.log(typeof obj)

// // function -- function ko bhi hum kisi variable ke ander store kr sakte hai ..


// let fun = function(){
//     console.log("Hello Ajit ji")
//     return 12;
// }

// //fun();
// //console.log(typeof fun)
// console.log( fun());

// Type conversion

let account_balance = "100"; 
let num = Number(account_balance); 

console.log(num)

console.log(typeof account_balance); 
console.log(typeof num)

// Boolen convert to number
let x = true;
console.log(Number(x)); 
console.log(typeof x); 

let y = false;
console.log(Number(y)); 
console.log(typeof y)

let account = "100xs";
let bal = "200s"
console.log(Number(account)); 
console.log(Number(bal)) 

// null

let x1 = null;
console.log(Number(x1));

// undefined
let x2;
console.log(Number(x2))

// String ke andar convert
let ab =20;
console.log(typeof String(ab));


let ax = false;
console.log(typeof false)
console.log(typeof String(ax))

// Boolean 
let abc =  "asjdjhfbhfbhf23"
console.log(Boolean(abc));

let abc1 =  ""
console.log(Boolean(abc1));