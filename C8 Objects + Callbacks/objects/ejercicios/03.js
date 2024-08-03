const agregarNuevaPropiedad = (objeto, propiedad, valor) => {
  // Añade una nueva propiedad al objeto con su respectivo valor pasado por la función.
  // Tu código:

  objeto [propiedad] = valor;
  return objeto;



};

let miObjeto = { nombre: "Juan", edad: 30};
agregarNuevaPropiedad (miObjeto, "profesion", "Druida");

console.log(miObjeto);



module.exports = agregarNuevaPropiedad;
