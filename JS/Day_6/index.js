// primitive data type 

// const num = 10;
// console.log(num)

// // Non Primitive datatype
// const obj ={
//     id:10,
//     balance:200
// }

// obj.id =11;
// console.log(obj);

// let obj2 ={
//     id:20,
//     money:30
// };

// location of obj2 is 800
// location of obj is 6521

// obj =obj2;
// error

// string in js
let str1 = "Hello Coder army";
let str2 = 'mein toh mst hu';
let str3 = 'Aur bhai kya haal chaal';

let price =50

console.log(`price of the tomato is ${price},get is asap`);
console.log(str1,str2,str3);

// String concatenation
let s1= "hello";
let s2 = "Coder Army";
let s3 = s1 + s2;
console.log(s3.length); 
console.log(s1.length); 
console.log(s2.length); 

// "hello Ajit"
console.log('"hello Ajit"')
// 'hello Ajit'
console.log("'hello Ajit'")

msg = "Ajit bhut acha ladka hai bht paise kmayega .\nwo start up se hi kamyega";
console.log(msg)

Comm = "Ajit bhut acha ladka hai bht paise kmayega .\\nwo start up se hi kamyega";
console.log(Comm)

let special = "rohit";
console.log(special[4]);
console.log(special.charAt(2))

// to lowercase
// to uppercase

console.log(special.toLowerCase());
console.log(special.toUpperCase());
let strtemp =special.toUpperCase();
console.log(strtemp);
console.log(special);

let hero ="hello Ajit";
console.log(hero.indexOf("Ajit"));
console.log(hero.lastIndexOf("hello"));
console.log(hero.indexOf("ajit"));
console.log(hero.includes("Ajit"))

let newstring = "helloDon";
console.log(newstring.slice(0,4))
// slice can take -ive index also

console.log(newstring.substring(0,3));
console.log(newstring.slice(-6,5));
console.log(newstring.slice(-2,4));

let str10 = "hello ji kaise ho ji"
console.log(str10.replace("ji","Money"));
console.log(str10.replaceAll("ji","Money"));

let str11 = "money! honey! sunny! funny";
console.log(str11.split("! "))

let str12 = " hello ji ";
console.log(str12);
console.log(str12.trim());