
# Ejercicios

## JavaScript

### Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;            //crea variable x dentro de la funcion "c"
  console.log(x);  //imprime 10
  console.log(a);  //imprime el valor pasado por c(a,b,c)
  var f = function(a, b, c) {
    b = a;               //asigna el valor de a a-> b
    console.log(b);   //imprime el valor de "a"
    b = c;        //asigna el valor de "c" ->"a"
    var x = 5;   // crea variable"x" dentro de la funcion "f()" y le asigna el valor 5
  }
  f(a,b,c);   //llama a la funcion ingresandole tres parametros
  console.log(b);  //el valor de "b" ha sido reemplazado por el de "c" si la funcion c.f()es invocada
}
c(8,9,10);   //imprime primero x(10) - despues imprime a(8) - despues imprime b(8) - despues imprime b(9) debido a q b fue cambiada solo dentro de la funcion f pero no fue llamada)
console.log(b); //imprime b(cuyo valor es 10)
console.log(x);  //imprime x(1)
```

```javascript
console.log(bar);  //imprime undefined
console.log(baz);  //da error
foo();   //imprime 'Hola!'
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); //imprime "Franco"
```

```javascript
var instructor = "Tony";
console.log(instructor);
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor);
   }
})();
console.log(instructor);//imprime Tony dado que no llamó a la funcion q modifica el nombre
```
```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor);  //imprime "The Flash"
    console.log(pm);          
}
console.log(instructor); //imprime "The Flash"
console.log(pm);   //imprime "Franco" dado que pm(The Flash) fue declarado con let dentro del if statement
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3"         //2
"2" * "3"       //undefined
4 + 5 + "px"    //9px
"$" + 4 + 5      //$9
"4" - 2          //2 
"4px" - 2        //error NaN
7 / 0            //infinito
{}[0]            //[0] 
   parseInt("09")//9
5 && 2            //2
2 && 5            //5
5 || 0            //5
0 || 5            //5
[3]+[3]-[10]      //-4??? preguntar (lo vi en consola y da 23)
3>2>1             //deberia ser true pero en consola da false, preguntar
[] == ![]         //deberia dar false pero en consola da true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a);
   console.log(foo());

   var a = 1;
   function foo() {
      return 2;
   }
}

test();  //undefined, 2 // arroja undefined dado q se trata de imprimir "a" antes de haberla declarado y asignado valor. dado que a existe, se le asigna el valor undefined (y no arroja error). eso aplica solo a variables, cuando se llama a imprimir una funcion, JS "ordena" las funciones sin importar donde se las haya declarado.
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false);  //imprime "undefined" dado que se pasa a la funcion getFood() un parametro false. ya que no se cumple la condicion, nunca se retorna un valor asociado a snack (snack no existe dentro de la funcion getFood() si el valor ingresado es false)
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
   var fullname = 'Juan Perez';
   var obj = {
      fullname: 'Natalia Nerea',
      prop: {
         fullname: 'Aurelio De Rosa',
         getFullname: function() {
            return this.fullname;
         }
      }
   };

console.log(obj.prop.getFullname()); //imprime "Aurelio de Rosa" dado que la funcion getFullname hace referencia con el this al objeto "prop" (que es a la vez una propiedad del objeto "obj")

var test = obj.prop.getFullname;

console.log(test());//imprime Juan Perez debido a que el .this esta haciendo referencia al objeto global cuya variable fullname es "Juan perez"
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1);
   setTimeout(function() { console.log(2); }, 1000);
   setTimeout(function() { console.log(3); }, 0);
   console.log(4);
}

printing();  // 1 4 3 2 - se ehecuta de esta manera debido a que "delega" el console log de 2 y 3. Opera:
//imprime 1 , delega 2, delega 3, imprime 4, 3 termino primero asi que imprime 3, imprime 2
```
