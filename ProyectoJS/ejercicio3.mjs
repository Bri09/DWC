function datos() {
    tipoVia = prompt("Tipo de via: ");
    alert("El tipo de via " + tipoVia + " se ha insertado");

    nombreVia = prompt("Nombre via: ");
    alert("El nombre de la via " + nombreVia + " se ha insertado");

    numeroEdificio = prompt("Numero edificio: ");
    alert("El numero del edificio " + numeroEdificio + " se ha insertado");

    codigoPostal = prompt("Codigo postal: ");
    alert("El codigo postal " + codigoPostal + " se ha insertado");

    nombrePropietario = prompt("Nombre del propietario: ");
    alert("El nombre del propietario " + nombrePropietario + " se ha insertado");

    numeroPlanta = prompt("Numero de la planta: ");
    alert("El numero de la planta " + numeroPlanta + " se ha insertado");

    numeroPuerta = prompt("Numero de la puerta: ");
    alert("El numero de la puerta " + numeroPuerta + " se ha insertado");

    piso = prompt("Piso: ");
    alert("El piso " + piso + " se ha insertado");

    puertaCheck = false;
    do {
        puerta = prompt("Puerta: ");
        if (puerta < 0 || puerta == "") {
            puertaCheck = false;
        } else {
            puertaCheck = true;
            alert("La puerta " + puerta + " se ha insertado");
        }
    } while (puertaCheck == false)
}