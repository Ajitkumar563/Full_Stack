const arr = [2,34,1,4,6,"Ajit",true,2];
//  console.log(arr[0]);
//  console.log(arr.length);

//  // at is latest, negative index le leta hai
//  console.log(arr.at(0));

//  const newarr = arr;
//  console.log(newarr==arr);

// push 
// arr.push(30);
// arr.push(50);
// console.log(arr);

// //pop , pop(dlt) the last element from array
// arr.pop();
// arr.pop();
// arr.pop();
// console.log(arr);

// // unshift , add element at start
// arr.unshift(10);
// arr.unshift(30);
// console.log(arr);

// //delete operation
// delete arr[0];
// console.log(arr);
// console.log(arr.indexOf("true"));
// console.log(arr.lastIndexOf(2));
// console.log(arr.includes(10));

//slice
// console.log(arr);
// console.log(arr.slice(2,5));
// console.log(arr);


// splice 
// console.log(arr.splice(2,5)); // 
// console.log(arr);

// splice(starting_index,total_element_delete,add value)
// arr.splice(2,3,"money",90,30,70);
// console.log(arr);
// console.log(arr.toString());
// console.log(arr.join("*"));

//concat
let arr1 =[2,35.6,5,7];
let arr2 =[3,8,9];
let arr4 =[45,56,32];
// let arr3 = arr1.concat(arr2,arr4);
// console.log(arr3[5]);

arr1.push(arr2);
console.log(arr1);

arr1.push(arr4);
console.log(arr1);
console.log(arr1[1]);
console.log(arr1[3]);
console.log(arr1[4]);
console.log(arr1[5]);
console.log(arr1[4][1]);
console.log(arr1[4][2]);
console.log(arr1[5][2]);


