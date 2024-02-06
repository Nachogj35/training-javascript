// ejercicio numeros

let numero = "a";

switch(true){

    case (numero < 0):
    console.log("Este número es menor que 0");
    break;

    case (numero  >=0 && numero <=10):
    console.log("Este número esta entres 0 y 10");
    break;

    case (numero  >10 && numero <=20):
    console.log("Este número es menor que 20");
    break;
    
    case( numero >20 ):
    console.log("Este número es mayor que 20");
    break;
    case isNaN(numero):
    console.log("No es una número");
    break;

    default:
    console.log("Número no encontrado");
    break;



}

