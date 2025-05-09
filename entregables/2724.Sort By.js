/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.slice().sort((a, b) => fn(a) - fn(b));
    
};

const arr = [5, 4, 1, 2, 3];
const fn = (x) => x;
const sortedArr = sortBy(arr, fn);
console.log(sortedArr); // [1, 2, 3, 4, 5]