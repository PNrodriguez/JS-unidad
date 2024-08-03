function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:

  const filtrarNumerosPares = [];
  for (var i = 0; i < array.length; i++) {

    if (typeof array[i] === "number" && array[i] % 2 === 0) {
      filtrarNumerosPares.push(array[i]);
    }
  }

  return filtrarNumerosPares;

}

module.exports = filtrarNumerosPares;
