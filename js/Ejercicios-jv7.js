//Ejercicio 7/////////////////////////////////////////////////////

let moneda = prompt("Introduce a que moneda quieres cambiar Dollar Americano, Yen Japones,Libra Esterlina o Franco Suizo : ");
let cantidad=prompt("Cantidad de € cambiar:");

switch(moneda){

    case "Dollar Americano" :
    divisa = cantidad*1.08;
    console.log(cantidad,"€ Equivalen a",divisa,"$");
    break;

    case "Yen Japones":
    divisa = cantidad*159.04;
    console.log(cantidad,"€ Equivalen a",divisa,"¥");
    break;

    case "Libra Esterlina":
     divisa = cantidad*0.85;
    console.log(cantidad,"€ Equivalen a",divisa,"£");
    break;

    case "Franco Suizo":
    divisa = cantidad*0.94;
    console.log(cantidad,"€ Equivalen a",divisa,"Fr");
    break;

    default:
    alert("Esa divisa no esta disponible");
    break;
}