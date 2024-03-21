// Escribir un programa que sume los cuadrados de los cien primeros números naturales, mostrando el resultado en pantalla
// Variable para almacenar la suma de los cuadrados
let sumaCuadrados = 0;

// Iterar sobre los cien primeros números naturales
for (let i = 1; i <= 100; i++) {
    // Calcular el cuadrado de cada número y sumarlo a la variable sumaCuadrados
    sumaCuadrados += i * i;
}

// Mostrar el resultado en pantalla
console.log("La suma de los cuadrados de los cien primeros números naturales es:", sumaCuadrados);