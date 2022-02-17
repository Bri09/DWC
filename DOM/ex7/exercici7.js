/* Funcionamiento Real semaforo
function cambiarColor(){
    let actual = document.getElementsByClassName("ences")[0].id
    let verde = document.getElementById("verd")
    let ambar = document.getElementById("ambre")
    let rojo = document.getElementById("vermell")
    if(actual == "verd"){
        verde.style.transitionDelay = "0s"
        verde.setAttribute("class","apagat")
        ambar.setAttribute("class","ences")
        ambar.style.transitionDelay = "1s"
        setTimeout(() => ambar.setAttribute("class","apagat"), 1000);
        rojo.style.transitionDelay = "3s"
        rojo.setAttribute("class","ences")
    }else if(actual == "vermell"){
        rojo.style.transitionDelay = "1s"
        rojo.setAttribute("class","apagat")
        verde.style.transitionDelay = "2s"
        verde.setAttribute("class","ences")
    }
}
*/

/* Lo que se busca en el ejercicio*/
function cambiarColor() {
    let actual = document.getElementsByClassName("ences")[0].id
    let verde = document.getElementById("verd")
    let ambar = document.getElementById("ambre")
    let rojo = document.getElementById("vermell")
    if (actual == "verd") {
        verde.setAttribute("class", "apagat")
        ambar.setAttribute("class", "ences")
    } else if (actual == "ambre") {
        ambar.setAttribute("class", "apagat")
        rojo.setAttribute("class", "ences")
    } else if (actual == "vermell") {
        rojo.setAttribute("class", "apagat")
        verde.setAttribute("class", "ences")
    }
}