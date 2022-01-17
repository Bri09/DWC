function numLinks() {
    return document.getElementsByTagName("a");
}

function numParagraphs() {
    return document.getElementsByTagName("p");
}

function numAddressMentions(links, address) {
    let counter = 0;
    for (let i = 0; i < links.length; i++) {
        if (links[i] == address) {
            counter++;
        }
    }
    return counter;
}

function numLinksPerParagraph(paragraphs) {
    let linksPerParagraph = [];
    for (let i = 0; i < paragraphs.length; i++) {
        linksPerParagraph[i] = paragraphs[i].getElementsByTagName("a");
    }
    return linksPerParagraph;
}