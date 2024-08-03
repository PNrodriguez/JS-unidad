function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  let seen = new Set();

  for (let i = 0; i < numeros.length; i++) {
    if (seen.has(numeros[i])) {
      return numeros[i];
    }
    seen.add(numeros[i]);
  }

  return undefined;

}

module.exports = encontrarElementoRepetido;