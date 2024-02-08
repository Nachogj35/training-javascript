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