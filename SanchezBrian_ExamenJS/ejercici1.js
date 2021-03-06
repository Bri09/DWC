/**
 * Función que comprueba si se cumple un patrón de los que tiene almacenados. Es necesario indicar que patrón vamos a 
 * escoger para realizar la comprobación con las siguientes etiquetas: 
 *      1. Si es un número de registro: numeroRegistro
 *      2. Si es un nombre: nombre
 *      3. Si es un número de la seguridad social: numeroSS
 *      4. Si es una dirección: direccion
 * @param {*} elementoAComprobar - Elemento que debe cumplir el patrón que se indique.
 * @param {String} tipoComprobacion - Indica que tipo de elemento se quiere comprobar: numeroRegistro, nombre, numeroSS o direccion
 * @returns {boolean} - Devuelve true si se cumple el patrón y false si no se cumple.
 */
const comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
    let patronNumeroRegistro = `^([A-Z]){3,3}([0-9]){3,3}`;
    let patronNombreCompleto = `^([A-Z])([a-z])+ ([A-Z]){1,2}.`;
    let patronNumeroSS = `^([0-9]){1,9}`;
    let patronDireccion = `^(C/|Av.)([A-Z])([a-z])+ ([a-z])*, ([0-9])+`;

    let patrones = new Map([
        ['numeroRegistro', patronNumeroRegistro],
        ['nombre', patronNombreCompleto],
        ['numeroSS', patronNumeroSS],
        ['direccion', patronDireccion]
    ]);
    let comprobación = patrones.get(tipoComprobacion);

    var patron = new RegExp(comprobación);

    return patron.test(elementoAComprobar);
}

console.log(comprobarPatrones('FFF999', 'numeroRegistro'));
console.log(comprobarPatrones('Fernandez J.', 'nombre'));
console.log(comprobarPatrones('50', 'numeroSS'));
console.log(comprobarPatrones('C/Federico lorca, 50', 'direccion'));