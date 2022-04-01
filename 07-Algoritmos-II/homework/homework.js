// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  //* para encontrar el pivote usar matf.floor(math.random()*array.length)
  //* si array.length=2 va a ordenar sus elementos y devolverlo
  //* si array.length=1 debe devolver el array

  // console.log("---NUEVA EJECUCION---");

  var auxL=[];
  var auxR=[];  
  var auxP=[];

  var piv=Math.floor(Math.random()*array.length);

  if(array.length>1) {
    
    // console.log("Este es el pivote: " , array[piv])

    for(var i=0;i<array.length;i++) {
      
      if(array[i]>array[piv]) {
        auxR.push(array[i]); 
      }if(array[i]<array[piv]) {
        auxL.push(array[i]);
      }if(array[i]===array[piv]){
        auxP.push(array[i]);
      }
    // console.log("este es el PIVOTE:  ", array[piv]); 
    // console.log("izquierdo:  ", auxL);
    // console.log("derecho:  ", auxR);
    }
    //ahora valido, recursiono y concateno
    
  }else{
    return array;
  }
  
  return (quickSort(auxL).concat(auxP)).concat(quickSort(auxR));
}

  function mergeSort(array) {
    // Implementar el método conocido como mergeSort para ordenar de menor a mayor
    // el array recibido como parámetro
    // Devolver el array ordenado resultante
    // Tu código:
    //*usar una funcion auxiliar para mergear los arrays
    if(array.length<2)return array;
    var pointer=Math.floor(array.length/2);
    // var pointer=array.length/2
    var arrR=[];
    var arrL=[];

    var merge=function(arr1,arr2) {
    var arrM=[];
      // if(arr1===undefined||arr2===undefined) {
      //   return arr1.concat(arr2)
      // }else {
          while(arr1.length+arr2.length>0) {
              
              
              if(arr1[0]<=arr2[0]||(!arr2[0]&&arr1[0])) {
                  arrM.push(arr1.shift());
              }
              if(arr1[0]>arr2[0]||(!arr1[0]&&arr2[0])) {
                  arrM.push(arr2.shift());
              }
          }
      // }
      console.log(arrM);
      return arrM;
    }

    ///comienza mergeSort() main function
    
    
    // for(let i=0;i<=array.length-1;i++) {
    //   if(i<=pointer) {
    //     arrL.push(array[i]);
    //   }else {
    //     arrR.push(array[i])
    //   }
    // }

    arrL=array.slice(0, pointer);
    arrR=array.slice(pointer);

    if(arrL.length>1){
      arrL=mergeSort(arrL)
    }
    if(arrR.length>1) {
      arrR=mergeSort(arrR)
    }


    return merge(arrL,arrR);


  }

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
