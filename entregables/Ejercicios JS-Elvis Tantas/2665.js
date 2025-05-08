var createCounter = function(init) {
    let i = init;
    return{
        increment: () => ++i,
        decrement: () => --i,
        reset: () => i =init
    };

    
};