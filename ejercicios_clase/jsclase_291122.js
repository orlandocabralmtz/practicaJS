//** CLASE DEL 29 de  noviembre de 2022 */

var hola=1;
console.log(hola);

var persona = {
    nombre: "orlando",
    edad: 32
}
console.log(persona)


nombre= 234

if (nombre == "string")
console.log("no has introducido un nombre")


/* arrays, arreglos o matrices es una forma ordenada de almacenar una lista de elementos
bajo un solo nombre de variable  */

var verduras = [];
var frutas = ['pera','manzana', 'platano', 'naranja'];

/* acceder a los valores de un arreglo 
se coloca el numero del elementro al que queremos ingresar dentro de los corchetes */
console.log(frutas[1])  //accediendo a MANZANA

/**modificar un valor */
/** se coloca entre corchetes el valor a modificar y el nuevo valor */
frutas[3]= "uvas"; // se modifica el valor de naranja y se cambia por uvas
console.log(frutas)


/***********  M-E-T-O-D-O-S ********/

/**meteodos de arrays */

/**propiedad length- nos devuelve el numero total de elementros dentro del arreglo */
console.log(frutas.length);  //nos devuelve 4

/**push y pop.  */
//PUSH aggrega un elemento al final de una lista
frutas.push("mandarina")  //agrego mandarinas a la varible frutas
console.log(frutas)

//POP elimina el ultimo elemento de la lista (siempre el ultimo elemnto)
frutas.pop(); //elimina mandarinas de la variable frutas
console.log(frutas)


//unshuft y shift  - min 1:50:00 
//unshift agrega un elemento al inicio de la lista
frutas.unshift("mandarinas") //agrega mandarinas al incioo de la variable frutas
console.log(frutas)

//shift borra un elemento al inicio de la lista 
frutas.shift();
console.log(frutas);

/**SPLIT */  //in 1:55:00

//divide una cadena (string) en unamatriz de subcadenas, tomando como referencia donde encuentre un caracter indicado
//cono en un CSV que divide donde haya "comas"

var verduras = "Cebolla,Perejil,Tomate,Calabaza";
console.log(verduras)
var arregloVerduras = verduras.split(','); //divide el string donde hay comas (u otro caracter)
console.log(arregloVerduras); //nueva variable spliteada

/** slice */
//Quita una parte de una cadena y devuelve una nueva cadena
var verduras = ['cebolla','perejil','tomate','calabaza','brocoli']
verduras.slice(1,3);
console.log(verduras)


/** splice */    // min 2:13:00
//sirve para agregar o borrar elementos de un arreglo. Pide un Index y un numero de elemtnos a borrar
var verduras = ['cebolla','perejil','tomate','calabaza','brocoli']
verduras.splice(2,0,"pepino", "limon") //agrega pepino y limon a partir de la posición 2 (tomate) y no borra nada
console.log(verduras)

var verduras = ['cebolla','perejil','tomate','calabaza','brocoli']
verduras.splice(2,1,"pepino","limon") //agrega pepino y limon y borra tomate (posición 1)
console.log(verduras)



/** sort */
//ordena el arreglo de forma ascendente 
var verduras = ['cebolla','perejil','tomate','calabaza','brocoli']
verduras.sort();
console.log(verduras)

//preguntar por que no hace nada. por que marca error
// [2,5,1,3,46,70,34].sort(function(a,b){return a-b})



/** reverse */

//ordena los valores del arreglo al reves de comolos teniamos
var verduras = ['cebolla','perejil','tomate','calabaza','brocoli']
verduras.reverse();
console.log(verduras)


/** concat */
//concatena (une) el contenido de 2 arreglos. No modifica, solo devuelve uno nuevo
var verduras=['cebolla','perejil','tomate']
var frutas=['manzana','pera','platano']
var listaDeCompras = verduras.concat(frutas) //une los 2 arreglos de arriba
console.log(listaDeCompras)