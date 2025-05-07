/** 
 Dado un número entero n, devuelve una función contador. 
 Esta función contador inicialmente devuelve n y 
 luego devuelve 1 más que el valor anterior cada vez 
 que se llama posteriormente (n, n + 1, n + 2, etc.).
 */
 
 /**
 * @param {number} n
 * @return {Function} counter
 */
 
 let createCounter = function(n) {
    let counter=n;
    return function() {
        return counter++;
        
    };
};

const counter = createCounter(10)
 console.log(counter());
 console.log(counter());
 console.log(counter());
 