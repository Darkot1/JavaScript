
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

/* let persona = {
    nombre: 'Juan',
    edad: 25,
    ocupacion: 'Programador',
    hobbies: ['Jugar', 'Nadar', 'Correr'],
    saludar: function () {
        console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años`);
    },
    toString: function () {
        return `persona: nombre:${this.nombre}, "edad:" ${this.edad},
        "ocupacion:" + ${this.ocupacion}`;
    }
} */

/* const json = `{
    "nombre":"Juan",
    "edad":25,
    "ocupacion":"Programador",
    "hobbies":["leer","Programar","Viajar"],
    "direccion":{
        "calle":"123 calle principal",
        "ciudad":"ciudad ejemplo",
        "codigoPostal":"123456"
    }
}` */


/* console.log(json);
let user = JSON.parse(json);
console.log(user);
console.log(user.nombre) */


/* console.log(JSON.stringify(persona))
console.log(JSON.stringify(persona,["nombre"]))
console.log(JSON.stringify(persona,["nombre","ocupacion"])) */

/* let {hobbies, edad, nombre, ocupacion} = persona; */

/* console.log(persona.ocupacion);
console.log(ocupacion);
 */

/* ocupacion = "jugador" */

/* console.log(persona.ocupacion);
console.log(ocupacion); */


/* const fullUSer = {
    ...persona,
    power: 25,
    life: 58,

} */

/* const fullUSer = {
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
 */


//CLASE ARRAYS 02 MAYO 

/* let letters = new Array("a", "b", "c");
console.log(letters);
letters = new Array(3);
const array = [];
console.log(letters);


const numbers = [1,2,3,4,5];
console.log(numbers[1]);
console.log(numbers.at(1));


const props = ["a",1,true];
console.log(props)
console.log(props.length);
props.forEach(prop => {
    console.log(prop); 
});


props.push("b","c","d"); //agrega elementos al final de la lista 
props.unshift(5, 6, 4);  //Agrega elementos al inicio de la lista
console.log(props);

props.pop();    //Elimina el ultimo elemento de la lista
console.log(props); 
props.shift();  //ELimina el primer elemento de la lista 
console.log(props)


let letter = undefined;
let letter2 = undefined
let texto = "abc hola";
letter = Array.from(texto);
console.log(letter);
letter2 = [...texto];
console.log(letter2)
let otroletter = texto.split("");
console.log(otroletter); */


let textnumers = "123456";
/* const number =Array.from(textnumers,(numero) => Number(numero));
console.log(number) */

/* const number =Array.from(textnumers, Number);
console.log(number) */


/* const numeros = [...textnumers].map((numero)=>Number(numero));
console.log(numeros) */


/* const numeros = [...textnumers].map(Number);
console.log(numeros)

const arrayNumbers = textnumers.split("");
console.log(arrayNumbers)
const newText =arrayNumbers.join("");
console.log(newText) */

/* numeros.push(7,8,9);
console.log(numeros);
numeros.push([10,11,12]);
console.log(numeros[9][0]); */

/* const seconPart = [6,7,8];
const thirdPart = [9,10,11];
const newArray = numeros.concat(seconPart,thirdPart);
console.log(numeros);
console.log(newArray);

console.log(newArray.indexOf(5));
console.log(newArray.lastIndexOf(8));
console.log(newArray.includes(5)) */

/* const names = [
    {name: "Maria", age:20},
    {name: "Bernardo", age:21},
    {name: "Pancracio", age:22},
    {name: "Andrea", age:23},
    {name: "Sara", age:24},
    {name: "Jorge", age:25},
    {name: "Yurani", age:26},
    {name: "Ayoze", age:27},
]; */
/* 
const findElement = (array, searchedAge)=>{
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element.age ===searchedAge) return element;
    } return null;
}       
 */

/* const findElement = (array, searchedAge)=>{
    let result = null
    array.forEach(element => {
        if(element.age ===searchedAge)
        result = element;
        
    });
    return result;
} */


/* const findElement = (array, searchedAge)=>{
    for (const element of array){
        if (element.age ===searchedAge) return element;
    } return null


};
console.log(findElement(names, 26));


//CLASE MAYO 06 

//ARRAY METODOS

const element = ["A", "B", "C", "D","E","F"];
element.reverse();
console.log(element)


const names1 = ["Alberto", "Zoe", "ana", "Mauricio","Bernardo"];
console.log(names1);
console.log(names1.sort());

const sortednames = names1.toSorted();
console.log(sortednames);


let prueba = "hola";
const toCapitalCase = word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(toCapitalCase(prueba)); */


/* let numerosPositivos  =[1,2,3,4,5];
let numString;
let num;
let todosPositivos = numerosPositivos
    .every(number => number > 0);

console.log(todosPositivos); */
 

/* let numerosNegativos  =[-1,-2,-3,-4,5];
let numString;
let num;
let todosPositivos = numerosNegativos
    .some(number => number > 0);

console.log(todosPositivos); */


/* const array1 = [0,1,2, [3,[4,8]]];
console.log(array1);
console.log(array1.flat())
console.log(array1.flat(2));


const numeros = [1,2,3,4,5];
let resultado = numeros.flatMap(numero =>{
    return [numero, numero*2];
});
console.log(resultado);

let usuarios = [
    {id:1, nombre: "Juan", hobby: "comer"},
    {id:2, nombre: "Ana", hobby: "dormir"},
    {id:3, nombre: "Pedro", hobby: "vagar"},
    {id:4, nombre: "Ana", hobby: "leer"}
]

let usuarioConId2 = usuarios.find(usuario =>{
    return usuario.id === 2;
});

console.log(usuarioConId2);


let nombre = "Juan"
let buscarUsuarioPorNombre = usuarios.find( usuario =>{
    return usuario.nombre ===nombre;
})

console.log(buscarUsuarioPorNombre); */

/* const salida = prompt("Ingrese su nombre")

let buscarUsuarioPorNombre2 = nombre =>{
    return usuarios.find(usuario =>{
        return usuario.nombre === nombre
    });
};

console.log(buscarUsuarioPorNombre2(salida));
console.log(buscarUsuarioPorNombre2("Ana"));
console.log(buscarUsuarioPorNombre2("Juan"));

let buscarIdPorNombre2 = nombre =>{
    return usuarios.findIndex(usuario =>{
        return usuario.nombre === nombre;
    });
};

console.log(buscarIdPorNombre2(salida));


let buscarLastUsuarioPorNombre2 = nombre =>{
    return usuarios.findLast(usuario =>{
        return usuario.nombre === nombre
    });
};

console.log(buscarLastUsuarioPorNombre2(salida)); */

/* 
let palabras = ["hola", "mundo", "hola", "JavaScript", "mundo", "JavaScript", "hola"];
let frecuenciaPalabras = palabras
    .reduce((acumulador, palabra)=>{
        if (palabra in acumulador) acumulador[palabra]++;
        else acumulador[palabra] =1;
        return acumulador;
    },{});

console.log(frecuenciaPalabras);


const numbers = [1,8,2,32,9,7,4];
console.log(numbers.reduce((first, second) => first-second));
console.log(numbers.reduceRight((first, second) => first-second));

let a=5;
let b=10;

[a,b] = [b,a];
console.log("Despues del intercambio");
console.log("a =", a);
console.log("b =", b);


function obtenerCoordenadas() {
    return [43.33, -7.656];
}

console.log(obtenerCoordenadas());
let coordenadas = obtenerCoordenadas();
let latitud1 = coordenadas[0];
let longitud1 = coordenadas[1];
console.log(coordenadas);
console.log(latitud1);
console.log(longitud1);

let [latitud, longitud] = obtenerCoordenadas();
console.log(latitud, longitud);

const debug = (...param) => console.log(param);
debug(1,2,3,4,1,2,3,4) */



const parrafo1 = document.getElementById("parrafo1");
const parrafo2 = document.getElementById("parrafo2");
const boton = document.getElementById("boton");
console.log(parrafo1)
console.log(boton)


const divs = document.querySelectorAll("div");
console.log(divs);
console.log(divs[0]);
console.log(divs[0].innerHTML);
console.log(divs[0].firstChild.nodeValue);
divs[0].firstChild.nodeValue = "Nuevo texto"



boton.addEventListener("click", () => {
    parrafo1.classList.toggle("elementoPrincipal");
    parrafo1.classList.toggle("elementoSecundario");
    parrafo2.classList.toggle("elementoSecundario");
    parrafo2.classList.toggle("elementoPrincipal");

})




//CLASE MAYO 08 DOM

const elements = document.getElementsByClassName("saludo");
console.log(elements);

const container = document.getElementsByName("container");
console.log(container);

const tag = document.getElementsByTagName("div");
console.log(tag);


//CREAR ELEMENTOS DESDE JAVASCRIPT

const p = document.createElement("p");
p.innerText = "Parrafo dentro del nuevo div";
let div = document.createElement("div");
div.appendChild(p);

let body = document.getElementsByTagName("body");
console.log(body);
//body[0].appendChild(div);
tag[0].append(p)

console.log(div)
/* 
const estado = p.isConnected;
console.log(estado) */



const fragment = document.createDocumentFragment();

for (let i = 0; i < 10; i++) {
    const div = document.createElement("div");
    div.classList.add("divsLocos");
    div.textContent = `item Numero ${i +1}`;
    fragment.appendChild(div);
    
}

document.body.appendChild(fragment);



const boton1 = document.createElement("button");
boton1.innerText = "Nuevo DIV";
boton1.id = "contenedor1";
boton1.classList.add("btn","btn-primary");

console.log(boton1.hasAttributes())
console.log(boton1.hasAttribute("src"));
console.log(boton1.getAttributeNames());
console.log(boton1.getAttribute("id"));
boton1.setAttribute("type","button");
boton1.setAttribute("id", "butonName")
console.log(boton1.getAttribute("type"))
console.log(boton1.getAttribute("id"))

console.log(boton1)

//boton1.classList = "btn btn-primary";
console.log(boton1.classList.length)
console.log(boton1.classList.item(1))
boton1.classList.toggle("btn-success") //Agrega una clase si no existe o elimina la clase si esa existe
console.log(boton1.innerText);
console.log(boton1.outerText);
console.log(boton1.innerHTML);
console.log(boton1.outerHTML);
console.log(boton1.textContent)
console.log(boton1.nodeName);

/* document.body.appendChild(boton1);



const tbody = document.getElementsByTagName("tbody")[0];
const tr = document.createElement("tr");
tbody.appendChild(tr);
const td = document.createElement("td");
td.innerText = "Sebastian";
const td1 = document.createElement("td");
td1.innerText = "Serna"
const td2 = document.createElement("td");
td2.innerText = "Bezos"
tr.appendChild(td); 
tr.appendChild(td1);
tr.appendChild(td2); */







const personas = [
    {
    nombre:"Sebastian",
    apellido:"Serna",
    clan:"Bezos",
    edad:24,
    id:1,
},
    {   
    nombre:"Juan",
    apellido:"Caridad",
    clan:"Bezos",
    edad:29,
    id:2,
},
    {
    nombre:"Santiago",
    apellido:"mendoza",
    clan:"Bezos",
    edad:22,
    id:3,
},
    {
    nombre:"Jorge",
    apellido:"Monte",
    clan:"Bezos",
    edad:21,
    id:4,

},
];

/* const tbody = document.querySelector("tbody");

personas.forEach(persona => {
    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerText = persona.nombre;
    tr.appendChild(td1);

    const td2 = document.createElement("td");
    td2.innerText = persona.apellido;
    tr.appendChild(td2);

    const td3 = document.createElement("td");
    td3.innerText = persona.clan;
    tr.appendChild(td3);

    const td4 = document.createElement("td");
    td4.innerText = persona.edad;
    tr.appendChild(td4);

    tbody.appendChild(tr);
}); */


const populateTableBody = (data) => {
    const tbody =  document.getElementById("tbody");
    tbody.innerHTML= '';

    data.forEach(item => {
        const row = document.createElement("tr");

        Object.values(item).forEach(value =>{
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
};

populateTableBody(personas);