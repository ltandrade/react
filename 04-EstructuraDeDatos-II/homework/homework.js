// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

class LinkedList {
  constructor () {
    this._length=0,
    this.head=null;
  }
  add(valor) {
    var nodo= new Node(valor);
    var current=this.head;

    if(this.head===null) {
      this.head=nodo;
    }else {
      while (current.next!==null) {
        current=current.next;
      }
      current.next=nodo;
    }
  this._length++;
  }

  remove() {
    var current=this.head;
    var aux;
    if(this.head===null) return null;
    if(this.head.next===null) {
      aux=this.head;
      this.head=null;
      return aux.value;
    }
    while (current.next.next!==null) {
      current=current.next;
    }
    aux=current.next.value;
    current.next=null;

    if(this._length!==0) this._length--;
    return aux;
  }

  search(key) {
    var current=this.head;
    var acc=0;
    var aux;  

    if (typeof key==="function") {
      if(key(current.value)) return current.value;
      while(current.next) {
        if(key(current.next.value)) return current.next.value;
        current=current.next;
      }
      
      if(current.value===key(current.value)) {
        return current.value;
      }else {
        return null;
            }
    }else
        {
        while(current.value!==key&&acc<=this._length) {
          if (current.next!==null) {
            current=current.next;
          }
          acc++;
        }
        if(current.value===key) {
          return current.value;
            }else {
            return null;
            }
        }
  }
}

function Node(x){
  this.value=x;
  this.next=null;
}

// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
    this.numBuckets=35;
    this.table=new Array(35);
    
}
HashTable.prototype.obj=function (key,value){
  this.key=key;
  this.value=value;
}
HashTable.prototype.hash=function (key) {
    var tot=0;

    for(let i=0; i<key.length;i++) {
      tot= tot + key.charCodeAt(i);
    }

    tot=tot%this.table.length;
    return parseInt(tot);

}

HashTable.prototype.set=function(key, value) {
  //si no es string tira error
  if(typeof (key)!=="string") {
    throw new TypeError 
  } 
  


  //si la posicion determinada por el hash esta vacia, inserta un nuevo objeto en la posicion
  //con .key=key y .value=value
  if(this.table[this.hash(key)]===undefined) {  
    this.table[this.hash(key)]=new this.obj(key,value);
    return;
   }else {
      //si no esta vacia va a verificar si el .key del objeto es igual, reemplaza  su valor
      if(this.table[this.hash(key)].key===key) {
        this.table[this.hash(key)].value=value;
        return;
      }
      
        else{
          for(var i=this.table.length-1;this.table[i]!==undefined&&i>=0;i--){}
          //verifica si .table[i] tiene un espacio vacio 
          if(this.table[i]===undefined) {
            this.table[i]=new this.obj(key, value);
            return
          }else {
            return "Error, no hay mas espacios disponibles en la tabla"
          }
        }
    }
}

HashTable.prototype.get= function(key) {
  var pointer=this.hash(key)  
  if(this.table[pointer].key===key) {
    return this.table[pointer].value;
  }
  else {
    for(var i=this.table.length-1;this.table[i].key!==key&&i>=0;i++) {}

    if(this.table[i].key===key) {
      return this.table[i].value;
    }else {
      return "Error, no se encuentra la key indicada"
    }
  }
}

HashTable.prototype.hasKey= function (key) {
  var aux;
    if(this.table[this.hash(key)].key===key) return true;
    else{
      
      return false;
    }
}
// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
