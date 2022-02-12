function crearTablaColores(tablaColores, numColores) {

    let rows = document.getElementById(numColores).value;

    if (rows >= 1 && rows <= 20) {

        let table = document.getElementById(tablaColores);
        let columns = table.getElementsByTagName('th').length;

        table.appendChild(crearTabla(rows, columns));

        introducirDatosTabla(table, getRandomColors(rows));
    }
    document.getElementById(numColores).setAttribute("disabled", "disabled");
}

function crearTabla(numFila, numColumna) {

    let tbody = document.createElement("tbody");

    for (let i = 0; i < numFila; i++) {

        let tr = document.createElement("tr");

        for (let j = 0; j < numColumna; j++) {

            let td = document.createElement("td");

            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    return tbody;
}

function getRandomColors(numFila) {

    let colors = [];

    for (let i = 0; i < numFila; i++) {

        colors[i] = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
    }
    return colors;
}

function introducirDatosTabla(tabla, datos) {

    let rows = tabla.getElementsByTagName('tr').length - 1;

    for (let i = 0; i < rows; i++) {

        let columns = tabla.getElementsByTagName('th').length;

        for (let j = 0; j < columns; j++) {

            if ((columns - 1) != j) {

                tabla.rows[i + 1].cells[j].appendChild(document.createTextNode(datos[i][j]));
            } else {

                var att = document.createAttribute("style");
                att.value = "background-color: rgb(" + datos[i][0] + "," + datos[i][1] + "," + datos[i][2] + ");";

                tabla.rows[i + 1].cells[j].setAttributeNode(att);
            }
        }
    }
}

function permutarFilas(tablaColores, fila1, fila2) {

    let table = document.getElementById(tablaColores);

    let numFirstRow = document.getElementById(fila1).value;
    let numSecondRow = document.getElementById(fila2).value;

    let rows = table.getElementsByTagName('tr').length;

    if (!isNaN(numFirstRow) && !isNaN(numSecondRow) && numFirstRow != numSecondRow && rows > 1) {

        if (numFirstRow >= 1 && numFirstRow < rows && numSecondRow >= 1 && numSecondRow < rows) {

            let temp = table.rows[numFirstRow].innerHTML;

            table.rows[numFirstRow].innerHTML = table.rows[numSecondRow].innerHTML;
            table.rows[numSecondRow].innerHTML = temp;
        }
    }
}

function cambiarFondo(tablaColores, filaFondo) {

    let table = document.getElementById(tablaColores);
    let row = document.getElementById(filaFondo).value;
    let rows = table.getElementsByTagName('tr').length;

    if (!isNaN(row) && row >= 1 && row < rows && rows > 1) {

        let column = table.getElementsByTagName('th').length - 1;

        var att = document.createAttribute("style");
        att.value = "background-color: " + table.rows[row].cells[column].style.backgroundColor + ";";

        document.body.setAttributeNode(att);
    }
}