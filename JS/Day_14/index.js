let obj ={
    name:"Ajit",
    age: 30,
    amount: 433,
    city: "fbd"
};

// for in loop , i can iterate over keys in an object

// for(let key in obj)
// {
//     console.log(key, obj[key]);

// }    

// Object.keys(obj)
// console.log(Object.keys(obj));

// let obj2 = Object.create(obj);

let obj2 = Object.create(obj);
obj2.money = 420;
obj2.id ="Ajit";
// console.log(obj2);
console.log(Object.keys(obj2));
for(let key in obj2)
{
    console.log(key);
}    