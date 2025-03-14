/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let a = 0, b = 1;  // Inicializamos los dos primeros números de Fibonacci
    while (true) {     // Bucle infinito para generar la secuencia sin límite
        yield a;       // Devuelve el valor actual de `a`
        [a, b] = [b, a + b]; // Actualiza los valores usando destructuring
    }
};

/**
 * Ejemplo de uso:
 */
const gen = fibGenerator();
console.log(gen.next().value); // 0
console.log(gen.next().value); // 1
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().value); // 5
console.log(gen.next().value); // 8
