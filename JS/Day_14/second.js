// all is an object
// 0 : 10,
// 1:20,
// 2:30,
// 3:40,
// 4:50,
// name: "Ajit",
// age:20,

const arr = [10,20,30,40,50];
arr.name = "ajit";
arr.age = 20;
for(let index=0; index<arr.length;index++)
    console.log(index, arr[index]);
for(let key in arr){
    console.log(key);
}