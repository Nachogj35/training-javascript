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
