export default class Punto {
    constructor(coordX, coordY) {
        this.coordX = coordX;
        this.coordY = coordY;
    }

    cambiar(coordX, coordY) {
        this.coordX = coordX;
        this.coordY = coordY;
    }

    copia() {
        return Punto;
    }

    obtenerDistancia(punto2) {
        let x = Punto.coordX + punto2.coordX;
        let y = Punto.coordY + punto2.coordY;
        return Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2)));
    }

    sumar(punto2) {
        return Punto + punto2;
    }
    toString() {
        return "(" + this.coordX + "," + this.coordY + ")";
    }
};
var p = new Punto(1, 2);
console.log("p: " + p.toString()); // Salida: (1,2)