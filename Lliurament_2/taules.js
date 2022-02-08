function crearTablaColores(tablaColores, numColores) {
    var tableLength = document.getElementById(tablaColores).getElementsByTagName('th').length;
    var numFila = document.getElementById(numColores).value;
    var table = document.getElementById(tablaColores);

    table.appendChild(crearTabla(numFila, tableLength));


    /*var td = table.getElementsByTagName('td');

    datos = [];
    contador = 0;

    for (let i = 0; i < td.length; i++) {
        if (contador == 3) {
            color = '';

            contador = 0;
        } else {
            color = Math.floor(Math.random() * 255);

            contador++;
        }

        datos[i] = color;
    }*/

    introducirDatosTabla(table, datos);

}

function crearTabla(numFila, numColumna) {

    tbody = document.createElement('tbody');

    for (let i = 0; i < numFila; i++) {

        var row = document.createElement("tr");
        for (let j = 0; j < numColumna; j++) {

            var field = document.createElement("td");
            row.appendChild(field);
        }

        tbody.appendChild(row);
    }
    return tbody;
}

function introducirDatosTabla(tabla, datos) {

    /*var td = tabla.getElementsByTagName('td');

    let contador = 0;
    for (let i = 0; i < td.length; i++) {

        if (contador == 3) {

            var att = document.createAttribute("style");
            att.value = "background-color: rgb(" + datos[i][0] + "," + datos[i][1] + "," + datos[i][2] + ");";

            td[contador].setAttributeNode(att);

            contador = 0;
        } else {

            text = document.createTextNode(datos[i][contador]);
            td[contador].appendChild(text);

            contador++;
        }
    }*/
}

function permutarFilas(tablaColores, fila1, fila2) {



    document.write('va');
}

function cambiarFondo(tablaColores, filaFondo) {



    document.write('va');
}