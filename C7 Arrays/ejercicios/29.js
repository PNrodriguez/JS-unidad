function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:

  if (numeros.length === 0) {
    return null;
  }

  // Ordenar el array en orden ascendente
  numeros.sort((a, b) => a - b);

  // Comprobar si hay un número faltante en la secuencia
  for (let i = 0; i < numeros.length - 1; i++) {
    if (numeros[i + 1] !== numeros[i] + 1) {
      return numeros[i] + 1;
    }
  }

  // Comprobar si hay un número faltante al inicio o al final de la secuencia
  const min = numeros[0];
  const max = numeros[numeros.length - 1];
  for (let i = min; i <= max; i++) {
    if (!numeros.includes(i)) {
      return i;
    }
  }

  return null; // Si no hay números faltantes
}

module.exports = encontrarNumeroFaltante;