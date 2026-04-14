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

// const obj1 ={
//     name: "Ajit",
//     age:23,
//     account_number:32201
// };

// Object.defineProperty(obj1, 'account_number', {
//     writable:false

// })

// obj1.account_number =2001;
// console.log(obj1.account_number);

const customer ={
    name: "Ajit",
    age:23,
    account_number:123,
    balance:2000,
};

// name, aacount_number, changenahi hone chahiye
Object.defineProperty(customer,'name',{
    writable:false,
})
customer.name = "mohit";
customer.account_number = 10001;

console.log(customer);