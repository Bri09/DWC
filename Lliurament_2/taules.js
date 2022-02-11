function crearTablaColores(tablaColores, numColores) {

    let rows = document.getElementById(numColores).value

    if (rows >= 1 && rows <= 20) {

        let tabla = document.getElementById(tablaColores)

        let columnas = tabla.getElementsByTagName('th').length;

        tabla.appendChild(crearTabla(rows, columnas))

        let colores = getRandomColors(rows);

        introducirDatosTabla(tabla, colores)

    }
    document.getElementById(numColores).setAttribute("disabled", "disabled")
}

function crearTabla(numFila, NumColumna) {

    let tbody = document.createElement("TBODY")

    for (let i = 0; i < numFila; i++) {

        let tr = document.createElement("TR")

        for (let x = 0; x < NumColumna; x++) {

            let td = document.createElement("TD")

            tr.appendChild(td)

        }

        tbody.appendChild(tr);
    }
    return tbody;
}

function getRandomColors(numFila) {

    let randomColors = new Array

    for (let i = 0; i < numFila; i++) {

        rojo = Math.floor(Math.random() * 256)
        verde = Math.floor(Math.random() * 256)
        azul = Math.floor(Math.random() * 256)

        randomColors[i] = [rojo, verde, azul]

    }
    return randomColors;
}

function introducirDatosTabla(tabla, datos) {

    let rows = tabla.rows.length - 1;

    for (let i = 0; i < rows; i++) {

        let columnas = tabla.rows[i].cells.length

        for (let x = 0; x < columnas; x++) {

            if ((columnas - 1) != x) {

                tabla.rows[i + 1].cells[x].innerHTML = datos[i][x]
            } else {

                tabla.rows[i + 1].cells[x].style.backgroundColor =
                    "rgb(" + datos[i][0] + "," + datos[i][1] + "," + datos[i][2] + ")"
            }
        }
    }
}

function permutarFilas(tablaColores, fila1, fila2) {

    let tabla = document.getElementById(tablaColores)

    let numFila1 = document.getElementById(fila1).value

    let numFila2 = document.getElementById(fila2).value

    let numRows = tabla.rows.length;

    if (!isNaN(numFila1) && !isNaN(numFila2) && numFila1 != numFila2 && numRows > 1) {

        if (numFila1 >= 1 && numFila1 < numRows && numFila2 >= 1 && numFila2 < numRows) {

            let color1 = tabla.rows[numFila1].innerHTML;
            let color2 = tabla.rows[numFila2].innerHTML;

            tabla.rows[numFila1].innerHTML = color2
            tabla.rows[numFila2].innerHTML = color1
        }
    }
}

function cambiarFondo(tablaColores, filaFondo) {

    let tabla = document.getElementById(tablaColores)

    let fila = document.getElementById(filaFondo).value

    let numRows = tabla.rows.length;

    if (!isNaN(fila) && fila >= 1 && fila < numRows && numRows > 1) {

        let columna = tabla.rows[fila].cells.length - 1;

        let estilo = tabla.rows[fila].cells[columna].style.backgroundColor;

        document.body.style.backgroundColor = estilo;
    }
}