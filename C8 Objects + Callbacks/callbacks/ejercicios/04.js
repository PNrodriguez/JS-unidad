function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // NOTA: no debes retornar nada.
   // Tu código:

   if (typeof cb === "function") {
      const suma = arrayOfNumbers.reduce((total, num) => total + num, 0);

      cb(suma);
   }

}

module.exports = sumarArray;
