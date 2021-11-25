function datos() {

    tipoVia = prompt("Tipo de via: ");
    nombreVia = prompt("Nombre via: ");
    numeroEdificio = prompt("Numero edificio: ");
    codigoPostal = prompt("Codigo postal: ");
    nombrePropietario = prompt("Nombre del propietario: ");
    numeroPlanta = prompt("Numero de la planta: ");
    numeroPuerta = prompt("Numero de la puerta: ");
    piso = prompt("Piso: ");

    alert("El tipo de via " + tipoVia + " se ha insertado\n" +
        "El nombre de la via " + nombreVia + " se ha insertado\n" +
        "El numero del edificio " + numeroEdificio + " se ha insertado\n" +
        "El codigo postal " + codigoPostal + " se ha insertado\n" +
        "El nombre del propietario " + nombrePropietario + " se ha insertado\n" +
        "El numero de la planta " + numeroPlanta + " se ha insertado\n" +
        "El numero de la puerta " + numeroPuerta + " se ha insertado\n" +
        "El piso " + piso + " se ha insertado");

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