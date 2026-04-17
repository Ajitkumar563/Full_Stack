let user ={
    name : "Ajit",
    age : 30
}

console.log(Object.getOwnPropertyDescriptor(user,"name")) 
Object.defineProperty(user,'name',{
    writable:false,
});