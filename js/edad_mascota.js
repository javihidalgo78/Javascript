//crear una aplicación que calcule la edad de un perro en años humanos.
//1 año de perro equivala a 7 años de humano
//Validaciones: Comprobar que el dato 
//Bucle do while
//se ejecuta al menos una vez y luego comprueba la condición

let esValida=false

do{
    let numero = prompt("Cuantos años tiene tu perrito?");
    numero = parseInt(numero);
    
    if(!isNaN(numero) && numero > 0 && numero < 30){
        esValida=true
        document.getElementById("mensaje").textContent = "Voy a decirte la edad de tu mascota en años de humano: " + numero * 7 + " años ";  
    }else{
        alert("No has introducido una edad válida")
        }

}while(esValida==false)

//función es una porción de código que se puede reutilizare en cualquier parte del programa.
//crear una función que compruebe si la edad de la mascota es correcta o no

function sumar(){
    console.log(2 + 2)
}

function sumar2(num1, num2){
    console.log(num1, num2);
}

sumar2(4, 30);
sumar2(45, 90);
//funciones que devuelven valores
//sumar 3 devuelve la suma de los dos parámetros

function sumar3(num1, num2){
    return num1 + num2;
}

let resultado = sumar3 (5, 23);

let edad1 = 10;
let edad2 = 45;

let sumaEdades = sumar3(edad1, edad2);

