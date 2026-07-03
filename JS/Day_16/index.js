// reduce 

// const arr = [10,20,30,40,50]

// const result = arr.reduce(callback function, initialization)
// const result = arr.reduce((acc,curr)=>{
//     acc =acc+curr;
//     return acc;
// },0)

// console.log(result);

let arr = ["arange","apple","banana", "orange", "apple", "banana", "orange", "grape"]

// final result ek object ke form
//orange:3
// apple:2
// acc ={}
const result =arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
        acc[curr]=1;

},{})