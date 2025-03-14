/**
Given an array arr and a function fn, return a sorted array sortedArr. 
You can assume fn only returns numbers and those numbers determine 
the sort order of sortedArr. sortedArr must be sorted in ascending 
order by fn output.
 */


/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
   
};

// el .slice sirve para hacer una copia del array y no modificar el original
/**el .sort((a, b) => fn(a) - fn(b)); ordena de menor a mayor
 *  compara los números de dos en dos y los va poniendo en el orden correcto
 * 
    ✅ .sort(...) → Ordena el arreglo.
    ✅ (a, b) => ... → Función flecha que compara dos elementos.
    ✅ fn(a) - fn(b) → Usa fn para calcular los valores y 
    restarlos para decidir el orden.ç
 * compara los números de dos en dos y los va poniendo en el orden correcto
*/

const arr = [5, 4, 1, 2, 3];
const fn = (x) => x;
const sortedArr = sortBy(arr, fn); 
console.log(sortedArr);