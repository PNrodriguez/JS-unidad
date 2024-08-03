function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:

  const resultado = [];
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] === "string") {
      resultado.push(array[i].toUpperCase());
    } else {
      resultado.push(array[i]);
    }
  }

  return resultado;

}

module.exports = convertirStringAMayusculas;
