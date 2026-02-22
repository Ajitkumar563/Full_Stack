// primitive data type 

const num = 10;
console.log(num)

// Non Primitive datatype
const obj ={
    id:10,
    balance:200
}

obj.id =11;
console.log(obj);

let obj2 ={
    id:20,
    money:30
};

// location of obj2 is 800
// location of obj is 6521

obj =obj2;
// error
