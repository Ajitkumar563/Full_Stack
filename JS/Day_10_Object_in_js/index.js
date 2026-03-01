// how to create object

// const obj = {
//     0:20,
//     1:50,
//     name:"Ajit",
//     account_balance:430,
//     gender: "Male",
//     age: 30,
//     undefined:40,
//     null:"mohan",
// }

// console.log(obj);
// console.log(typeof obj);

// console.log(obj.name);
// console.log(obj.account_balance);
// console.log(obj.gender);
// console.log(obj.age);

// console.log(obj["gender"]);
// console.log(obj["account_balance"]);
// console.log(obj['0']);
// console.log(obj[0]);
// console.log(obj[1]);
//console.log(obj);

// const arr =[20,50, 70];
// console.log(arr[0]);
// console.log(arr[1],obj[1]);

// console.log(obj["undefined"]);
// console.log(obj["null"]);

// //delete
// delete obj.name;
// console.log(obj);

// //modify or quotes
// obj.name= "Ajit1";
// console.log(obj)

// // third method 
// class people{
//     constructor(na, ag, gen){
//         this.name = na;
//         this.age = ag;
//         this.gender = gen;

//     }
// }
// let per1 = new people("Ajit", 20, "Male");
// let per2 = new people("Aman",30, "Female")
// let per3 = new people("Ram", 40, "Male")
// console.log(per1, per2, per3);


let obj ={
    name : "Ajit",
    age: 30,
    account_balance : 420,
    gender:"male",

};

// keys
const arr = Object.keys(obj);
console.log(arr);

//values
const arr1 = Object.values(obj);
console.log(arr1);

//keys : values
const arr2 = Object.entries(obj);
console.log(arr2)

//assign
const obj1 ={a:1,b:2};
const obj2 = {c:3,d:4};
const obj4 = {e:5,f:6};

const obj3 = Object.assign({},obj1,obj2,obj4);
// const obj3 = Object.assign({},obj1,obj2,obj4);
console.log(obj3,obj1);  // obj1 has changed because not putting/assign target value

console.log(obj1.a) 