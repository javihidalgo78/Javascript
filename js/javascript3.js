//Booleano
//Es un tipo de dato que puede tener dos valores

//Condicionales
/*
 Sintáxis:
 if(condición){
    instrucciones a ejecutar
    }
*/

let nombre = "Andres";
let tienePermiso = false;
let salida;

//Mostrar por pantalla Andrés tiene permiso si realmente tiene permiso.

if(tienePermiso){
    salida = nombre + " si tiene permiso "
    document.getElementById("mensaje").textContent = salida;
}else{
    salida = nombre + " NO Tiene permiso";
    document.getElementById("mensaje").textContent = salida;
}

/*
else (condicion){
codigo que se ejecuta cuando la condicion es falsa
}
*/

let alumno = "María";
let nota = 10;

//Mostrar por pantalla si el alumno esta aprobado osuspenso
let aprobado = nota > 5;

if(aprobado){
    salida = alumno + " ha aprobado la asignatura";
    document.getElementById("mensaje").textContent = salida;
}else{
    salida = alumno + " está suspenso";
    document.getElementById("mensaje").textContent = salida;
}


//Mostrar por pantalla si (alumno) está aprobado o suspenso

let estaAprobado = nota >= 5;
if(estaAprobado){
    salida = alumno + " esta aprobado";
}else{
    salida = alumno + " está suspenso";
    document.getElementById("resultado").textContent = salida;
}

//Mostrar por pantalla si la nota es igual a 5 el mensaje Esta aprobada por los pelos

if(nota == 5){
 salida = alumno + " ha aprobado por los pelos";
}else if(nota == 10){
    salida =  alumno + " ENHORABUENA por la matricula de Honor";

}else if(nota > 5){

salida = alumno + " está aprobada";

  }else{
    salida = alumno + " está suspenso"; 
    
  }
  document.getElementById("mensaje").textContent = salida;
