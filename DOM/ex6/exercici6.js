function GenerarDecimo() {
    if (document.getElementsByTagName("div").length < 1) {
        for (let i = 0; i < 3; i++) {

            let div = document.createElement("div")

            let p = document.createElement("p")

            let random = Math.floor(Math.random() * (50 - 1) + 1)

            let numero = document.createTextNode(random)

            p.style.color = "blue"

            div.appendChild(p)

            p.appendChild(numero);

            let br = document.getElementsByTagName("br")[0]

            document.getElementsByTagName("body")[0].insertBefore(div, br)
        }
    } else {
        for (let i = 0; i < 3; i++) {

            let div = document.getElementsByTagName("div")[i]

            let old = div.children[0]

            let p = document.createElement("p")

            let random = Math.floor(Math.random() * (50 - 1) + 1)

            let numero = document.createTextNode(random)

            p.style.color = "blue"

            p.appendChild(numero);

            div.replaceChild(p, old)

        }
    }

    document.getElementsByTagName("button")[1].removeAttribute("disabled")

}

function RealizarSorteo() {

    let random = Math.floor(Math.random() * (50 - 1) + 1)

    if (document.getElementsByTagName("div").length < 4) {

        let div = document.createElement("div")

        let p = document.createElement("p")

        let numero = document.createTextNode(random)

        div.appendChild(p)

        p.appendChild(numero)

        document.getElementsByTagName("body")[0].appendChild(div)

    } else {
        let div = document.getElementsByTagName("div")[3]

        let old = div.children[0]

        let p = document.createElement("p")

        let numero = document.createTextNode(random)

        p.style.color = "blue"

        p.appendChild(numero);

        div.replaceChild(p, old)
    }

    let numeros = document.getElementsByTagName("p")

    for (let i = 0; i < numeros.length - 1; i++) {
        if (random == numeros[i].innerHTML) {
            numeros[i].style.color = "green"
        } else {
            numeros[i].style.color = "red"
        }
    }

}