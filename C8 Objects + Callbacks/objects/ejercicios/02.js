function actualizarValorPropiedad(objeto, propiedad, valor) {
   // Actualiza el valor de la propiedad del objeto recibidos en la función.
   // Retorna el objeto actualizado.
   // Tu código:
   objeto[propiedad] = valor;

   return objeto;
}

const persona = { nombre: 'Juan', edad: 30 };
const objetoActualizado = actualizarValorPropiedad(persona, 'edad', 31);
console.log(objetoActualizado);
console.log(persona);

module.exports = actualizarValorPropiedad;
