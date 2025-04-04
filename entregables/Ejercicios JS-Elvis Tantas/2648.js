var fibGenerator = function*(a = 0, b = 1) {
    yield a;

    yield* fibGenerator(b, a+b);
    
};
const gen = fibGenerator();
gen.next().value; // 0
gen.next().value; // 1
