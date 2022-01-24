var texto = prompt('Texto para el nuevo parágrafo:');
var posicion = prompt('Posición del nuevo parágrafo:');
var li = document.getElementsByTagName('li');
console.log(li[0].innerHTML);

function afegirParagraf() {
    li.splice(posicion, 0, texto)
    console.log(li);
}

//afegirParagraf();