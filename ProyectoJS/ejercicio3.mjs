function datos() {
    tipoVia = prompt("Tipo de via: ");
    nombreVia = prompt("Nombre via: ");
    numeroEdificio = prompt("Numero edificio: ");
    codigoPostal = prompt("Codigo postal: ");
    nombrePropietario = prompt("Nombre del propietario: ");
    numeroPlanta = prompt("Numero de la planta: ");
    numeroPuerta = prompt("Numero de la puerta: ");
    piso = prompt("Piso: ");

    puertaCheck = false;
    while (puertaCheck == false) {
        puerta = prompt("Puerta: ");

        if (puerta < 0 || puerta == null) {
            puertaCheck = true;
        } else {
            puertaCheck = false;
        }
    }
}