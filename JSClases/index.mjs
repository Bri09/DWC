import Punto from "./POO.mjs";

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