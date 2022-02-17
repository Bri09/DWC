document.addEventListener("DOMContentLoaded", function (event) {
    let textarea = document.getElementById('areatexto');
    let nodoParrafo = document.createElement('p');
    nodoParrafo.id = 'parrafoCaracteres'
    let nodoTextoParrafo = document.createTextNode(`Pots escriure ${textarea.maxLength - textarea.value.length} caràcters`)
    nodoParrafo.appendChild(nodoTextoParrafo);
    document.getElementById('areaFormulario').appendChild(nodoParrafo)
});

function insertarNumeroCaracteres(parrafo, texto) {
    let p = document.getElementById(parrafo)
    let numeroCaracteres = document.getElementById(texto).value.length
    let maxCaracteres = document.getElementById(texto).getAttribute("maxlength")
    let restantes = maxCaracteres - numeroCaracteres

    p.innerHTML = `Pots escriure ${restantes} caràcters`
}