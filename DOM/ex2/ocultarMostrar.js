function ocultarMostra(idParagrafo, idEnlace) {

    if (document.getElementById(idParagrafo).className == 'visible') {
        document.getElementById(idParagrafo).className = 'ocult';
        document.getElementById(idEnlace).innerHTML = 'Mostrar';

    } else if (document.getElementById(idParagrafo).className == 'ocult') {
        document.getElementById(idParagrafo).className = 'visible';
        document.getElementById(idEnlace).innerHTML = 'Ocultar';
    }
}