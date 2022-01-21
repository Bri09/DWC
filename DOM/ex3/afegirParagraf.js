var texto = prompt('Texto para el nuevo parágrafo:');
var posicion = prompt('Posición del nuevo parágrafo:');

function afegirParagraf() {
    let li = document.getElementsByTagName('li');
    console.log(li);

    for (let i = 0; i < li.length; i++) {
        li.splice(posicion, 0, texto)

    }
}