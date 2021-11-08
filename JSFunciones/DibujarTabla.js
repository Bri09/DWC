function crearTabla(filas = 10, columnas = 4, color='black') {
    document.write(`<table style='border:3px solid ${color};width:100%;'>`);
    for (let i = 0; i < filas; i++) {
        document.write(`<tr>`);
        for (let j = 0; j < columnas; j++) {
            document.write(`<td style='border:1px solid ${color}'>  </td>`);
        }
        document.write(`</tr>`);
    }
    document.write(`</table>`);
}
crearTabla();
crearTabla(20,10);
crearTabla(5,4,'green');
crearTabla(5,4,'green');
crearTabla(5,4,'green');
crearTabla(5,4,'green');
crearTabla(5,4,'green');