//let a = 10;
//let b = 7;
//let resultado;

//console.log("suma",a+b);
//console.log("resta",a-b);
//console.log("multiplicación",a*b);
//console.log("división",a/b);
//console.log("residuo",a%b);

//Otra forma de realizar las operaciones;
//console.log("suma",a += b);
//console.log("resta",a - = b);
//console.log("multiplicación",a *= b);
//console.log("división",a /= b);
//console.log("residuo",a %= b);

//Operadores de comparación
//let num1 = 4;
//let num2 = 5;

//console.log(num1 > num2);
//console.log(num1 < num2);
//console.log(num1 >= num2);
//console.log(num1 <= num2);

//Operadores de Igualdad
//let x = true;
//let y = 1;
//console.log("comparación ==",x == y);
//console.log("comparación ===",x === y);

//console.log("comparación !=",x != y);
//console.log("comparación !==",x !== y);

//Operador ternario 
//let c = 10;
//let d = 7;

//let result = c > d ? "c mayor" : "d mayor"
//console.log(result);

//Operadores Lógicos AND, OR, NOT !
//console.log(true || "Mariana");
//console.log(undefined || "Mariana");
//console.log(undefined || "" || null || 10);

//Ejemplo Color por dafault
//let color = "red";
//let defaultcolor = color || "blue";
//console.log(dafaultcolor);

//Ejercicio, invertir los colores
//let color1 ="red";
//let color2="blue";

//console.log(color1);
//console.log(color2);

//let result = color1>color2 ? "red" : "blue";
//console.log(result);
//let result2 = color1>color2 ? "blue" : "red";
//console.log(result2);


//Estructuras de Control
let hora= 8;
let mensaje;

function saludo(hora){
    if((hora >= 6) && (hora < 12)) {
    mensaje="buenos días";
    } 
    else if ((hora >=12) && (hora <20)) {
    mensaje="buenas tardes";
    }
    else {
    mensaje="buenas noches";
    }
}
saludo(hora);
console.log(mensaje);

//Excercise islandscape

function landscape(width, heigth){
    if(width > heigth) 
    return true;
    
    else  {
        return false;
    }
}
console.log(landscape (400, 500));

//Switch Case

function saludo1(rol){
    let saludoo;
switch(rol){
    case "Recursos Humanos":
        saludoo = "Hola compañero " + rol;
    break;
    case "IT":
            saludoo = "Hola compañero " + rol;
    break;
    case "Contabilidad":
            saludoo = "Hola compañero " + rol;
    break;
    default:
        console.log("Hola invitado");
    }
    console.log(saludoo);
}
saludo1("IT");

//Otra función usando switch
function getpage(){
    //request
    const responsecode = 20;

    switch(responsecode){
        case 200:
        console.log("OK");
        break;

        case 404:
        console.log("Not Found");
        break;

        case 500:
        console.log("Server Error");
        break;
        default: 
        console.log("We can't resolve the request")
    }
}
getpage();

//For Loop

//for ( let i = 1; i<=10; i++){
 //   console.log("index: ", i);
//}

//For IN
//let personita = {
 //   names: "Mariana",
 //   age: 25,
//};
//for (let key in personita) {
  //  console.log(key);   
//}

let manzana = {
    color: "roja",
    size: "chico",
    peso: 0.3,
};

console.log("Mi manzana es ");  
for (let propiedad in manzana) 
{

        if (propiedad !== "peso")
            console.log(propiedad, "es", manzana[propiedad], "miomi");     
        else
        console.log(propiedad, "es", manzana[propiedad], "kg", "miomi");     
}

let numeros = [12, 34, 56, 8, 90];
for(let numero in numeros)
{
    console.log("index", numero);
}

for(let numero of numeros)
{
    console.log("index", numero);
}

//WHILE
//let consumodMB = 4;

//while(consumodMB >2.5){
 //   checkingIsNecesary(consumodMB)
  //  -- consumodMB;
//}

//checkingIsNecesary(consumodMB);

//function checkingIsNecesary(trafic){
//    console.log("Checking Traffic...", trafic);
 //   if (trafic >2.5){
 //   console.log("There is some trafic")
  //  }
 //   else {
 //   console.log("You can stop checking trafic")
  //  }
//}

// Do While

let consumodMB = 6;

do{
    checkingIsNecesary(consumodMB);
    consumodMB--;

} while(consumodMB > 2.5)


function checkingIsNecesary(trafic){
    console.log("Checking Traffic...", trafic);
    if (trafic >2.5){
    console.log("There is some trafic")
    }
    else {
    console.log("You can stop checking trafic")
    }
}

//Break
//for(let f =0; f <10; f++){
 //   if(f === 5)
 //   break;

  //  console.log("index", f);
//}

//Continue
//for(let f =0; f <10; f++){
//   if(f > 5)
//    console.log("Estoy en el if");
//    continue;
//    console.log("index", f);
//}

