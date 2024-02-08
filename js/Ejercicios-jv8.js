//Ejercicio 8/////////////////////////////////////////////////////

let num1 = prompt("Introduce cantidad 1");
let num2=prompt("Introduce cantidad 2:");
let ope = prompt("Introduce si quieres Sumar,Restar,Multiplicar o Dividir :")

switch(ope){

    case "Sumar" :
    total=Number(num1)+ Number(num2);
    console.log(num1,"+",num2 ,"=",total);
    break;

    case "Restar" :
    total = num1-num2;
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