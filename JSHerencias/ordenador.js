class Ordenador {
    constructor(marca, modelo, ram, disco, pulgadas) {
        this.marca = marca;
        this.modelo = modelo;
        this.ram = ram;
        this.disco = disco;
        this.pulgadas = pulgadas;
    }

    cambiar(coordX, coordY) {
        this.coordX = coordX;
        this.coordY = coordY;
    }

    copia() {
        return new Punto(this.coordX, this.coordY);
    }

    obtenerDistancia(punto2) {
        let x = this.coordX - punto2.coordX;
        let y = this.coordY - punto2.coordY;
        let distHoriz = Math.pow(x, 2);
        let distVert = Math.pow(y, 2);
        let suma = distHoriz + distVert;
        return Math.sqrt(suma);
    }

    sumar(punto2) {
        let x = this.coordX + punto2.coordX;
        let y = this.coordY + punto2.coordY;
        return new Punto(x, y);
    }
    toString() {
        return "(" + this.coordX + "," + this.coordY + ")";
    }
}