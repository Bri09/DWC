function validarDatos(formularioId, datos) {
    let form = document.getElementById(formularioId);

    if (datos == 'datos') {

        //divDatosPersonales
        let divDatosPersonales = document.getElementById('divDatosPersonales');

        let nombre = divDatosPersonales.getElementsByTagName('input')[0].value;
        let apellidos = divDatosPersonales.getElementsByTagName('input')[1].value;

        if (nombre == '' || apellidos == '' || !isNaN(nombre) || !isNaN(apellidos)) {

            let error = document.createTextNode('Error! Algún valor falla');
            let p = document.createElement('p');
            p.style.backgroundColor = 'red';

            p.appendChild(error);
            divDatosPersonales.appendChild(p);
        } else {

            let texto = document.createTextNode(nombre + ' ' + apellidos);
            let p = document.createElement('p');

            p.appendChild(texto);
            divDatosPersonales.appendChild(p);
        }
    } else if (datos == 'edad') {

        //divRangoEdad
        let divRangoEdad = document.getElementById('divRangoEdad');
        let inputs = divRangoEdad.getElementsByTagName('input');

        let contador = 0;
        for (let i = 0; i < inputs.length; i++) {

            if (inputs[i].checked == false) {
                contador++;
            }
        }
        if (contador >= 3) {
            let error = document.createTextNode('No has seleccionado nada!');
            let p = document.createElement('p');
            p.style.backgroundColor = 'red';

            p.appendChild(error);
            divRangoEdad.appendChild(p);
        }
    }


}