let i = 0;
var arrayPalabras = [];
do {
    palabra = prompt("Escribe una palabra:");
    arrayPalabras[i] = palabra;
    i++;
} while (palabra != null);

for (let i = 0; i < arrayPalabras.length; i++) {
    for (let j = 0; j < arrayPalabras.length; j++) {
        if (arrayPalabras[i] == arrayPalabras[j]) {
            arrayPalabras.splice(j,1);
        }
    }
}
//arrayPalabras.sort();
//arrayPalabras.reverse();
console.log(arrayPalabras);