//Ejercicio 1/////////////////////////////////////////////////////
const fecha = new Date();
let mes =fecha.getMonth()+1;
let ano = fecha.getFullYear();

console.log("Estamos en el mes ",mes);

if(mes== 1 || mes == 3 || mes == 5 || mes ==7 || mes == 8 || mes ==10 || mes==12)
{
    console.log("El mes en curso ",mes,"tiene 31 Dias")

}else if(mes == 4 || mes == 6 || mes == 9 || mes == 11){

    console.log("El mes en curso ",mes," tiene 30 días");

}else if(mes == 2){
if(ano % 4 == 0){
    console.log("El mes en curso ",mes," tiene 29 días , es Año bisiesto");
}else{
    console.log("El mes curso ",mes," tiene 28 días");
}

}else{

  console.log("No has metido un mes en curso ni nada");
}

// Exercixe 1
// Pre-defined functions solution
// let today = new Date();
// let daysInCurrentMonth = new Date(
//   today.getFullYear(),
//   today.getMonth() + 1,
//   0
// ).getDate();

// console.log("This month has: ", daysInCurrentMonth, " days");

// // Without functions solution

// let today2 = new Date();
// let getCurrentMonth = today2.getMonth();
// let answer = "The actual month has: ";
// switch (12) {
//   case 0:
//     console.log(answer + 31 + " days");
//     break;
//   case 1:
//     console.log(answer + 28 + " days");
//     break;
//   case 2:
//     console.log(answer + 31 + " days");
//     break;
//   case 3:
//     console.log(answer + 30 + " days");
//     break;
//   case 4:
//     console.log(answer + 31 + " days");
//     break;
//   case 5:
//     console.log(answer + 30 + " days");
//     break;
//   case 6:
//     console.log(answer + 31 + " days");
//     break;
//   case 7:
//     console.log(answer + 31 + " days");
//     break;
//   case 8:
//     console.log(answer + 30 + " days");
//     break;
//   case 9:
//     console.log(answer + 31 + " days");
//     break;
//   case 10:
//     console.log(answer + 30 + " days");
//     break;
//   case 11:
//     console.log(answer + 31 + " days");
//     break;
//   default:
//     answer = "Unknown month";
//     console.log(answer);
//     break;
// }
//Ejercicio 2/////////////////////////////////////////////////////
const fecha = new Date();
let ano = fecha.getFullYear();

let mes = prompt("Introduce un mes y te decimos cuantos días tiene......");//tolower da igual como lo escriba si minusculas o maya


if(mes== "Enero" || mes == "Marzo" || mes == "Mayo" || mes =="Julio" || mes == "Agosto" || mes =="Octubre" || mes=="Diciembre")
{
    alert("El mes tiene 31 Dias");

}else if(mes == "Abril" || mes == "Junio" || mes == "Septiembre" || mes == "Noviembre"){

    alert("El mes tiene 30 días");

}else if(mes == "Febrero"){
if(ano % 4 == 0){
     alert("El mes tiene 29 días , es Año bisiesto");
}else{
    alert("El mes tiene 28 días");
}

}else{

   alert("Error en los datos de acceso , tienes que intorudcir un mes válido y que empiece por mayusculas");
}
// Exercise 2
// saving a given name by user
// let userChoice = prompt("Please, enter a month name:");
// console.log(userChoice);

// switch (userChoice.toLowerCase()) {
//   case "january":
//     console.log(31);
//     alert(31); //another way to show the result
//     break;
//   case "february":
//     console.log(28);
//     break;
//   case "march":
//     console.log(31);
//     break;
//   case "april":
//     console.log(30);
//     break;
//   case "may":
//     console.log(31);
//     break;
//   case "june":
//     console.log(30);
//     break;
//   case "july":
//     console.log(31);
//     break;
//   case "august":
//     console.log(31);
//     break;
//   case "september":
//     console.log(30);
//     break;
//   case "october":
//     console.log(31);
//     break;
//   case "november":
//     console.log(30);
//     break;
//   case "december":
//     console.log(31);
//     break;

//   default:
//     console.log("That’s not a real month");
//     break;
// }
//Ejercicio 3/////////////////////////////////////////////////////

let temperatura = prompt("Introduce tu temperatura exterior:");


if(temperatura <15)
{
    alert("Warm up");

}else if(temperatura >= 15 && temperatura<=25)
{
    alert("Enjoy the weather");

}else if(temperatura >25){

    alert("Cool Down");
}else{

    alert("Has metido un valor erroneo ");
}
// Exercise 3
// let temperature = prompt("what temperature is it out there?");
// console.log(typeof temperature);
// switch (true) {
//   case temperature < 15:
//     alert("Warm up");
//     break;
//   case temperature <= 25:
//     alert("Enjoy the weather!");
//     break;
//   case temperature > 25:
//     alert("Cool down");
//     break;
//   default:
//     alert("Write a real data!");
//     break;
// }

// if (temperature < 15) {
//   alert("Warm up");
// } else if (temperature <= 25) {
//   alert("Enjoy the weather!");
// } else if (temperature > 25) {
//   alert("Cool down");
// } else {
//   alert("Write a real data!");
// }

//Ejercicio 4/////////////////////////////////////////////////////

let isGreen = false;



if ( isGreen){
    console.log("Cross the Road");
}else {

    console.log("Please await");
}

    

// Exercise 4

// let isGreen = true;
// trying the negate operator
// if (!isGreen) {
//   console.log("Please await");
// } else {
//   console.log("Cross the road");
// }
// more understandable and intuitive
// if (isGreen) {
//   console.log("Cross the road");
// } else {
//   console.log("Please await");
// }

// Giovanna solution
// let actualDate = new Date();
// let currentTime = actualDate.getMinutes();
// console.log(currentTime);
// Checks if the minutes of the current time are odd or even.
// If even, the lights are green, and if odd, the lights are red
// let isGreen = currentTime % 2 == 0;
// switch (isGreen) {
//   case true:
//     console.log("Cross the road");
//     break;
//   case false:
//     console.log("Please await");
//     break;
//   default:
//     console.log("Watch out! The traffic lights are broken!");
//     break;
// }
//Ejercicio 5/////////////////////////////////////////////////////
let AbsoluteZero =-273.15;
let Freezingpoint=0;
let BodyTemperature=37;
let Boilingpoint=100;
let caso = "Absolute Zero";

console.log("Conversor de temperatura");
switch(caso){

    case "Absolute Zero" :
    solution = (AbsoluteZero*9)/5+32;
    console.log("La temperatura de -273.15°C pasa a :",solution,"°F");

    case "Freezing point":
    solution = (Freezingpoint*9)/5+32;
    console.log("La temperatura de 0°C pasa a :",solution,"°F");
    
    case "Body Temperature":
    solution = (BodyTemperature*9)/5+32;
    console.log("La temperatura de 37°C pasa a :",solution,"°F");

    case "Boiling point":
    solution = (Boilingpoint*9)/5+32;
    console.log("La temperatura de 100°C pasa a :",solution,"°F");

}

// Exercise 5
// let temperature = "Freezing Point";
// switch (temperature) {
//   case "Absolute Zero":
//     console.log((-273.15 * 9) / 5 + 32);
//     break;
//   case "Freezing Point":
//     console.log((0 * 9) / 5 + 32);
//     break;
//   case "Body Temperature":
//     console.log((37 * 9) / 5 + 32);
//     break;
//   case "Boiling Point ":
//     console.log((100 * 9) / 5 + 32);
//     break;
//   default:
//     console.log("There are more grades in my beer!");
//     break;
// }
// Erika solution
// const CELSIUS = prompt("Write temperature in grades centigrades");
// // let celsius = parseFloat(prompt("Convert to fahrenheit"));
// const FAHRENHEIT = (CELSIUS * 9) / 5 + 32;
// console.log(
//   `${CELSIUS} degree celsius is equal to ${FAHRENHEIT} degree fahrenheit.`
// );

//Ejercicio 6/////////////////////////////////////////////////////
let email= "tolkien@lordofrings.com";
let pass= "aNBR6ZeWPY";
let aemail =prompt("Email :");
let apass =prompt("Password");

if(aemail == email && apass == pass ){

   alert("Welcome Mr. Tolkien");
}else{

    alert("Wrong password or email”");
}

// Exercise 6
// let email = "tolkien@lordofrings.com";
// let password = "aNBR6ZeWPY";

// let userEmail = prompt("Please, enter your email");
// let userPassword = prompt("Please, enter your password");
// if (email == userEmail && password == userPassword) {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

// Julio solution
// let email = prompt("Please, enter your email");
// let password = prompt("Please, enter your password");
// if (email == "tolkien@lordofrings.com" && password == "aNBR6ZeWPY") {
//   alert("Welcome Mr. Tolkien");
// } else {
//   alert("Wrong password or email");
// }

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
// Exercise 7
// let money = 500;
// let convertTo = "libra";
// let dollar = 1.1;
// let yen = 132.87;
// let libra = 0.83;
// let franc = 1.03;
// switch (convertTo) {
//   case "dollar":
//     console.log(`The value of ${money} in dollars is: `, money * dollar);
//   // break;
//   case "yen":
//     console.log(`The value of ${money} in yens is: `, money * yen);
//   // break;
//   case "libra":
//     console.log(`The value of ${money} in libras is: `, money * libra);
//   // break;
//   case "francs":
//     console.log(`The value of ${money} in swiss francs is: `, money * franc);
//   // break;
//   default:
//     console.log("You don't have all that money!");
//     break;
// }

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

// Exercise 8
// let num1 = parseFloat(prompt("Please enter the first number:"));
// let num2 = parseFloat(prompt("Please enter the second number:"));
// let operation = prompt(
//   "Please choose one option: add, subtract, multiply, divide"
// );

// switch (operation) {
//   case "add":
//     console.log(num1 + num2);
//     break;
//   case "subtract":
//     console.log(num1 - num2);
//     break;
//   case "multiply":
//     console.log(num1 * num2);
//     break;
//   case "divide":
//     console.log(num1 / num2);
//     break;
//   default:
//     console.log("Please choose a valid option.");
//     break;
// }
// // Kay solution
// let x = prompt("Introduce un numerito");
// let y = prompt("Introduce otro");
// let calculo = prompt(
//   "¿Que calculo quieres hacer? (suma, resta, multiplicacion o division)"
// );
// if (calculo == "suma") {
//   console.log(parseFloat(x) + parseFloat(y));
// } else if (calculo == "resta") {
//   console.log(parseFloat(x) - parseFloat(y));
// } else if (calculo == "multiplicacion") {
//   console.log(parseFloat(x) * parseFloat(y));
// } else if (calculo == "division") {
//   console.log(parseFloat(x) / parseFloat(y));
// } else {
//   console.log(
//     "chiki, tu no ta enterao de na en las clases de mate de primaria"
//   );
// }
//Ejercicio 9///////////////////////////////////////////////////// 

var dni = comprobardni(prompt("Introzuca su número de DNI o nie"));

function comprobardni(dni){
    var numDNI = dni.substring(0, 8);
  
    if(numDNI.length!=8){
      return comprobardni(prompt("Has Introducido mal el dni:"));
    }else{
      var letra = comprobardni_letra(dni);
      var letracorrecta = calcular_letra(numDNI);
      if(letra===letracorrecta){
        return alert("Enhorabuena hemos podido validar tu DNI");
      }else{
        return comprobardni(prompt("Has introducido una letra incorrecta" + "\n" + "Tu letra debería ser: " + letracorrecta));
      }    
    }
  }
  
  function comprobardni_letra(dni){
    var letraDNI = dni.substring(8, 9);
    
    return letraDNI;
  }
  
  function calcular_letra(dni){
    var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    var posicion = dni % 23;
    return cadena.substring(posicion,posicion+1);
  }
  
  var dni = comprobardni(prompt("Introzuca su número de DNI"));


  // Exercise 9
// let data = prompt("Please enter DNI or NIE:");
// //Verify data length
// if (data.length == 9) {
//   // checking if data begins by T or X
//   if (data.charCodeAt(0) == 84 || data.charCodeAt(0) == 88) {
//     // Checking if the last char is a letter too
//     if (
//       // data.charCodeAt(data.length - 1) >= 65 &&
//       // data.charCodeAt(data.length - 1) <= 90
//       // Jorge solution
//       65 <=
//       data.charCodeAt(data.length - 1) <=
//       90
//     ) {
//       // Checking if the other part of the string is fullfilled by numbers
//       if (
//         data.charCodeAt(1) >= 48 &&
//         data.charCodeAt(1) <= 57 &&
//         data.charCodeAt(2) >= 48 &&
//         data.charCodeAt(2) <= 57 &&
//         data.charCodeAt(3) >= 48 &&
//         data.charCodeAt(3) <= 57 &&
//         data.charCodeAt(4) >= 48 &&
//         data.charCodeAt(4) <= 57 &&
//         data.charCodeAt(5) >= 48 &&
//         data.charCodeAt(5) <= 57 &&
//         data.charCodeAt(6) >= 48 &&
//         data.charCodeAt(6) <= 57 &&
//         data.charCodeAt(7) >= 48 &&
//         data.charCodeAt(7) <= 57
//       ) {
//         console.log("valid NIE");
//       } else {
//         console.log("Please, check your NIE");
//       }
//     }
//     // if NIE fails, then check the DNI
//   } else if (
//     data.charCodeAt(0) >= 48 &&
//     data.charCodeAt(0) <= 57 &&
//     data.charCodeAt(1) >= 48 &&
//     data.charCodeAt(1) <= 57 &&
//     data.charCodeAt(2) >= 48 &&
//     data.charCodeAt(2) <= 57 &&
//     data.charCodeAt(3) >= 48 &&
//     data.charCodeAt(3) <= 57 &&
//     data.charCodeAt(4) >= 48 &&
//     data.charCodeAt(4) <= 57 &&
//     data.charCodeAt(5) >= 48 &&
//     data.charCodeAt(5) <= 57 &&
//     data.charCodeAt(6) >= 48 &&
//     data.charCodeAt(6) <= 57 &&
//     data.charCodeAt(data.length - 1) >= 65 &&
//     data.charCodeAt(data.length - 1) <= 90
//   ) {
//     console.log("valid DNI");
//   } else {
//     console.log("Please, check your DNI");
//   }
// } else {
//   console.log("Please enter valid data");
// }

// // Fran solution
// let userNieDni = prompt("Please, write your DNI or NIE");
// if (userNieDni.length == 9) {
//   let firstCharacter = userNieDni.charCodeAt(0);
//   let lastCharacter = userNieDni.charCodeAt(userNieDni.length - 1);
//   //if NIE
//   if (
//     (firstCharacter == 84 || firstCharacter == 88) &&
//     !isNaN(userNieDni.substring(1, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your NIE is valid");
//   }
//   // if DNI
//   else if (
//     !isNaN(userNieDni.substring(0, userNieDni.length - 1)) &&
//     lastCharacter >= 65 &&
//     lastCharacter <= 90
//   ) {
//     console.log("Your DNI is valid");
//   } else {
//     console.log("Your DNI or NIE is not valid");
//   }
// } else {
//   console.log("Your DNI or NIE is not valid");
// }

// Kay solution
//Comprobador de DNI
// let identificacion = prompt(
//   "¿Se va a registrar con el DNI o con el NIE?"
// ).toUpperCase();
// switch (identificacion) {
//   case "DNI":
//     var DNI = prompt("Introduzca su DNI");
//     if (
//       DNI.charCodeAt(0) >= 48 &&
//       DNI.charCodeAt(0) <= 57 &&
//       DNI.charCodeAt(1) >= 48 &&
//       DNI.charCodeAt(1) <= 57 &&
//       DNI.charCodeAt(2) >= 48 &&
//       DNI.charCodeAt(2) <= 57 &&
//       DNI.charCodeAt(3) >= 48 &&
//       DNI.charCodeAt(3) <= 57 &&
//       DNI.charCodeAt(4) >= 48 &&
//       DNI.charCodeAt(4) <= 57 &&
//       DNI.charCodeAt(5) >= 48 &&
//       DNI.charCodeAt(5) <= 57 &&
//       DNI.charCodeAt(6) >= 48 &&
//       DNI.charCodeAt(6) <= 57 &&
//       DNI.charCodeAt(7) >= 48 &&
//       DNI.charCodeAt(7) <= 57 &&
//       DNI.charCodeAt(8) >= 65 &&
//       DNI.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your DNI number is incorrect");
//     }
//     break;
//   case "NIE":
//     var NIE = prompt("Introduzca su NIE");
//     if (
//       (NIE.charCodeAt(0) == 84 || NIE.charCodeAt(0) == 88) &&
//       NIE.charCodeAt(1) >= 48 &&
//       NIE.charCodeAt(1) <= 57 &&
//       NIE.charCodeAt(2) >= 48 &&
//       NIE.charCodeAt(2) <= 57 &&
//       NIE.charCodeAt(3) >= 48 &&
//       NIE.charCodeAt(3) <= 57 &&
//       NIE.charCodeAt(4) >= 48 &&
//       NIE.charCodeAt(4) <= 57 &&
//       NIE.charCodeAt(5) >= 48 &&
//       NIE.charCodeAt(5) <= 57 &&
//       NIE.charCodeAt(6) >= 48 &&
//       NIE.charCodeAt(6) <= 57 &&
//       NIE.charCodeAt(7) >= 48 &&
//       NIE.charCodeAt(7) <= 57 &&
//       NIE.charCodeAt(8) >= 65 &&
//       NIE.charCodeAt(8) <= 90
//     ) {
//       alert("You logged correctly");
//     } else {
//       alert("Your NIE number is incorrect");
//     }
//     break;
//   default:
//     alert("Incorrect option");
// }

//Ejercicio 10///////////////////////////////////////////////////// 

const min = 1;
const max = 6;
let dado1 = Math.floor(Math.random() * (max - min + min) + min);
let dado2 = Math.floor(Math.random() * (max - min + min) + min);

console.log("Juego de los dados");
console.log("Tirada Jugador 1 :",dado1);
console.log("Tirada Jugador 2 :",dado2);

if(dado1 > dado2 ){

    console.log("Jugador 1 , Has Ganado!!!!! ");
}else if (dado2 > dado1){

    console.log("Jugador 2, Has ganado!!!!!!");
}else if(dado1 == dado2 && dado2 == dado1 ){

    console.log("Empate!!!! vuelved a tirar");
}

// Exercise 10
// Setting max and min possible values
// let max = 6;
// let min = 1;
// Generating a random number between max and min
// Jorge solution
// let randomNumber1 = (Math.floor(Math.random() * 10) % 6) + 1;
// //let randomNumber1 = Math.floor(Math.random() * max) + min;
// let randomNumber2 = Math.floor(Math.random() * max) + min;

// console.log(randomNumber1);
// console.log(randomNumber2);
// if (randomNumber1 > randomNumber2) {
//   console.log("Player 1 wins!");
// } else if (randomNumber1 < randomNumber2) {
//   console.log("Player 2 wins!");
// } else {
//   console.log("Draw");
// }

