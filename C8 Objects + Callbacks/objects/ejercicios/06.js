const contarPropiedades = (objeto) => {
  // Cuenta y retorna el total de propiedades que tiene el objeto.
  // PISTA: Puedes iterarlo usando el bucle for-in.
  // Tu código:

  let contador = 0;
  for (let propiedad in objeto) {
    if (objeto.hasOwnProperty(propiedad)) {
      contador++;

    }
  }

  return contador;

};
// todo dentro de {} de mi variable let y mi objeto, se cuenta numericamente
let miObjeto = { nombre: "juan", edad: 30, profesion: "Druida", hobby: "falopa" }

console.log(contarPropiedades(miObjeto));

module.exports = contarPropiedades;
