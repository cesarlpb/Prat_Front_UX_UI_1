//Write a function argumentsLength that returns the count of arguments passed to it.

/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
let argumentsLength = function(...args) {
    return args.length; // devolver variable.lenght
};


 argumentsLength(1, 2, 3); // 3

