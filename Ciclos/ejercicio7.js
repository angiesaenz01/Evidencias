const readline = require('readline');

// Creamos la interfaz readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Definimos una función para sumar los números ingresados por teclado
function sumarNumeros() {
    let suma = 0;

    // Utilizamos la función recursiva para seguir pidiendo números hasta que se ingrese un cero
    const leerNumero = function() {
        rl.question('Ingrese un número (ingrese 0 para terminar): ', function(numero) {
            numero = parseFloat(numero);

            // Verificamos si el número ingresado es cero, si lo es, cerramos la interfaz readline y mostramos el resultado
            if (numero === 0) {
                rl.close();
                console.log("La suma de los números ingresados es:", suma);
            } else {
                // Sumamos el número ingresado a la suma acumulada
                suma += numero;
                // Llamamos nuevamente a la función para seguir solicitando números
                leerNumero();
            }
        });
    };

    // Iniciamos el proceso de lectura del número inicial
    leerNumero();
}

// Llamamos a la función para comenzar el proceso
sumarNumeros();