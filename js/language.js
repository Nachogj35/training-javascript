// ejercicio lenguajes

let lengua= prompt("Selecciona Idioma (En) para Inglés , (De) para Alemán , (Pt) para portugués y (Po) para polaco: ");
let idioma;
switch(lengua){

    case "En":
    idioma = "English Page";
    break;
    
    case "De":
    idioma ="Deuthland Page";
    break;

    case "Pt":
    idioma = "Portugues Page";
    break;

    case "Po":

    idioma = "polacic Page";
    break;

    default:
    console.log("Idioma no encontrado");
    break;

}

console.log(idioma);
