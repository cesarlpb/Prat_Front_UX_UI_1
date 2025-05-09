function createHelloWorld() {
    return function() {
      return "Hello World";
    };
  }
  const helloWorldFunction = createHelloWorld();
  console.log(helloWorldFunction()); 