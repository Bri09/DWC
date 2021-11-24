function Edificio(tipoVia, nombreVia, numeroEdificio, codigoPostal) {
    this.tipoVia = tipoVia;
    this.nombreVia = nombreVia;
    this.numeroEdificio = numeroEdificio;
    this.codigoPostal = codigoPostal;
    this.mapaPropietariosEdificio = new Map();
}

Edificio.prototype.agregarPlanta = function (numeroPlanta) {
    this.mapaPropietariosEdificio.set(numeroPlanta, mapaPuertas = new Map());
}

Edificio.prototype.agregarPuerta = function (numeroPlanta, numeroPuerta) {
    this.mapaPropietariosEdificio.get(numeroPlanta).set(numeroPuerta, []);
}

Edificio.prototype.agregarPropietario = function (nombrePropietario, numeroPlanta, numeroPuerta) {
    this.mapaPropietariosEdificio.get(numeroPlanta).get(numeroPuerta).push(nombrePropietario);
}

Edificio.prototype.imprimirCodigoPostal = function () {
    return "Codigo postal: " + this.codigoPostal + "\n";
}

Edificio.prototype.imprimirNombreVia = function () {
    return "Nombre de la via: " + this.nombreVia + "\n";
}

Edificio.prototype.imprimirNumeroEdificio = function () {
    return "Numero del edificio: " + this.numeroEdificio + "\n";
}

Edificio.prototype.imprimirTipoVia = function () {
    return "Tipo de via: " + this.tipoVia + "\n";
}

Edificio.prototype.imprimirTodosPropietarios = function () {
    let clavePlanta = this.mapaPropietariosEdificio.keys();
    let texto = "<center><div><h2>COMUNITAT DE PROPIETARIS</h2><br>" +
        this.tipoVia + " " + this.nombreVia + ", " + this.numeroEdificio +
        " C.P " + this.codigoPostal +
        "</div></center><br>";
    for (let i = 0; i < this.mapaPropietariosEdificio.size; i++) {
        let planta = clavePlanta.next().value;
        let clavePuerta = this.mapaPropietariosEdificio.get(planta).keys()
        texto += "<h3>Planta: " + planta + "/<h3>\n";

        for (let x = 0; x < this.mapaPropietariosEdificio.get(planta).size; x++) {
            let puerta = clavePuerta.next().value
            texto += "\t" + "<h3>Puerta: " + puerta + "</h3>\n";

            for (let j = 0; j < this.mapaPropietariosEdificio.get(planta).get(puerta).length; j++) {
                let propietario = this.mapaPropietariosEdificio.get(planta).get(puerta);
                texto += "\t\t" + propietario[j] + "\n";
            }
        }
    }
    return texto;
}

Edificio.prototype.modificarCodigoPostal = function (nuevoCodigoPostal) {
    this.codigoPostal = nuevoCodigoPostal;
}

Edificio.prototype.modificarNombreVia = function (nuevoNombreVia) {
    this.nombreVia = nuevoNombreVia;
}

Edificio.prototype.modificarNumeroEdificio = function (nuevoNumeroEdificio) {
    this.numeroEdificio = nuevoNumeroEdificio;
}

Edificio.prototype.modificarTipoVia = function (nuevoTipoVia) {
    this.tipoVia = nuevoTipoVia;
}

export {
    Edificio
};