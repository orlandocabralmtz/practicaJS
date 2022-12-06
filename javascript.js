/** / var index=0;
//while (index <= 10){
//  console.log(index);
// index++;
// }
   
 // console.log(4<5); */

//  console.log("Hola, ", prompt("dime tu nombre"));


/* var miVariable = null
console.log(miVariable) */

// var saludo = "hola"             CTROL+ K, CTRL + U QUITAR COMMENTS
// console.log(typeof saludo)     CTRL +k, CTRL + C  comentar


/* *****+ESTO ES UN OBJETO LITERAL****
var persona ={
    nombre: "Orlando",
    edad:"30",
    ciudad: "torreon"
};
console.log(persona)  */

/******************************************************* */
// var operacion = 24-1
// var edad = "operacion";
// console.log(operacion)

// var persona ={
//     nombre: "Orlando",
//     edad:"30",
//     ciudad: "torreon"
// }

// alert(persona.nombre);  //accediendo a un valor que esta dentro de un objeto literal



// (10< 11) && (1<2) &&(10<1) 
// (1 != 0)


/*****falsy,  truetly****/

/**if an else */
// if (4<8){
//     console.log("verdadero")
// }
// else{
//     console.log("falso")
// }

// var edad=20;
// if(edad >= 18){
//     console.log("eres mayor de edad")
// } else
// {
//     console.log("no eres mayor de edad")
// }


// var semaforo = "verde"
// if (semaforo =="verde")
// console.log("puedes avanzar")
// else if (semaforo =="amarillo")
// console.log("reduce la velocidad")
// else
// console.log("detente")

/********************************************************* */
// var nombre = prompt("dame tu nombre")
// document.write(nombre){

/********con este codigo obtebgo el valor deun input de HTML */
// function recibir(){
// var clima = document.getElementById("idClima").value;
// document.write("lo que escribiste fue "+ clima);
// }
var msgError = "Respuesta Invalida"

/************LA TAREA ************/
function start(){
var outfit ="Este es tu outfit"
var alerta = "escribe algo valido"
var clima = prompt("Como esta el clima? (Calor, Lluvia o Frio)")
if (clima == "lluvia") {
	var intensidadLluvia = prompt("Llueve mucho? (si/no)")
	if (intensidadLluvia == "si") {
		var inundacion = prompt("Tu colonia ya se inundó? (si/no)") //mover esta parte antes de si es necesario salir
		if (inundacion == "si") {
			var salirLluvia = prompt("Es necesario salir? (si/no)")
			if (salirLluvia == "si") {
				alert(outfit)
				//  document.write("<img src='https://thumbs.dreamstime.com/b/un-monje-budista-joven-guarda-el-sonre%C3%ADr-mientras-que-%C3%A9l-est%C3%A1-remando-su-barco-en-una-calle-inundada-de-bangkok-tailandia-la-ma-112493066.jpg'")
				document.write("<img src='https://thumbs.dreamstime.com/b/un-monje-budista-joven-guarda-el-sonre%C3%ADr-mientras-que-%C3%A9l-est%C3%A1-remando-su-barco-en-una-calle-inundada-de-bangkok-tailandia-la-ma-112493066.jpg'>")
			} else if(salirLluvia =="no"){ //else para inundación
                alert(outfit)
				document.write("<img src='https://www.seguroscatalanaoccidente.com/blog/assets/multimedia/2020/03/Tuberi%CC%81a-rota-y-casa-inundada.jpg'>")
              }
              else 
              alert("escribe algo valido porfa")
		} else if(inundacion =="no") { //else para salirLluvia
            alert(outfit)
			document.write("<img src='https://image.made-in-china.com/155f0j00wMmRtyLGbgkY/Oxford-Cloth-2-Person-Motorcycle-Poncho-Raincoat.jpg'>")
        }
        else
        alert(alerta)
	} else if (intensidadLluvia=="no"){
        alert(outfit)
		document.write("<img src='https://thumbs.dreamstime.com/b/persona-con-paraguas-camina-por-la-lluvia-cruza-una-calle-h%C3%BAmeda-bajo-hojas-de-oto%C3%B1o-en-199114176.jpg'>")
    }
    else 
    alert(alerta)
} else if (clima == "calor") {
	var intensidadCalor = prompt("Hace mucho calor? (si/no)")
	if (intensidadCalor == "si") {
		var sudor = prompt("Ya estas sudando? (si/no)")
		if (sudor == "si") {
			var ubicacionCalor = prompt("Te encuentras en la Playa? (si/no)")
			if (ubicacionCalor == "si") {
                alert(outfit)
				document.write("<img src='https://c.pxhere.com/photos/46/42/beach_beer_bottle_drink_leisure_ocean_outdoors_person-1535449.jpg!d'>")
			} else if(ubicacionCalor=="no"){
                alert(outfit)
				document.write("<img src='https://i.ytimg.com/vi/6QyXtPSL9BI/maxresdefault.jpg'>")
            }
            else
            alert(alerta)
		} else if (sudor=="no"){
            alert(outfit)
			document.write("<img src='https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2019/08/01200451/Panter-Hombre-sin-camisa-memes-1.jpg'>")
        }
        else
        alert(alerta)
	} else if (intensidadCalor=="no") {
    alert(outfit)
		document.write("<img src='https://previews.123rf.com/images/budabar/budabar1708/budabar170800167/84942556-viejo-hombre-disfrutando-de-ba%C3%B1o-en-piscina-al-aire-libre-con-agua-caliente-en-verano.jpg'>")
    }
        else 
        alert(alerta)
} else if (clima == "frio") {
	var intensidadFrio = prompt("Te estas congelando? (si/no)")
	if (intensidadFrio == "si") {
		var salirFrio = prompt("Seguro que quieres salir? (si/no)")
		if (salirFrio == "si") {
			var pinwinos = prompt("Estas viendo pingüinos? (si/no)")
			if (pinwinos == "si") {
                alert(outfit)
				document.write("<img src='https://static.vecteezy.com/system/resources/previews/000/849/517/non_2x/man-taking-penguin-pictures-photo.jpg'>")
			} else if(pinwinos=="no"){
                alert(outfit)
				document.write("<img src='https://www.okchicas.com/wp-content/uploads/2015/10/21-imagenes-que-entienden-los-que-viven-con-frio-4.jpg'>")
            }
            else
            alert(alerta)
		} else if(salirFrio=="no") {
            alert(outfit)
			document.write("<img src='https://services.meteored.com/img/article/aire-frio-polar-vuelve-a-golpear-en-argentina-tiempo-pronostico-bajas-temperaturas-1654863085089_768.jpg'>")
        }
        else 
        alert (alerta)
	} else if(intensidadFrio=="no"){
        alert(outfit)
		document.write("<img src='https://i.pinimg.com/originals/c8/c9/89/c8c9896798bd44989440999c391ae830.jpg'>")
    }
    else 
    alert(alerta)
} else
	alert(alerta)
    setInterval("location.reload()",10000); 
}




/********EJERCICIO 1 ******************/
function ejercicio1(){
var ask = prompt ("Eres Bellisimo/a?")
if (ask=="si")
    document.write("Ciertamente")
    else if (ask =="no")
    document.write("No te creo")
    else
    alert (msgError)
    setInterval("location.reload()",10000); 
}


/****EJERCICIO 2 ************/
function ejercicio2(){
var numero = prompt("Ingrese un numero");
var numero = parseInt(numero);
if (numero % 2 == 0) {
  alert("El numero es divisible entre 2");
} else {
  alert("El numero no es divisible entre 2");
}
setInterval("location.reload()",10000); 
}



/******EJERCICIO 3******** */
function ejercicio3(){
var numero = prompt("Introduce un número");
if (numero % 2 == 0) {
  alert("El número es par");
} else {
  alert("El número es impar");
}
setInterval("location.reload()",10000); 
}

/*****EJERCICIO 4******* */
function ejercicio4(){
var numero = prompt("Introduce un numero");
if (numero == 1000){
    alert("Ganastr un premio");
} else {
    alert("Lo sentimos, sigue participando")
}
setInterval("location.reload()",10000); 
}



/*********EJERCICIO 5 **********/
function ejercicio5(){
var numero1 = prompt("Introduce un número");
var numero2 = prompt("Introduce un número");
if (numero1 < numero2) {
  alert("El número menor es " + numero1);
} else if (numero2 < numero1) {
  alert("El número menor es " + numero2);
}   //Preguntar por que que marca que 10 es menor que 5
setInterval("location.reload()",10000); 
}


/*********EJERCICIO 6 **********/
function ejercicio6(){
var numero1 = prompt("Introduce un número");
var numero2 = prompt("Introduce un número");
var numero3 = prompt("Introduce un número");
if (numero1 > numero2 && numero1 > numero3) {
  alert("El número mayor es " + numero1);
} else if (numero2 > numero1 && numero2 > numero3) {
  alert("El número mayor es " + numero2);
} else if (numero3 > numero1 && numero3 > numero2) {
  alert("El número mayor es " + numero3);
} else {
  alert("Los números son iguales");
}
setInterval("location.reload()",10000); 
}



/*********EJERCICIO 7 **********/
function ejercicio7(){
var dia = prompt("Introduce un día de la semana");
if (dia == "lunes") {
  alert("Hoy es lunes");
} else if (dia == "viernes") {
  alert("Hoy es viernes");
} else if (dia == "sabado" || dia == "domingo") {
  alert("Hoy es fin de semana");
} else {
  alert("Hoy no es lunes, viernes, sábado o domingo");
}
setInterval("location.reload()",10000); 
}


/*********EJERCICIO 8 **********/
function ejercicio8(){
var calificacion = prompt("Ingrese una calificación entre 1 y 10");
if (calificacion < 1 || calificacion > 10) {
  alert("Error: la calificación debe estar entre 1 y 10");
} else if (calificacion < 6) {
  alert("Reprobado");
} else if (calificacion < 9) {
  alert("Regular");
} else if (calificacion < 10) {
  alert("Bien");
} else {
  alert("Excelente");
}
setInterval("location.reload()",10000); 
}


/*********EJERCICIO 9 **********/
function ejercicio9(){
var total = 50;
alert("Buenos dias, el helado cuesta 50 pesos");
var topping = prompt("quieres un topping?");
if (topping=="si") {
    var toppingOreo = prompt("Queires topping de Oreo por 10 pesos?");
    var toppingKitKat = prompt("Quieres topping de KitKat por 15 pesos?");
    var toppingBrownie = prompt ("Quieres topping de Brownie por 20 pesos");
    if (toppingOreo=="si" && toppingKitKat =="si" && toppingBrownie=="si"){
        total = total + 10 + 15 + 20;
        var existenciaOreo = prompt("Hay topping de oreo?")
        var existenciaKitkat = prompt("Hay topping de KitKat?")
        var existenciaBrownie = prompt("Hay topping de Brownie?")
      //  alert("El total es "+ total);
    } else if (toppingOreo=="si" && toppingKitKat =="si" && toppingBrownie=="no"){
        total = total + 10 + 15;
        var existenciaOreo = prompt("Hay topping de oreo?")
        var existenciaKitkat = prompt("Hay topping de KitKat?")
        // if (existenciaOreo =="si" && existenciaKitkat =="si") {
        // total = total + 10 + 15;
        // } else if (existenciaOreo =="si" && existenciaKitkat =="no"){
        //     total= total +10;
        // } else if (existenciaOreo =="no" && existenciaKitkat =="si"){
        //     total= total + 15;
        // } else if (existenciaOreo =="no" && existenciaKitkat =="no") {
        //     alert("El total es "+ total);
        // }
      //  alert("El total es "+ total);
    } else if (toppingOreo=="si" && toppingKitKat =="no" && toppingBrownie=="si"){
        total = total + 10 + 20;
        var existenciaOreo = prompt("Hay topping de oreo?")
        var existenciaBrownie = prompt("Hay topping de Brownie?")
       // alert("El total es "+ total);
    } else if (toppingOreo=="no" && toppingKitKat =="si" && toppingBrownie=="si"){
        total = total + 15 + 20;
        var existenciaKitkat = prompt("Hay topping de KitKat?")
        var existenciaBrownie = prompt("Hay topping de Brownie?")
       // alert("El total es "+ total);
    } else if (toppingOreo=="si" && toppingKitKat =="no" && toppingBrownie=="no"){
        total = total + 10;
        var existenciaOreo = prompt("Hay topping de oreo?")
       // alert("El total es "+ total);
    } else if (toppingOreo=="no" && toppingKitKat =="si" && toppingBrownie=="no"){
        total = total + 15;
        var existenciaKitkat = prompt("Hay topping de KitKat?")
       // alert("El total es "+ total);
    } else if (toppingOreo=="no" && toppingKitKat =="no" && toppingBrownie=="si") {
        total = total + 20;
        var existenciaBrownie = prompt("Hay topping de Brownie?")
       // alert("El total es "+ total);
    } else {
        alert("El total es "+ total);
    }
   
} else {
    alert("El total es "+ total);
}
if (existenciaOreo =="no"){
    total = total - 10;
    //alert("El total es "+ total);
}
if (existenciaKitkat =="no"){
    total = total - 15;
    //alert("El total es "+ total);
}
if (existenciaBrownie=="no"){
    total = total - 20
    //alert("El total es "+ total);
}
alert("El total es de "+ total);
}


/*********EJERCICIO 10 **********/
function ejercicio10(){
var totalcurso = null;
var curso = prompt("Cual curso estas tomando?");
if (curso=="course"){
    total = 4999*2;
} else if (curso=="carrera"){
    total = 3999*6;
} else if (curso =="master"){
    total = 2999*12;
} else {
    alert("Dato Invalido")
}
var beca = prompt("el usuario cuenta con una beca?")
if (beca=="si"){
    var tipoBeca = prompt("Cual beca tiene?")
    if (tipoBeca=="facebook"){
        total = total*.80;
    }else if (tipoBeca =="google"){
        total = total*.85;
    }else if (tipoBeca=="jesua"){
        total = total*.50;
    }
} else {
    alert("El total a pagar es "+ total)
}
alert("El total a pagar es "+ total)
setInterval("location.reload()",10000); 
}





// var total = 50;
// alert("Buenos dias, el helado cuesta 50 pesos")
// var topping = prompt("quieres un topping?")
// if (topping=="si"){
//     var toppingOreo = prompt("Quieres toppíng de oreo por 10 pesos?")
//     if (toppingOreo =="si"){
//         total= 50 + 10;
//         var toppingKitKat = prompt ("quieres topping kitkat por 15 pesos?")
//         if (toppingKitKat == "si"){
//             total = total + 15;
//             var toppingBrownie =prompt("Quieres topping de brownie por 20 pesos?")
//             if (toppingBrownie=="si") {
//                 total = total + 20;
//                 alert (total);
//             } else {
//                 alert("El total es " + total)
//             }
//         } else {
//             var toppingBrownie =prompt("Quieres topping de brownie por 20 pesos?")
//             if (toppingBrownie=="si") {
//                 total = total + 20;
//                 alert (total);
//             } else {
//                 alert("El total es " + total)
//             }
//         }
//     } else {
//         var toppingKitKat = prompt ("quieres topping kitkat por 15 pesos?")
//         if (toppingKitKat == "si"){
//             total = total + 15;
//             var toppingBrownie =prompt("Quieres topping de brownie por 20 pesos?")
//             if (toppingBrownie=="si") {
//                 total = total + 20;
//                 alert (total);
//             } else {
//                 alert("El total es " + total)
//             }
//         } else {
//             alert("El total es " + total) 
//             var existenciaOreo = prompt("tienes Topping de oreo?")
//             var existenciaKitkat = prompt("tienes topping de kitkat?")
//             var existenciaBrownie =prompt("Tienes topping de Brownie?")
//             if (existenciaOreo == "si" && existenciaKitkat =="si" && existenciaBrownie == "si"){
//                 alert = (total)
//             }       
//         }
//     }
// } else {
//     alert ("El total es 50 pesos")
//    }