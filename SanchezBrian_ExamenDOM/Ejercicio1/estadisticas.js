document.addEventListener("DOMContentLoaded", function (event) {
    let cabecera = ['LETRA', 'NºVECES', '%APARICIONES'];

    function crearTabla(cabecera) {
        //creamos la tabla y le ponemos el valor de width
        let table = document.createElement("table");
        table.style.width = "250px";

        //creamos la cabecera
        let thead = document.createElement("thead");
        for (let i = 0; i < cabecera.length; i++) {

            //creamos cada columna de la cabecera
            let th = document.createElement("th");
            th.style.textAlign = "center";

            //creamos el texto
            text = document.createTextNode(cabecera[i]);

            //introducimos todos los elementos a la cabecera
            th.appendChild(text);
            thead.appendChild(th);
        }
        //introducimos todos los elementos a la tabla y introducimos la tabla en el div
        table.appendChild(thead);
        document.getElementById('divTabla').appendChild(table);
    }

    crearTabla(cabecera);
});