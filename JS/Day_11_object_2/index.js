// let obj1 = {
//     a:1,
//     b:2
// }
// console.log(obj1)

// let obj2 =obj1;
// // shallow copy 

// obj2.a =10;
// console.log(obj2,obj1);

// // deep copy
// let obj3= structuredClone(obj1);
// obj3.a = 20;
// console.log(obj3, obj1);

//  Nested object
// const user ={
//     name:"Ajit",
//     Balance : 420,
//     address : {
//         pincode:12334,
//         city : "fbd"
//     }
// }
// console.log(user.address)
// console.log(user.address.pincode);

// structureclone --- 
// const user2 = Object.assign({},user);
// console.log(user2);
// user2.address.pincode = 535355;
// console.log(user.address.pincode);
// console.log(user.address);

// Destructuring of an object
let obj = {
    name : "Ajit",
    money : 456,
    balance : 34,
    age : 23,
    adhar : "hyht445",
};

// const {name, balance, age} = obj;
// console.log(name, balance);

// const{name : full_name ,balance: amount, age:Umar} = obj;
// console.log(full_name, amount, Umar);

// const{name, age,...obj1} = obj;
// console.log(name,age);
// console.log(obj1);