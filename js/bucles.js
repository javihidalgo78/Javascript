//for (let i = 0; i < 5; i++) {
//    console.log("Iteración número:", i);}



//Array va entre corchetes y sus elementos van separador por comas 
//se accede a ellos con su indice que comienza en 0

//const frutas = ["manzana", "pera", "melocotón"];
//objetos van entre llaves y sus propiedades van separadas por comas
//se accede a ellos por su nombre

//console.log(frutas.lenght);

//Crear un bucle que muestre los números del 1 al 10
//for(let i = 1; i <=10; i++){console.log("Iteracion número:", i);}

//Crear un bucle que muestre la tabla del 5
//for(let i = 1; i <=10 ; i++){
//    console.log("5 x " + i + " =", i*5);
//}
//Pedir el nombre al usuario
//let nombre = prompt("Dime tu nombre");
    //document.getElementById("mensaje").textContent = "Buenos Días " + nombre;

//Pedir el número al usuario
//let numero = prompt("Dime un número");
//numero = parseInt(numero);
//console.log(numero);
//parseInt(numero)
//console.log(numero)

//if(isNaN(numero)){
//    alert("No has introducido un número");
//}else{
//    document.getElementById("resultado").textContent = "Voy a mostrar la tabla de multiplicar de: " + numero;
//    document.getElementById("mensaje").textContent = "Voy a mostrar la tabla de multiplicar de: " + numero;
    
//    let resultadotxt = "";
//    for(let i=1; i <=10 ; i++){
//        resultadotxt += numero + " x " + i + " = " + numero * i + "<br>";
//    }

//    document.getElementById("resultado").innerHTML = resultadotxt;
//}   

// pedir al usuario la edad de la mascota y mostrar la edad en años humanos
// 1 año de perro = 7 años de humano
//let numero = prompt("Cuantos años tiene tu perrito?");
//numero = parseInt(numero);
//console.log(numero);
//parseInt(numero)
//console.log(numero)

//if(isNaN(numero)){
//    alert("No has introducido un número");
//}else{
    
//    document.getElementById("mensaje").textContent = "Voy a decirte la edad de tu mascota en años de humano: " + numero *7 + " años ";
  //  }
  //  if(!isNaN(numero) && numero > 0 && numero < 30){
  //      document.getElementById("mensaje").textContent = "Voy a decirte la edad de tu mascota en años de humano: " + numero * 7 + " años ";
   // }else{
      //  alert("No has introducido una edad válida")
   // }
    //document.getElementById("resultado").innerHTML = resultadotxt;


  //  document.getElementById("resultado").textContent = numero + " x " + 1 + " = " + numero * 1;

//operador +=
//let nombre = "Juan";
//nombre += "Pepe";
//nombre = nombre + "Pepe";
//nombre = nombre + "Pepe";

//operador ++
//let contador = 0;
//contador = contador + 1;

//Bucle while
//Se ejecuta mientras la condición es verdader
//let contador = 0;
//while(contador < 5){
//  console.log("Iteración Número", contador);

//    contador++;

//}

//mostrar por consola utilizando el bucle while los 100 primeros números pares comenzando por 0
// 0, 2, 4, 6, 8, 10, 12, 14, 16, 18

let contador = 0;
while(contador <= 200){
    console.log("Numeros pares hasta el 200", contador);

    contador=contador+2;
}

//bucle do while
//se ejecuta al menos una vez y luego comprueba la condición
let contador2 = 0;
do{
    HTMLFormControlsCollection.log("contador:" + contador 2)
}while(contador2 < 5);