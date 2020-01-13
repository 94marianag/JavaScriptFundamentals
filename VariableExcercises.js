// Madame zazu
let city = "Canadá";
let children = 1;
let husbands = 1;
let work = "Philips";
let award = "La mamá del año";
let age = 38;

console.log(" a la edad de", age, "vas a vivir en", city, 
"con", children, " hijo", ",", husbands, "esposo", 
"trabajando en", work, "y con el premio de", award);


// Calculadora de edad
let resultado;

function resultadoedad(year, edad){
    return year - edad;
}
console.log(resultadoedad(2020, 1994));


// Calculadora de figuras geometricas.
//let stars = " ";
//for (i=0 ; i<=10; i++){
//console.log("stars", i , stars);
//stars = stars + "*";
//}

let s=0;
let stars = " ";
while(s<=10) {
    console.log("stars", s , stars);
    stars += "*";
s++;
}

let f=0;
let starss = " ";
do{
    console.log("stars", f , starss);
    starss += "*";
f++;

} while(f<=10)



// Águila o Sello

// intercambiando variables 
let a = 'red';
let b = 'blue';

console.log(a);
console.log(b);

//Tablas de Multiplicar
let n=1
for (i=1 ; i<=10 ; i++){
    console.log("Tabla del", n);
    n = n+1;
    
    for (e=1 ; e<=10 ; e++){
        a = i*e;
        console.log(i, "x" , e, "=", a);
    }
}

// Function Declaration
//function move(){
//}
// *** Function expression
//Function expression named
//let moveement = function move(){    
//};

//anonymous function expression
//let run = function(){
//}
//run();

//Arrow function
//let walk = () => move ();

function miprimerafuncion (){
    console.log("Hola Mundo!!");
}
miprimerafuncion();

//function suma (){
  //  console.log(arguments);
    //let result = 0;
    //for(let param of arguments){
      //  result += param;
    //}
    //return result;
//}
//console.log(suma (1,2,3));

//function pot (potencia, ...args){
  //  console.log(args);
//}
//console.log(pot(1,2,3));

let pepito = {
    gender: "hombre",
    eyes: "negros",
    estatura: 1.90,
    colorPiel: "brown",
};
console.log("pepito", pepito);

let pepita = {
    ...pepito,
    gender: "mujer",
};
console.log("pepita", pepita);

function suma (first, ...bananas){
    
    let result = first;
    for(let todos of bananas){
        result += todos;
    }
    return result;
}
console.log(suma (2,2,10,10));

function potenciacion(poten, valu1, ...valores){
    console.log(poten);
    console.log(valu1);
    console.log(valores);
}
potenciacion(1);

let color = "red";
let themecolor = "blue";
let defaultcolor = color || themecolor;

console.log(defaultcolor)

function totalpayment(monto, interes= 3.5, years= 4){
let montowithinteres = (monto*interes/100) + monto;
let totalperyears = (montowithinteres / years);
    return totalperyears;
}
console.log(totalpayment(1000, 4.5, 6));