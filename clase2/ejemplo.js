const objetos =  [
    {
     manzanas:3,
     peras:2,
     carne:1,
     jugos:5,
     dulces:2
    },
    {
     manzanas:1,
     sandias:1,
     huevos:6,
     jugos:1,
     panes:4
    }
   ];

const newArray = [];

objetos.forEach((objeto)=>{
   const keys = Object.keys(objeto);
   keys.forEach(key =>{
    if (!newArray.includes(key)) newArray.push(key)
})
})

console.log(newArray);

console.log("");

objetos.forEach((objeto)=>console.log(Object.values(objeto)))

console.log("");

let total=0;
objetos.forEach((objeto)=>{
    let valores = Object.values(objeto);
    for (let i = 0; i < valores.length; i++) {
        total = total + valores[i]
    }
})

console.log("El total de productos vendidos es de " + total + " productos.");
