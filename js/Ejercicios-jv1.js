//Ejercicio 1/////////////////////////////////////////////////////
const fecha = new Date();
let mes = 4;//fecha.getMonth()+1;
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

