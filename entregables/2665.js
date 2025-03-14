/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {

    let countNum = init;

    return {
        increment: function(){
            countNum++
            return countNum
        },
        decrement: function(){
            countNum--
            return countNum
        },
        reset: function(){
            countNum = init
            return countNum

        },
    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */