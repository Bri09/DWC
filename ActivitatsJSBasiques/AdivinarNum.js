numSecreto = Math.ceil((Math.random() * 101) + 1);
//document.write(numSecreto);
numIntentos = 0;
do {
    numRespuesta = prompt("Adivina el numero del 1 al 100");
    if (numRespuesta == undefined) {
        alert("El juego se ha cancelado");
        break;
    } else if (isNaN(numRespuesta)) {
        comprobarNum = false;
        alert("Error");
    } else {
        if (numRespuesta == numSecreto) {
            alert("Has ganado en " + numIntentos + " intentos");
            repetir = confirm("¿Quieres volver a jugar?");
            if (repetir == true) {
                comprobarNum = false;
            } else {
                comprobarNum = true;
            }
        } else if (numRespuesta < numSecreto) {
            alert("Es un numero mayor");
            comprobarNum = false;
        } else if (numRespuesta > numSecreto) {
            alert("Es un numero menor");
            comprobarNum = false;
        }
    }
    numIntentos++;
} while (comprobarNum == false)