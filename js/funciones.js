//let suma edades = sumar3(edad1, edad2);
//pedir nombre y edad al usuario

let nombre = prompt("Dime tu nombre");
let edad = prompt("Dime tu edad");

//Crear una función que reciba un nombre y una edad y devuelve un mensaje diciendo si el usuario puede sacar el carnet de conducir o no

function crearMensaje(nombre, edad){
    let resultado = "";
    if (edad >= 18){
        resultado = `${nombre} puedes sacar el carnet de conducir`;
    }else{
        resultado = `${nombre} no tienes edad suficiente para sacar el carnet de conducir`;
    }
    return resultado;
}

let mensaje = crearMensaje(nombre, edad);
document.getElementById("mensaje").textContent = mensaje;