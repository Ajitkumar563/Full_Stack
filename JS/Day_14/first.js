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

// const customer ={
//     name: "Ajit",
//     age:23,
//     account_number:123,
//     balance:2000,
// };

// // name, aacount_number, changenahi hone chahiye
// Object.defineProperty(customer,"name", "account_number",{
//     writable:false,
// })
// customer.name = "mohit";
// customer.account_number = 10001;

// console.log(customer);

// Object.protoype
const customer ={
    name: "Ajit",
    age:23,
    account_number:123,
    balance:2000,
};
let customer2 = Object.create(customer);
customer2.city = "haridwar";
customer2.place = "Delhi";

Object.defineProperty(customer, "name", {
    enumerable:false,
})

// enumerable: jis bhi key ka enumerable true hga, un sabka access hoga ya print hoga 
// Inherit hoke bhi koi bhi property or key aati hai, uska bhi enumerable true hoga  
for(let key in customer)
    console.log(key);

// console.log(Object.getOwnPropertyDescriptor(Object.prototype, 'toString',));

Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,

})

for(let key in customer)
    console.log(key);
