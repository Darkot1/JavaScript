/*INICIO DE COMANDO PARA IMPRIMIR POR CONSOLA */

/* console.log("Hola grupo!");
console.log(2*5);
console.error("error")
console.warn("warn");
console.info("info")
console.table(
    {"nombre":"juan",
     "edad": 12
    }
)

console.info(
    {"nombre":"juan",
     "Edad":12   }
)

let cantidad= 32;
const valor= 30;
var otroValor=25;
console.log("aqui hay " ,cantidad, " Coders!");
cantidad= 34;
console.log("aqui hay " ,cantidad, " Coders!"); */

/*FIN DE COMANDO PARA IMPRIMIR POR CONSOLA */

/*INICIO TIPO DE DATOS */

/* const text = "Hola grupo bezos";
console.log(text); */
/*Mostrar el tipo de la varible con typeof*/
/* console.log(typeof text);

const numeros = [1,2,3,4,5,6];
console.log(numeros);
console.log(typeof numeros);

const user=null;
const user1= null;
const user2= null;
const user3=null; */
/*FIN DE TIPOS DE DATOS */

/*INICIO FUNCIONES */

/* function saludar() {
    return "hola";
} */

/* 
const saludar = new Function("return 'hola';")
console.log(saludar()) */



/* console.log(saludar()); // llama la funcion
console.log(typeof saludar); // imprime el tipo de dato  
 */

/* function suma(a,b) {
    return a+b;
}

console.log("el resultado de la suma es:",suma(5,3) );
console.log(typeof suma) */

/* const sumar = function suma(a,b) {
    return a+b;
}

console.log("la suma es:", sumar(10,2));


const resultado = sumar(2,3);
console.log(resultado); */

/*Funcion anonima, solo se le quita el nombre de la funcion */
/* const restar = function (a,b) {
    return a-b;
}

const resultadoResta = restar(10,2);
console.log("El resultado de la resta es:",resultadoResta); */

/*Simplificar funcion */

/* const multiplicar = (a,b) => {
    return a*b;
}

const multiplicar = (a,b) => a*b

const resultadoMultipicar = multiplicar(5,2);
console.log("El resultado de la multiplicacion es:",resultadoMultipicar); */

/*CALLBACKS funciones */

/* const fb = () => console.log("Funcion B especificada");

const fa = callback => callback();

fa(fb);

function saludo() {
    return "hola";
}

saludo();

console.log(
    (function saludo() {
        return "hola"   
    })()
)

console.log(
    (() => "hola")()
); */

/*FIN CLASE FUCIONES */

/*INICIO CLASE: STRING */

/* const text1 = "Hola grupo bezos\n";
console.log(text1.length);
console.log(text1[1]);
console.log(text1.charAt(1));
console.log(text1.indexOf("o"));
console.log(text1.indexOf("o",2));
console.log(text1.lastIndexOf("o"));
console.log(text1.lastIndexOf("o",13));
console.log(text1.repeat(5))

const clan = "bezos";
const jornada = "tarde";
console.log("hola clan " + clan + " se encuentran en la jornada de la: "+ jornada);
console.log(`hola clan ${clan}. estan  en la jornada de la: ${jornada}`);

const word = "Palabra en HTML";
const template = `<div class="container">${word}</div>`;
console.log(template);
 */

/*OPERADORES */

/* const x = 10;
const y = 5;
const z = 5;
console.log(x==y || y==z);

const v = false; 
const user4 = null;

console.log(v??z);

if (user4 == null){
    console.log(z);
}

console.log(x??=z);
 */

/* console.log(!v); */

const text = "Hola grupo Bezos \n";
const text2 = "Otro valor \n"

/* console.log(text.split(" "));

const ip = "172.25.24.1"
console.log(ip.split(".") ) */

/* console.log(text.slice(2,8)); */

/* console.log(text);
const texModificado = text.substring(2,8);
console.log(texModificado);

console.log(text.startsWith("d"))
console.log(text.endsWith("\n"))
console.log(text.includes(""))

const email= "  user@user.com  ";
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,3}$/g;
console.log(email.search(regex));


console.log(text.replaceAll("o","a"))

console.log(email.toUpperCase());
console.log(email.toLowerCase());
console.log(email.trim());
console.log(email.trimStart());
console.log(email.trimEnd()); */


//SECCION LUNES 23 DE ABRIL
//---------------------------------------ESCTRUCTURAS DE CONTROL!!!!-------------------------------
//CICLOS FOR
/* for(let i = 0, j=10; i <=5, j>0; i++, j-=2){
    console.log(`i: ${i}, j:${j}`);
} */



//CICLO ANIDADO
/* for (let i = 0; i <3; i++);{
    console.log(`Interacion Externa ${i}`);
    for (let j = 0; j < 4; j++){
        console.log(`Interacion interna ${j}`);
    }

} */

/* let colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++){
    console.log(i + ":"+colors[i]);
}

for(let color of colors){  
    console.log(color);

}

for(let index in colors){
    console.log(index +":"+colors[index]);
} */

//CICLOS WHITE
/* let limit = 10;
let counter = 1;

while(counter <= limit){
    console.log(counter);
    counter ++;

    limit = Math.floor(Math.random()*20)+1;
    console.log(limit)
} */

//CICLO DO WHILE

let userinput;
let isValid;

do{
    userinput = prompt("Ingrese un numero entre 1 y 100 ")
    isValid = userinput >= 1 && userinput <=100;
    
}while (!isValid);

console.log(`!Has ingresado un numero valido: ${userinput}`)


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