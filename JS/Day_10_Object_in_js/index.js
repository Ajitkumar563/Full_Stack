// how to create object

const obj = {
    0:20,
    1:50,
    name:"Ajit",
    account_balance:430,
    gender: "Male",
    age: 30,
    undefined:40,
    null:"mohan",
}

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

const arr =[20,50, 70];
console.log(arr[0]);
console.log(arr[1],obj[1]);

console.log(obj["undefined"]);
console.log(obj["null"]);

//delete
delete obj.name;
console.log(obj);

//modify or quotes
obj.name= "Ajit1";
console.log(obj)

// third method 
class people{
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;

    }
}
let per1 = new people("Ajit", 20, "Male");
let per2 = new people("Aman",30, "Female")
console.log(per1, per2);


