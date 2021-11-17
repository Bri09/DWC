class Punto {
    constructor(coordX, coordY) {
        this.coordX = coordX;
        this.coordY = coordY;
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
var p = new Punto(1, 2);
console.log("p: " + p.toString()); // Salida: (1,2)

var q = new Punto(6, -3);
console.log("q: " + q.toString()); //Salida: (6,-3)

p.cambiar(-5, 2);

var r = p.copia();
console.log("r: " + r.toString());
r.x = 9;

console.log("p: " + p.toString()); // Salida: (-5,2)
console.log("r: " + r.toString()); // Salida: (9,2)

var s = p.sumar(r);
console.log("s: " + s.toString()); // Salida: (4,4)

console.log("Distancia entre p y q: " + p.obtenerDistancia(q)); // Salida: 12.08