const conteoLetras = new Map();

function mostrarEstadisticas(textareaId) {

    conteoLetras.clear();
    let oldTbody = '-';

    //comprobamos si hay un antiguo tbody
    if (document.getElementsByTagName('tbody')[0]) {

        oldTbody = document.getElementsByTagName('tbody')[0];
    }

    //recogemos el texto
    let texto = document.getElementById(textareaId).value;

    //recogemos el array con los datos
    let numLetras = contarLetras(texto);
    let arrayDatos = crearDatosEstadisticas(numLetras);

    //recogemos la tabla y el numero de columnas de la cabecera
    let tabla = document.getElementsByTagName('table')[0];
    let columnas = document.getElementsByTagName("th").length;

    //creamos el nuevo tbody
    let tbody = document.createElement('tbody');

    for (let j = 0; j < arrayDatos.length; j++) {

        //creamos una fila
        let tr = document.createElement('tr');

        for (let i = 0; i < columnas; i++) {

            //creamos cada columna
            let td = document.createElement("td");

            //creamos el texto
            dato = document.createTextNode(arrayDatos[j][i]);

            //introducimos todos los elementos en la fila
            td.appendChild(dato);
            tr.appendChild(td);
        }
        //introducimos todos los elementos en el tbody nuevo
        tbody.appendChild(tr);
    }
    //introducimos todos los elementos en la tabla
    tabla.appendChild(tbody);
    //comprobamos si habia tbody antiguo y lo remplazamos por el nuevo
    if (oldTbody != '-') {

        tabla.replaceChild(tbody, oldTbody);
    }

}

function contarLetras(texto) {
    let numLetrasTotal = 0;
    let patron = /^[a-zA-Z]$/

    for (let letra of texto.toLowerCase()) {
        if (patron.test(letra)) {
            if (!conteoLetras.has(letra)) {
                conteoLetras.set(letra, 1);
            } else {
                conteoLetras.set(letra, conteoLetras.get(letra) + 1);
            }
            numLetrasTotal++;
        }
    }

    return numLetrasTotal;
}

function crearDatosEstadisticas(numLetrasTotal) {
    let arrayDatos = new Array();
    for (let [letra, conteo] of conteoLetras) {
        arrayDatos.push([letra, conteo, (conteo / numLetrasTotal).toFixed(2)]);
    }

    return arrayDatos;
}