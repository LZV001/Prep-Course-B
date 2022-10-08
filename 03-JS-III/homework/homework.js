// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acumulador = 0;
    for (var index = 0; index < 11; index++) {
      var acumulador = acumulador + index;
      
    }
    return acumulador;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var i = 0 ;
  var resp = [];
    for (var index = 0; index < array.length ; index++) {
      if (array[index]%2 == 0) {
        resp[i]=(array[index]);  
        i++;     
      } 
      
    }
    return resp;
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var temp = 0 ;
    for (var index = 0; index < array.length ; index++) {
      temp = array[index]**2;
      array[index] = temp;   
    }
    return array;
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  var temp = 0 ;
    for (var index = 0; index < array.length ; index++) {
      temp = temp + array[index];
        
    }
    return temp;

}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  var temp = 0 ;
  var i = 0;
  while (num > 0) {
    
    temp = num % 10; 
    num = num -temp;
    num = num /10;
    i = i + 1;
  }
    return i;
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
