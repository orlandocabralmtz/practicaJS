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
} 
    





 
       
        
        
//             document.write("ok pues usa esto")
//             else 
//                 document.write("ok este es tu outfit")
//             }
//         else
//             document.write("acuestese pues")
//     }   else
//             document.write("tons usa esto")
    
// } else if (clima == "calor") {
//     var intensidadCalor = prompt("Hace mucho calor?")
//     if (intensidadCalor == "si") {


//         var ubicacionCalor = prompt("Estas en la playa?")
//         if (ubicacionCalor = "si")
//             document.write("lleguele a la playa pues")
//         else
//             document.write("ok tons ponte esto pal calor")
//     } else { //else NO hace calor
//         var sed = prompt("traes reseca la garganta?")
//         if (sed = "si")
//             document.write("quedese en la casa y tomese unas cawamas")
//         else
//             document.write("tomese una cokita en boldsa")
//     }




// } else if (clima == "frio") {
//     var intensidadFrio = prompt("te estas congelando?")
//     if (intensidadFrio = "si") {
//         var pinwinos = prompt("estas viendo pinwinos?")
//         if (pinwinos == "si")
//             document.write("tan en el polo norte we")
//     } else {
//         var salirFrio = prompt("Seguro que quieres salir?")
//         if (salirFrio = "si")
//             document.write("ta bien ponte esto")
//         else
//             document.write("mira ponte esto")
//     }
// }