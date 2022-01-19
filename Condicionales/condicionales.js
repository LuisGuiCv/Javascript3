//Ejercicios 1
/*
var nombres=["Maria","Antony","Joy","Juan"]
console.log(nombres);
nombres.push("Fernando");
console.log(nombres);
nombre1 =String( nombres[0,1]);
console.log(nombre1);
nombre2 ="Fernando";

function compararNombres(nombre1, nombre2){
    if (nombre1 === nombre2){
        console.log(true);
    }else{
        console.log(false);
    }
}
compararNombres();
*/
//Ejercicio 2
/*
console.log(false || (true && false));
console.log(true || (11 + 12));
console.log((31 + 22) || true);
console.log(true && (1 + 7));
console.log(false && (3 + 4));
console.log((1 + 2) && true);
console.log((32 * 4) >= 129);
console.log(false !== !true);
console.log(true === 4);
console.log(false === (847 === '847'));
console.log(false === (887 == '887'));
console.log((!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false);
*/

//Ejercicio 3

/*
function Intervalo() {
    var num=parseInt(prompt("Ingresa un numero"));
    if (num >= 0 && num <= 25){
        console.log("El numero esta en el rango de 0 a 25");
    }else if(num>=26 && num <=100){
        console.log("El numero esta en el rango de 26 a 100");
    }else if(num <= 0){
        console.log("El numero es menor a 0");
    }else if(num >= 100){
        console.log("El numero es mayor a 100");
    }else{
        console.log("El dato no es valido");
    }
};
Intervalo();
*/
/*
var a;
var b = null;
var c = undefined;
var d = 4;
var e = 'five';
var f = a || b || c || d || e;

console.log(f);
*/
function rango(number){
    var number= 100;
    if (number >= 0 && number <= 25){
        console.log("El numero esta en el rango de 0 a 25");
    }else if(number>=26 && number <=100){
        console.log("El numero esta en el rango de 26 a 100");
    }else if(number <= 0){
        console.log("El numero es menor a 0");
    }else if(number >= 100){
        console.log("El numero es mayor a 100");
    }else{
        console.log("El dato no es valido");
    }
};
rango();
