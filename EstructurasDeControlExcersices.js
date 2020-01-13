//Tablas de Multiplicar
/*let n=1
for (i=1 ; i<=10 ; i++){
    console.log("Tabla del", n);
    n = n+1;
    
    for (e=1 ; e<=10 ; e++){
        a = i*e;
        console.log(i, "x" , e, "=", a);
    }
}
*/

// Landscape or Portrait
/*function islandscape(width, heigth){
    if(width > heigth) 
        return true;
        
    else  {
       return false;
        }
    }
    console.log(islandscape (400, 500));
*/

// FizzBuzz algoritmo
/**
 * Divisible entre 3 => Fizz
 * Divisible entre 5 => Buzz
 * Divisible entre 3 y 5 => FizzBuzz
 * No ivisible entre 3 o 5 => input
 * No es un numero => 'Not es un numero'
 * 
 */
/*function Algoritmo(NumeroRecibido){
let numero = NumeroRecibido;

    if (typeof(numero) !== 'number') {
        console.log("No es un número");
        return;
    }
  
    if (numero % 3 == 0 && numero % 5 == 0)
    console.log("FizzBuzz");

    else if (numero % 3 == 0)
    console.log("Fizz");

    else if (numero % 5 == 0 )
    console.log("Buzz")

    else 
    console.log("Input");
}
Algoritmo(3);
*/

//Ejercicio Callback
/*1.- Crear una función que se llame doHomeWork, esta función va a recibir como parámetro una función. 
2.- Dentro de la funcion doHomeWork cree un loop que imprima los números del 1 al 100, terminando el loop mande a llamar la funcion que recibe como parametro. 
3.- La función que recibe como parámetro debe de enviar una alerta que diga: The homework has been done!
*/
doHomework();
function doHomework(fn){
    
 for (i = 1 ; i<=100 ; i++) {
 console.log(i);
 }
homeworkdone();
}

function homeworkdone (){
    alert ("Homework done!");
}


 // limite de velocidad
 /**hacer una funcion que reciba la velocidad a la que se dirige 
  * un automóvil y compararla con el limite de velocidad
  * Limite de velocidad = 70
  * 5 -> 1 point
  * Math.Floor
  * 12 point -> licencia suspendida
  */

let puntosmalos =0;
let comparacion =0;
const limitevelocidad = 70;

function cuantavelocidad (velocidad){
    if (velocidad > limitevelocidad) {

    comparacion = ((velocidad-limitevelocidad)/5);
    comparacion = Math.floor(comparacion);
    console.log("Puntos malos: ", comparacion);
    }

    if (comparacion >= 12)
    console.log("Licencia Suspendida");
}
cuantavelocidad(70);

  // Par or non
  /**
   * Funcion que reciba un numero e imprima desde 0 
   * hasta el numero dado y espacifique sies par o non
   * example: n = 3
   * 0 par
   * 1 non
   * 2 par
   * 3 non
   */

   // Suma de multiplos de 3  y 5
   /**
    *  sum(10)
    *  3 -> 3, 6, 9
    *  5 -> 5, 10
    *  sum(10) = 33
    */

    // Show the stars
/*    let s=0;
    let stars = " ";

        while(s<=10) {
            console.log("stars", s , stars);
        stars += "*";
        s++;
}
*/

    // Print Primes  

