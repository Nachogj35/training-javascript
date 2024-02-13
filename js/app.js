// console.log('hello , world!!!')
// var foo =null;
//     console.log(typeof foo);
//     foo;
//     let bar;
//     console.log(typeof bar);
// //determinar el tipo de dato y valor de la variable
// //Caso A
//     let A = 838<542;
//     console.log(" A) Tipo de dato:", typeof A , " ,valor:",A);
//     //caso B
//     let B = 17/5;
//     console.log(" B) Tipo de dato:", typeof B, ",valor:",B);
//     //caso C
//     let C = 12*6;
//     console.log(" C) Tipo de dato:", typeof C, ",valor:",C);
//     //caso D
//     let D = 35 % 8;
//     console.log(" D) Tipo de dato:", typeof D, ",valor:",D);
//     //caso E

//     let E = 1 == 3 || 5 > 7 || 10*5 > 40;
//     console.log(" E) Tipo de dato:", typeof E, ",valor:",E);

//     //caso F

//     let F = 13 % 2 == 0;
//     console.log(" F) Tipo de dato:", typeof F, ",valor:",F);
//     //caso G

//     let G = "CODE" + " "  + "SPACE";
//     console.log(" G) Tipo de dato:", typeof G, ",valor:",G);

//     //caso H

//     let H = (21 / 2) % 3;
//     console.log(" H) Tipo de dato:", typeof H, ",valor:",H);
//    //caso I
//     let I = 5 == "5";
//     console.log(" I) Tipo de dato:", typeof I, ",valor:",I);
//     // Caso J

//     let J = !(1 == 1);
//     console.log(" J) Tipo de dato:", typeof J, ",valor:",J);

//     //prueba 

//let totalBet = prompt("Please enter your Bet :");
//console.log("apuesta" ,"tipo de valor", typeof totalBet ," valor que hemos metido",totalBet);

//if(totalBet == 5000)
//{
  //  alert("All in! your bet is :"+totalBet);
//}else if (totalBet < 5000)
//{
//     alert("your pass next round :"+totalBet);
//}
//else{
 //alert("wrong bet:" +totalBet);
 //while(totalBet > 5000){

   // prompt("Please enter your Bet,again :");
    //if(totalBet > 5000){
      //  alert("wrong bet,again:" +totalBet);
    //}
 //}


//}
// Ejemplo switch------
//let character = "black widow";

//switch(character){

  //  case "capitan america":
    //power = "indestructible shiel";
    //break;

    //case "black widow":
    //power = "master & spy assains";
   // break;
    
    //case "Iron man":
    //power = "Powerful";
    //break;

     
    //case "Thor":
    //power = "The name of thor";
    //break;
    //default:
    //console.log("Choose your hero");
    //break;

//}
//console.log(power);

//Ejemplo while contar del 1 al 9
//console.log("contar del 1 al 10")
//let count = 0;
//while (count <10) {
//console.log(count);
//count++;
//}

//ejemplo contar 2 en 2
//let number = 0;
 //while(number<10)
 //{
  //console.log(number);
  //number +=2;

 //}
 //console.log("Contando de 5 en 5");
//contar de 5 en 5
 //let b = 0;
 //while(b<=100)
 //{
  //console.log(b);
  //b +=5;

 //}
 //console.log(" restando de 5 en 5");

 //while(b<=0)
 //{
  //console.log(b);
  //b -=5;

 //}

 //console.log(" Multiplica ");
//let b = 2;
 //while(b <=256)
 //{
  //console.log(b);
  //b *=2;

 //}
//let i = 0;
//while (i < 10) {
//console.log(i);
//i += 2;
//}
//let conter= 10;
//let timer= setInterval(
//() =>{
//console.log(conter);
  //conter--;
//if(conter == 0)
//{

  //clearInterval(timer);

//}


//},1000
//);

//console.log("Tabla del 10")
//let count = 0;
//while (count <=10) {

//console.log(count ,"X 8 = ",count*8);
//count++;
//}

//let limit= 10;
//for (let i = 0; i < limit; i++) {
//console.log(i);
//}
//cuenta atrás
//let number = 10;

//while(number >0)
//{
  //number--;// el -- es para restar 
  //console.log(number);
//}
//ejercicio de las tablas mejorado con bucles

//console.log("Las tablas del 1 Al 10");
//console.log("=================================")
//for (let num= 1; num<=10; num++) {
 // console.log("Tabla del :",num);
  //console.log("================================")
  //let multi=1;
  //while (multi <=10)
  //{
   //console.log(multi,"X",num," = ",multi*num); 
   //multi++;
  //}
  //console.log("================================");
//}
//ejemplos de for
//cuenta hacia arriba y hacia abajo
//for(let contar=0, limit=100; contar<=limit;contar++ ,limit--) {
 
  //  console.log(contar," - ",limit);
  
//}

//let i,
//j,
//sum = 0;
//for (i = 0, j = 10; i < 10; i++, j--) {
//sum += i * j;
//console.log(sum);
//}
//puede visulizar los numeros pares
//let numero=1;
//while(numero++ <= 100){
//if(numero% 2 ==0)
//{
  //console.log(numero);
//}
//}
//let isPrime= true;
//let num = 101;
//for (let i = 2; i <= num / i; i++) {
//if (num % i == 0) {
//isPrime = false;
//break;
//}
//}
//if (isPrime) console.log(`${num} is prime`);
//else console.log(`${num} is not prime`);
//ejemplo de codigo for de 2 en 2
//for (let index = 0; index < 20; index++)
//{
//if (index % 2 != 0) {
//continue;
//}
//console.log(index);
//}
//let totalBet=0;
//do{
//let totalBet = prompt("Please enter your bet");
//if (totalBet == 5000) {
//alert("All in!");
//} else if(totalBet< 5000){
//alert("Passing this round.");

//}if(totalBet >5000){
  //alert("Bet limit 5000,apuesta maxima ");
//}if(isNaN(totalBet))
//{
 //       alert("Please ,enter valid number");
//}
//}while(totalBet > 5000 || isNaN(totalBet));

// interactive menu for hex colors

//let option = null;
//let colors =["red","green","blue"];

//do {
  //console.log("please ,choose your color");
  //for(let index = 0 ; index < colors.length ; index++)
  //{
    //console.log(index + 1 + " . "+colors[index]);
    
  //}
  
  //console.log("Press 0 to leave")
  //option = prompt("Make your choice");
  //switch(option){

    //case "1":
    //console.log("%cHex code for red : #FF0000","color: red;");
    //break;

    //case "2":
    //console.log("%cHex code for green :#008000","color: green;");
    //break;

    //case "3":
    //console.log("%cHex code for blue : #0000FF","color: blue;");
    //break;
      
    //default:
     // if(option != 0){
      //console.warn("Not a valid option , please try Again");//aparece el mensaje en amarillo 
      //}else{
      //console.log("Exiting, see you soon!");
      //}
    //break;

  //}
//} while (option != 0 && option != null);