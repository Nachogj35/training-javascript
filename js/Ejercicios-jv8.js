//Ejercicio 8/////////////////////////////////////////////////////

let num1 = prompt("Introduce cantidad 1");
let num2=prompt("Introduce cantidad 2:");
let ope = prompt("Introduce si quieres Sumar,Restar,Multiplicar o Dividir :")

switch(true){

    case "Sumar" :
    total = num1+num2;
    console.log(num1,"+",num2 ,"=",total);
    break;

    case "Restar" :
    total = (num2-num1);
    console.log(num1,"-",num2 ,"=",total);
    break;

    case "Multiplicar" :
    total = num1*num2;
    console.log(num1,"X",num2 ,"=",total);
    break;

    case "Dividir" :
    total = num1/num2;
    console.log(num1,"/",num2 ,"=",total);
    break;

    default:
    alert("Has puesto mal los datos");
    break;
}