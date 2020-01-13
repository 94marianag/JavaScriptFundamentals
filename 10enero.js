// Hoisting: Cuando una función no está inicializada, no la puedes llamar antes.
//The Key word 'this'

run();
function run (){
    console.log("running");
}

//move();         
let move = function walk(){
    console.log("walking");
};

let person = {
    name: "mariana",
    move: function (){
        console.log("I can't move");
        console.log(this);
    },
}
person. move();

function x(){
    let x = "x";
    console.log(x,this);

    function y(){
        let y = "y";
        console.log(y,this);

        function z(){
            let z = "z";
            console.log(z,this);
      
       }
       z();
     }
     y();
}
x();

var documentName = "Javascript Fundamentals";
function examplethis(){

    console.log(this.documentName);
}
examplethis();

//Scope Global
let h =5;

function oneFunctionScope(){
    //function scope
    let h =10;
    
    for(let i = h ; i >= 0 ; i--){
        console.log(i);
    }
     console.log(h);
}
oneFunctionScope();

function oneFunctionScope(){
    //function scope
    let h =10;
    
    for(let i = h ; i >= 0 ; i--){     
        console.log(i);
    }

    console.log(h);
}
oneFunctionScope();

//let calculandoEdad = (birth, year) => (year - birth) 
  //  return year - birth;


//let isMayorEdad = function(fn){
    //let age = fn(1988,2020);

    //if (age >=18)
    //console.log("Es mayaor de edad")
    //else
  //  console.log("Es Menor de edad")
//};
//isMayorEdad(calculandoEdad);

//let a = prompt("Please enter your age");
//alert(a);

//function saludo(nombre){
    
  //  alert("Hola "+nombre);
//}

//function getName(fn){
//    let a = prompt("Please enter your name");
  //  fn(a);
//}
//getName(saludo);

function setColor(){
  let element =  document.getElementsByTagName ("body");
  document.body.style.backgroundColor= "red";
  
}

function changeLetrasColor() {
    let elem = document.getElementById('contenedor');
    elem.style.color = "blue";
}

function change(){
    let ele = document.getElementById('contenedor');
    ele.style.color = "black";
}
function save(){
    alert("La info se envió correctamente");
}

//window.onload = () => alert ("Hola Event!");

function ChangeColor (){
    let el = document.getElementsByClassName("StyleClass");
    el[0].style.backgroundColor = "pink";
}

function salvar (){
    alert("Guardar");
    let o = document.getElementById("name");
    console.log(o);

    if (o !== "Mariana")
    alert ("No puedo enviar tu formulario")
    return;
}