//Ejercicio 1/////////////////////////////////////////////////////
const fecha = new Date();
let mes = fecha.getMonth()+1;
let ano = fecha.getFullYear();
let hoy = fecha.getDate();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();

let horacompleta = hora+" : "+minutos;
console.log("Son las : ",horacompleta);



if(hoy < 10)
{
    hoy= "0"+hoy;
}

//console.log(hoy);
if(mes <10)
{
    mes = "0"+mes;
}

let fechacompleta = "Hoy es :"+hoy+"/"+mes+"/"+ano;
console.log(fechacompleta);
console.log( "Estamos en el mes: ",mes); // 11

if(mes == 1){

    console.log("Invierno");

}
else if(mes == 2)
{
    console.log("Invierno");
}

else if(mes == 3)
{
    console.log("Invierno");
}

else if(mes == 4)
{
    console.log("Primavera");
}else if (mes == 5)
{
    console.log("Primavera")
}
else if(mes == 6){
 
    console.log("Primavera");
}
else if(mes == 7){
    console.log("Verano");
}
else if(mes == 8){

    console.log("Verano");
}
else if (mes == 9)
{
    console.log("Otoño");
}
else if (Mes == 10){
    console.log("Otoño");
}else if(mes == 11){
    console.log("Otoño");
}
else if (mes == 12){

    console.log("Invierno");
}
else {

    console.log("No es un mes");
}


if(mes== 3 || mes == 4 || mes == 5)
{
    console.log("Primavera")
}else if(mes == 6 || mes == 7 || mes == 8){

    console.log("Verano");
}else if(mes == 9 || mes == 10 || mes == 11){

    console.log("Otoño");

}else{

  console.log("Invierno");
}

