//let notas = [3, 8, 6, 2, 10, 1];
//let alumnos = ["David", "Inma", "Jesús", "Reich", "Lucía", "Marisol", "Antonia"];


//document.getElementById("resultado").textContent = notas;

//para acceder a un elemento del array:
// notas ^[1]

//document.getElementById("resultado2").textContent = notas[1];

//Mostrar el nombre y la nota del tercer alumno
//salida = alumnos[2] + " ha sacado un " + notas[2]
//document.getElementById("resultado2").textContent = salida;

//Mostrar un mensaje diciendo si está aprobado o suspenso



//salida = alumnos[3] + " ha sacado un " + notas[3]
//document.getElementById("resultado3").textContent = salida;

//Mostrar un mensaje aleatorio con una frase cada vez que carge el html

let frases = [
    "Hoy vas a tener suerte",
    "Más te vale quedarte en tu casa",
    "El amor llamará a tu puerta",
    "Compra un cupón que termine en 7",
]

let numFrases = frases.length;

let numAleatorio = Math.random() * frases.length;

numAleatorio = parseInt(numAleatorio);
let mensaje = frases[numAleatorio];
console.log = numAleatorio;

document.getElementById("frases").textContent = mensaje;

function probarSuerte(){
    location.reload();
}
 document.getElementById("probar").addEventListener("click", function() {
    //generarFrase();
    location.reload();
    document.body.style.backgroundColor = "C1C1C1"
 }
);