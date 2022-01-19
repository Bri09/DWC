const arrayAbecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const mapaAbecedarioUnicode = new Map();

let contador = 0;
for (let i = 9398; i <= 9423; i++) {
    mapaAbecedarioUnicode.set(`${arrayAbecedario[contador]}`, `&#${i}`);
    contador++;
}

function mostrarArray(array) {
    for (let i = 0; i < array.length; i++) {
        document.write(mapaAbecedarioUnicode.get(arrayAbecedario[array[i]]));
    }
    console.log(array);
}

function getLetrasRandom() {
    let arrayRandom = [];
    for (let i = 0; i < 20; i++) {
        let randomNumber = Math.floor((Math.random() * 25) + 1);
        arrayRandom[i] = randomNumber;
    }
    return arrayRandom;
}

function getLetrasOrdenadas(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let aux = array[i];
                array[i] = array[j];
                array[j] = aux;
            }
        }
    }
    return array;
}