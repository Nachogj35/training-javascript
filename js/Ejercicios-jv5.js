//Ejercicio 5/////////////////////////////////////////////////////
let AbsoluteZero =-273.15;
let Freezingpoint=0;
let BodyTemperature=37;
let Boilingpoint=100;
let caso = "Absolute Zero";

console.log("Conversor de temperatura");
switch(caso){

    case "Absolute Zero" :
    solution = (AbsoluteZero*9/5)+32;
    console.log("La temperatura de -273.15°C pasa a :",solution,"°F");

    case "Freezing point":
    solution = (Freezingpoint*9/5)+32;
    console.log("La temperatura de 0°C pasa a :",solution,"°F");
    
    case "Body Temperature":
    solution = (BodyTemperature*9/5)+32;
    console.log("La temperatura de 37°C pasa a :",solution,"°F");

    case "Boiling point":
    solution = (Boilingpoint*9/5)+32;
    console.log("La temperatura de 100°C pasa a :",solution,"°F");

}