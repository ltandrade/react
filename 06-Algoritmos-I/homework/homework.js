// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  
  var arrF=[1];
  var cont=2
  //para que sea primo solo tiene q ser divisible en 1 y en si mismo//
  while(num>1) {
    if(num%cont===0) {
      num/=cont;
      arrF.push(cont);
    }else{
      cont++;
    }      
  }
  return arrF;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  var aux=1;
  var mayor;
  
  while(aux===1)  {

    aux=0;
      for(i=0;i<array.length-1;i++) {
        if(array[i]>array[i+1]) {
          mayor=array[i];
          array[i]=array[i+1];
          array[i+1]=mayor;
          aux=1;
         }
        }
      }  
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  //1-me posiciono en array[0] y comparo, si el elemento actual es mayo al siguiente
  var aux;
  for(let i=0;i<array.length-1;i++) {
      if(array[i]>array[i+1]) {
        for(var j=i+1;j>0;j--) {
          if(array[j]<array[j-1]) {
            aux=array[j-1]
            array[j-1]=array[j];
            array[j]=aux;
          }
        }
      }
  }
  return array;

}

//


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código: [7,2,9,-4,11]
  //          i 0=7
  //          j 1=2
  var menor;
  var aux;
  var t;
//inicia iteracion poniendo como menor al elemento actual
//luego compara el actual hasta encontrar un elemento menor
//luego pregunta si el Menor es mas chico que el actual

  for(i=0;i<array.length-1;i++) {

      menor=array[i]; 

    for(j=i;j<array.length;j++) {
      if(array[j]<menor) {
        menor=array[j];
        t=j;
        }
      }
      if(menor<array[i]){    
          aux=array[i];
          array[i]=menor;
          array[t]=aux;
      }
    }
return array;    
  }




// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
