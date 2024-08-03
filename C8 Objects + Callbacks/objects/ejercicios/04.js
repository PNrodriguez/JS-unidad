function verificarPropiedad(objeto, propiedad) {
   // Verifica si el objeto posee la propiedad recibida.
   // Retorna true si la tiene, sino retorna false.
   // PISTA: puedes usar el método hasOwnProperty().
   // Tu código:

   return objeto.hasOwnProperty(propiedad);

}

let miObjeto = {nombre: "Juan", edad: 30};

console.log(verificarPropiedad(miObjeto, "nombre"));
console.log(verificarPropiedad(miObjeto, "profesion"));

module.exports = verificarPropiedad;
