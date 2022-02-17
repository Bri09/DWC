function OrdenarInversa() {

    let parrafos = document.getElementsByTagName("p");

    let arrayParrafos = Array.from(parrafos);

    let invertir = arrayParrafos.reverse();

    let body = document.getElementsByTagName("body")[0]

    for (let i = 0; i < invertir.length; i++) {
        body.appendChild(invertir[i])
        console.log(invertir[i])
    }
}