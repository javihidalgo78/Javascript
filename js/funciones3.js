document.getElementById("botonEnviar").addEventListener('click', carnet2)

function carnet2(){
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;

    nombreUsuario = nombreUsuario.trim();



let mensajeTxt = mensajeError(nombreUsuario, edadUsuario);
document.getElementById("resultado").innerHTML = mensajeTxt;
document.getElementById("resultado").style.display = "block";

}

function mensajeError(nombre,edad){
    let mensaje = "";

    if(nombre === ""){
        mensaje+= "<p>Debes introducir un nombre</p>";
    }

switch(true){
    case edad<=0:
        mensaje+= "<p> La edad debe ser un número positivo</p>";
        break;
    case edad>=18:
        mensaje+= "<p> Enhorabuena, puedes sacarte el carnet</p>";
         break; 
    case edad<18:
        mensaje+= "<p> La edad debe ser mayor de 18</p>";
        break;
    case edad>100:
        mensaje+= "<p> Lo siento, es demasiado tarde para sacar el carnet</p>";
        break;
    default:
        mensaje+= "<p>La edad introducida no es válida</p>";
    
}
return mensaje;
}