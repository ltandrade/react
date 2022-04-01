// resolve estos ejercicios usando recursión

// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
class BinarySearchTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  //insert
  insert(value) {
    if (this.value > value) {
      if (this.left === null) {
        this.left = new BinarySearchTree(value) ;
      } else {
        this.left.insert(value);
      }
      
    }
    if (this.value < value) {
      if (this.right === null) {
        this.right = new BinarySearchTree(value);
      } else {
        this.right.insert(value);
      }
    }

  }
  //contains
  contains(value) {
    if(this.value===value) return true;
    if(this.left&&this.right) return (this.right.contains(value)||this.left.contains(value));
    if(this.left&&(this.right===null)) return this.left.contains(value);
    if(this.right&&(this.left===null)) return this.right.contains(value);
    if(this.right===null&&(this.left===null)) return false;
  }
  //depthFirstForEach


  depthFirstForEach(cb, com) {
    
    
    switch(com) {
      case "in-order": 
        if(this.left!==null) this.left.depthFirstForEach(cb,com)
        cb(this.value);
        if(this.right!==null) this.right.depthFirstForEach(cb,com)
        break;
      
      case "pre-order":
        cb(this.value);
        if(this.left!==null) this.left.depthFirstForEach(cb,com)
        if(this.right!==null) this.right.depthFirstForEach(cb,com)
        
        break;
      
      case "post-order": 
      
        if(this.left!==null) this.left.depthFirstForEach(cb,com)
        if(this.right!==null) this.right.depthFirstForEach(cb,com)
        cb(this.value);
        
        
        break;
      default:
        if(this.left!==null) this.left.depthFirstForEach(cb,com)
        cb(this.value);
        if(this.right!==null) this.right.depthFirstForEach(cb,com)
        
      }
    
    }


  //breadthFirstForEach
  breadthFirstForEach(cb,array) {
    if(!array){
      var array=[];
    }
    
    if(this.left) array.push(this.left);
    if(this.right) array.push(this.right);
    cb(this.value);

    if(array.length>0) {
      array.shift().breadthFirstForEach(cb, array)
    }
  }

  //size
  size() {
    var sum=1;
    if(this.left!==null) {
      
      sum=sum+(this.left.size());
      
    }
    if(this.right!==null) {
      
      sum=sum+(this.right.size());
      
    }
    return sum;
  }


}








// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
