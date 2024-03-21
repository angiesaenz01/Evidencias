// Dados dos números naturales, el primero menor que el segundo, generar y mostrar todos los números comprendidos entre ellos en secuencia ascendente
// Definir los dos números naturales
const numeroInicial = 5;
const numeroFinal = 12;

// Verificar que el primer número sea menor que el segundo
if (numeroInicial < numeroFinal) {
    // Iterar sobre los números comprendidos entre el primero y el segundo
    for (let i = numeroInicial + 1; i < numeroFinal; i++) {
        console.log(i);
    }
} else {
    console.log("El primer número debe ser menor que el segundo.");
}