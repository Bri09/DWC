/** Links */
var links = numLinks();

var contenedor = document.createElement("span");
var contenido = document.createTextNode('Enlaces: ' + links.length);
addContent(contenedor, contenido);

/** Paragraph */
var paragraphs = numParagraphs();

var contenedor = document.createElement("span");
var contenido = document.createTextNode('Parrafos: ' + paragraphs.length);
addContent(contenedor, contenido);

/** Lastest Links */

var contenedor = document.createElement("span");
var contenido = document.createTextNode('Penúltimo enlace: ' + links[links.length - 2]);
addContent(contenedor, contenido);

var contenedor = document.createElement("span");
var contenido = document.createTextNode('Último enlace: ' + links[links.length - 1]);
addContent(contenedor, contenido);

/** Addresses counter */

var address = 'http://prueba/';
var counter = numAddressMentions(links, address);

var contenedor = document.createElement("span");
var contenido = document.createTextNode(counter + ' enlaces apuntan a ' + address);
addContent(contenedor, contenido);

/** Addresses counter per paragraph */

var linksPerParagraph = numLinksPerParagraph(paragraphs);
for (let i = 0; i < linksPerParagraph.length; i++) {
    var contenedor = document.createElement("span");
    var contenido = document.createTextNode('Número de enlaces del parágrafo ' + (i + 1) + ' = ' + linksPerParagraph[i].length);
    addContent(contenedor, contenido);

}

/** Function to add the new elements to our div */

function addContent(contenedor, contenido) {
    var divInfo = document.getElementById('info');
    var br = document.createElement("br");

    contenedor.appendChild(contenido);
    divInfo.appendChild(contenedor);
    divInfo.appendChild(br);
}