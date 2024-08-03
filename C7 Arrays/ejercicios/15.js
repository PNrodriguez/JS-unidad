function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  let encontrarIndiceMayor = 0;
  let valorMaximo = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > valorMaximo) {
      encontrarIndiceMayor = i;
      valorMaximo = array[i];
    }
  }

  return encontrarIndiceMayor;
}

module.exports = encontrarIndiceMayor;
