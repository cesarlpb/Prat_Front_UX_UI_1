function debounce(fn, t) {
    let timeout;
  
    return function(...args) {
      clearTimeout(timeout); // Cancela cualquier llamada anterior
      timeout = setTimeout(() => {
        fn(...args); // Ejecuta la función después de t milisegundos
      }, t);
    };
  }
  