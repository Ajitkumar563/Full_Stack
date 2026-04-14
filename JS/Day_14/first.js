// let obj = {};

// obj.name = "Ajit";
// // key value writable enumerable configurable

// console.log(Object.getOwnPropertyDescriptor(obj,'name'))
// // writable = false, value ko kya mein change kar sakta hu

// obj.name = "mohit"
// //configurable = false

let obj = {};

Object.defineProperty(obj, 'name',{
    value : "Ajit",
    writable:true,
    enumerable: true,
})