function datos() {

    check = false;

    tipoVia = prompt("Tipo de via: ");
    //alert("El tipo de via " + tipoVia + " se ha insertado\n");

    nombreVia = prompt("Nombre via: ");
    //alert("El nombre de la via " + nombreVia + " se ha insertado\n");

    numeroEdificio = prompt("Numero edificio: ");
    //alert("El numero del edificio " + numeroEdificio + " se ha insertado\n");

    codigoPostal = prompt("Codigo postal: ");
    //alert("El codigo postal " + codigoPostal + " se ha insertado\n");

    numeroPlanta = prompt("Numero de la planta: ");
    //alert("El numero de la planta " + numeroPlanta + " se ha insertado\n");

    do {
        numeroPuerta = prompt("Numero de la puerta: ");
        if (numeroPuerta < 0 || numeroPuerta == "" /*|| isNaN(numeroPuerta) != false*/ ) {
            check = false;
        } else {
            check = true;
        }
    } while (check == false)
    //alert("El numero de la puerta " + numeroPuerta + " se ha insertado\n");

    nombrePropietario = prompt("Nombre del propietario: ");
    //alert("El nombre del propietario " + nombrePropietario + " se ha insertado");

    alert("El tipo de via " + tipoVia + " se ha insertado\n" +
        "El nombre de la via " + nombreVia + " se ha insertado\n" +
        "El numero del edificio " + numeroEdificio + " se ha insertado\n" +
        "El codigo postal " + codigoPostal + " se ha insertado\n" +
        "El numero de la planta " + numeroPlanta + " se ha insertado\n" +
        "El numero de la puerta " + numeroPuerta + " se ha insertado\n" +
        "El nombre del propietario " + nombrePropietario + " se ha insertado");

}