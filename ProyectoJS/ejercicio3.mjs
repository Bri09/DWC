function datos() {

    puertaCheck = false;

    tipoVia = prompt("Tipo de via: ");
    nombreVia = prompt("Nombre via: ");
    numeroEdificio = prompt("Numero edificio: ");
    codigoPostal = prompt("Codigo postal: ");
    numeroPlanta = prompt("Numero de la planta: ");
    do {
        numeroPuerta = prompt("Numero de la puerta: ");
        if (numeroPuerta < 0 || numeroPuerta == "" /*|| isNaN(numeroPuerta) != false*/) {
            puertaCheck = false;
        } else {
            puertaCheck = true;
        }
    } while (puertaCheck == false)
    nombrePropietario = prompt("Nombre del propietario: ");

    alert("El tipo de via " + tipoVia + " se ha insertado\n" +
        "El nombre de la via " + nombreVia + " se ha insertado\n" +
        "El numero del edificio " + numeroEdificio + " se ha insertado\n" +
        "El codigo postal " + codigoPostal + " se ha insertado\n" +
        "El numero de la planta " + numeroPlanta + " se ha insertado\n" +
        "El numero de la puerta " + numeroPuerta + " se ha insertado\n" +
        "El nombre del propietario " + nombrePropietario + " se ha insertado");

}