
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
/* 
const text = "Hola grupo Bezos \n";
const text2 = "Otro valor \n" */

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

/* let userinput;
let isValid;

do{
    userinput = prompt("Ingrese un numero entre 1 y 100 ")
    isValid = userinput >= 1 && userinput <=100;
    
}while (!isValid);

console.log(`!Has ingresado un numero valido: ${userinput}`) */


/*CLASE 24 DE ABRIL*/

//ESTRUCTURAS DE CONTROL MEDIANTE METODOS

//FOR EACH
/* let colors = ["red","green","blue"];

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
    cuadrados1.push(number*number)
})
console.log(cuadrados1);

//METODO MAP

let cuadrados = numbers
    .filter(number => number %2 == 0)
    .map(number => number*number)
    .reduce((acumulador, valorActual) => acumulador + valorActual, 0);
console.log(cuadrados); 

//METODO .MAP
cuadrados = numbers.map(number => number * number);
console.log(cuadrados) */



//OBJETOS  CLASE 25 DE ABRIL

/* const cabecera = document.getElementById("cabecera");
console.log(cabecera);
const boton = document.getElementById("boton");
console.log(boton);
 */
/* let persona = {
    nombre: 'Juan',
    edad: 30,
    ocupacion: 'programador',
    saludar:function() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    },
    toString: function(){
        return `${this.nombre}, ${this.edad} años ${this.ocupacion}`;
    }
}

let propiedad = 'mascota';
console.log(persona.nombre);
console.log(persona[propiedad]);
console.log(persona.saludar());
persona.saludar();  

persona.calificacion ="alta";

persona[propiedad] = "gato"

console.log(persona);

Object.defineProperty(persona, "clan",{
    value: 'bezos',
    writable: true,
    enumerable: true,
    configurable: true,
});

console.log(Object.keys(persona));   

persona.clan ="Ma";
console.log(persona);

Object.assign(persona, { ciudad: 'Medellin', Pais: 'Colombia' });
console.log(persona)

console.log(persona.toString());

const number100 = 100;
const boleano = true;
const regexp = /.+/;

console.log(number100.toString());
console.log(boleano.toString());
console.log(regexp.toString()); */


//CLASE 30 ABRIL JSON 

let persona = {
    nombre: 'Juan',
    edad: 25,
    ocupacion: 'Programador',
    hobbies: ['Jugar', 'Nadar', 'Correr'],
   /*  saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    },
    toString: function () {
        return `persona: nombre:${this.nombre}, "edad:" ${this.edad},
        "ocupacion:" + ${this.ocupacion}`;
    } */
}

const json = `{
    "nombre":"Juan",
    "edad":25,
    "ocupacion":"Programador",
    "hobbies":["leer","Programar","Viajar"],
    "direccion":{
        "calle":"123 calle principal",
        "ciudad":"ciudad ejemplo",
        "codigoPostal":"123456"
    }
}`


console.log(json);
let user = JSON.parse(json);
console.log(user);
console.log(user.nombre)


/* console.log(JSON.stringify(persona))
console.log(JSON.stringify(persona,["nombre"]))
console.log(JSON.stringify(persona,["nombre","ocupacion"])) */

let {hobbies, edad, nombre, ocupacion} = persona;

/* console.log(persona.ocupacion);
console.log(ocupacion);
 */

ocupacion = "jugador"

/* console.log(persona.ocupacion);
console.log(ocupacion); */


/* const fullUSer = {
    ...persona,
    power: 25,
    life: 58,

} */

const fullUSer = {
    ...structuredClone(persona),
    power:25,
    life: 58,
}


console.log(persona);
console.log(fullUSer);
console.log(persona.hobbies);
console.log(fullUSer.hobbies);

fullUSer.hobbies[0] = "Program";
console.log(fullUSer.hobbies);
console.log(persona.hobbies);


const user1 ={
    name: "juan",
    role: "streamer",
    attributes:{
        height:183,
        favColor: "blueviolet",
        hairColor: "black",
    }
}

console.log(user1);
console.log(user1.role);
console.log(user1.attributes);
console.log(user1.attributes.favColor);


const numeros = {
    11:1,
    10:2,

}

console.log(numeros[10]);

const {attributes} = user1;
console.log(attributes);

const {attributes: {hairColor}} = user1;
console.log(hairColor);

let {attributes: {height:size}} = user1;
size=25;
console.log(size);


const {name, ...others} =user1;
console.log(others);
console.log(Object.keys(user1));
console.log(Object.values(user1));
console.log(Object.entries(user1));

const keys = ["name", "life", "power", "talk"];
const values = ["juan", 99,
10, function() {return "hola"}];

const entries =[];

for(let i in values){
    const key = keys[i];
    const value = values[i];
    entries.push([key,value]);
}

const newUser = Object.fromEntries(entries);
console.log(entries);
console.log(newUser);