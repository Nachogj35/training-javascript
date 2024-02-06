//Ejercicio 2/////////////////////////////////////////////////////
const fecha = new Date();
let ano = fecha.getFullYear();

let mes = prompt("Introduce un mes y te decimos cuantos días tiene......")


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

