// Lo que ejecuta al cargar la pagina
// alert("Abro la pagina primero")

//Declarar variables

let nombreAlumno = "Manolo";
let apellidoAlumno = "Perez";
let edad= 28;
let calificacion = 8;


//alert("Hola" );

console.log("Hola" + " " + nombreAlumno + " " + apellidoAlumno + " " + "has sacado un" + " " + calificacion + " " + "este trimestre");

calificacion = 9.5;

console.log("Hola" + " " + nombreAlumno + " " + apellidoAlumno + " " + "has sacado un" + " " + calificacion + " " + "este trimestre");

console.log(`Hola ${nombreAlumno} has sacado un ${calificacion} este trimestre`);

console.log("Hola " + nombreAlumno + "has sacado un " + calificacion + " este trimestre");

//OPERACIONES NUMÉRICAS

let producto = "Jamón Ibérico";
let precio = 100;
const iva = 21;
let precioConIva = precio + precio * iva / 100;


//Mostrar por consola: El (producto) cuesta (precio+iva) €
console.log(precioConIva);
console.log("El " + producto + " cuesta " + precioConIva + "€" )

//Bajar el precio de los productos un tanto por ciento que tenemos en la variable oferta y volver a mostrar el precio

let oferta = 10;
let descuento = precio * oferta  / 100;
let precioConDescuento = precio - descuento;
let pvp = precioConDescuento + (precioConDescuento * iva / 100);

console.log("OFERTA FLASH El " + producto + " cuesta " + pvp + "€" )

//Llega la navidad, la empresa quiere repartir los jamones entre los empleados, muestra cuanto jamones le corresponden a cada empleado y cuantos jamones sobran

let empleados = 10;
let jamones = 23;

let reparto = parseInt(23/10)
let sobra = 23%10;

console.log("Por Navidad os repartimos los jamones que no se han vendido, cada uno se lleva " + reparto + " y sobran " + sobra + " ¡Feliz Navidad!")