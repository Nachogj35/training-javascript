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
