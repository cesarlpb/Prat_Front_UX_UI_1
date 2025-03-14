
Array.prototype.groupBy = function(fn) {
  // Objeto donde vamos a almacenar el resultado
  const result = {};

 
  this.map(item => {

    //recorremos el array y para cada item recogemos la key
    const key = fn(item);

    // si en el objeto de resultados no esta la key, añadimos el key y lo iniciamos como array vacio
    if (!result[key]) {
      result[key] = [];
    }

    // Añadimos el elemento
    result[key].push(item);
  });

  // Devolvemos el objeto resultante con los grupos
  return result;
};
