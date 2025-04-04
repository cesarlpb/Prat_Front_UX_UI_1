function debounce(fn, t) {
    let timeout;
  
    return function(...args) {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        fn(...args); 
      }, t);
    };
  }