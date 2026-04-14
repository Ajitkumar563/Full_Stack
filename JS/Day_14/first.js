// let obj = {};

// obj.name = "Ajit";
// // key value writable enumerable configurable

// console.log(Object.getOwnPropertyDescriptor(obj,'name'))
// // writable = false, value ko kya mein change kar sakta hu

// obj.name = "mohit"
// //configurable = false

// let obj = {};

// Object.defineProperty(obj, 'name',{
//     value : "Ajit",
//     writable:false,
//     enumerable: true,
//     configurable:true,
// })

// Object.defineProperty(obj, "name",{
//     writable:false,
// })

// obj.name ="mohit";

// console.log(obj);