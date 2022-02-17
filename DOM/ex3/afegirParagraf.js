document.addEventListener("DOMContentLoaded", function (event) {

    // Funcion para pedir el parrafo
    function PedirParrafo() {

        // Variable booleana para el bucle while
        let correcto = false;

        // Prompt para pedir el texto al usuario
        let texto = prompt("Escribe el texto para un nuevo parrafo:");

        // Si el usuario cancela ya no entra en el bucle y se acaba el programa
        if (texto != null) {
            // Bluce hasta que el usuario introduce un numero del 1 al 10
            while (!correcto) {

                // Prompt para pedir el numero
                numero = prompt("Escribe la posicion en la que quieres ponerlo (1-10):")

                // Si cancela el programa se acaba
                if (numero == null) {
                    correcto = true;
                }
                // Comprobamos que es un numero
                if (!isNaN(numero)) {
                    // Comprobamos que esta entre 1 y 10
                    if (numero > 0 && numero <= 10) {
                        correcto = true;
                        // Llamamos la funcion para añadir el nuevo parrafo
                        AñadirParrafo(texto, numero)
                    }
                }
            }
        }
    }

    // Funcion para añadir el nuevo parrafo
    function AñadirParrafo(texto, posicion) {

        // Creamos el elemento li
        let li = document.createElement("li");

        // Creamos el elemento strong (negrita)
        let negrita = document.createElement("STRONG");

        // Añadimos el elemento strong a li
        li.appendChild(negrita);

        // Creamos el nodo de texto con el texto del usuario
        let txt = document.createTextNode(texto);

        // Añadimos el nodo de texto al elemento strong
        negrita.appendChild(txt);

        // Cogemos la posicion de la lista donde el usuario quiere añadir el texto
        let posAnterior = document.getElementsByTagName("li")[posicion - 1]

        // Añadimos el texto del usuario
        document.getElementsByTagName("ol")[0].insertBefore(li, posAnterior)

    }

    PedirParrafo();
})