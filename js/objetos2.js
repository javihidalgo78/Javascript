//Crear un array de objetos con datos de los alumnos
//Cada alukmno contiene las claves: nombre, nota, tienePracticas, edad

//const alumnos = []:
//const alumnos = {
//    nombre: "Inma",
//   nota: 7,
//    tienePrácticas: false,
//}
//alumnos.push(alumno);

const alumnos = [
    {nombre: "Inma", nota: 7, tienePracticas: true, edad: 22},
    {nombre: "Rocío", nota: 7.5, tienePracticas: true, edad: 23},
    {nombre: "Ivan", nota: 7, tienePracticas: true, edad: 21},
    {nombre: "Javi", nota: 7, tienePracticas: true, edad: 18},
    {nombre: "Marisol", nota: 7, tienePracticas: false, edad: 17},
    {nombre: "Jesus", nota: 6, tienePracticas: true, edad: 22},
]

console.log(alumnos);

//Mostrar por pantalla el primer elemento del array
document.getElementById("mensaje").textContent = alumnos[0].nombre + " ha sacado un " + alumnos[0].nota;

alumnos.forEach( alumno => {
    //en cada iteración del bucle tenemos acceso a un elemento del array en la variable alumno

console.log(alumno.nombre);
//Mostrar el nombre, la edad , la nota, la edad y si tiene prácticas
datos = `<li>${alumno.nombre} ha sacado un ${alumno.nota}`; 
if(alumno.tienePracticas){
    datos += " y tiene practicas ";
}else{
    datos += " y no tiene practicas";
}
datos += "</li>";
document.getElementById("listaAlumnos").innerHTML +=  datos;

})

