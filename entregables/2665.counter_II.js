function createCounter(init) {
    let current = init;

    function increment() {
        return ++current;
    }
    function decrement() {
        return --current;
    }
    function reset() {
        current = init;
        return current;
    }

    return {
        increment, decrement, reset
    };
}


const counter = createCounter(0);
console.log(counter.increment());
console.log(counter.increment());

console.log(counter.decrement());
console.log(counter.decrement());
console.log(counter.reset());



