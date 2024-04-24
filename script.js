/*CLASE 24 DE ABRIL*/

//ESTRUCTURAS DE CONTROL MEDIANTE METODOS

//FOR EACH
let colors = ["red","green","blue"];

colors.forEach((color)=>{
    console.log(color);
})

colors.forEach(color => console.log(color));

let numbers = [1,2,3,4,5,6,7,8,9];
numbers.forEach(number =>{
    let mod = number % 2;
    console.log(`${number} y su modulo es: ${mod}`);
});

let cuadrados1 = [];
numbers.forEach(number =>{
    cuadrados.push(number*number)
})
console.log(cuadrados);

//METODO MAP

let cuadrados = numbers
    .filter(number => number %2 == 0)
    .map(number => number*number)
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(cuadrados);

