document.getElementById("botonEnviar").addEventListener('click', carnet);

function carnet(){
    let nombreUsuario = document.getElementById("nombre").value;
    let edadUsuario = document.getElementById("edad").value;

//Elimina los espacios del principio y el final de un string
nombreUsuario = nombreUsuario.trim();

//validar datos de entrada

if(nombreUsuario === "" || edadUsuario <0  || edadUsuario >100){
    alert("por favor, asegurate de que los datos introducidos sean correctos");
}else{
    let mensaje = "";
    if(edadUsuario >= 18){
        mensaje = `${nombreUsuario} puede sacarse el carnet`;
        document.getElementById("resultado").style.backgroundColor = "rgb(146, 218, 195)";
    }else{
        mensaje = `${nombreUsuario} no puede sacarse el carnet`;
        document.getElementById("resultado").style.backgroundColor ="rgb(225, 139, 142)";
    }

    document.getElementById("resultado").innerHTML = `<p>${mensaje}</p>`;
    document.getElementById("resultado").style.display = "block";
}

}

document.getElementById("nombre").addEventListener('focus', function(){
    document.getElementById("resultado").style.display = "none";

})