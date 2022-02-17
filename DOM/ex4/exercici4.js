function habilitarSelect(idselect) {

    if (idselect == 'marcaBici') {
        if (document.getElementById("bicicleta").checked = true) {
            document.getElementById("marcaBici").removeAttribute("disabled")
        } else {
            document.getElementById("marcaBici").setAttribute("disabled", "disabled")
        }
    } else if (idselect == 'marcaCoche') {
        if (document.getElementById("coche").checked = true) {
            document.getElementById("marcaCoche").removeAttribute("disabled")
        } else {
            document.getElementById("marcaCoche").setAttribute("disabled", "disabled")
        }

    }

}

function retornarValor(campo) {
    if (campo.type == "text" || campo.type == "textarea") {
        return campo.value
    }
    if (campo.type == "radio" && document.getElementById(campo.id).checked == true) {
        return campo.value
    }
    if (campo.type == "checkbox" && document.getElementById(campo.id).checked == true) {
        if (campo.name = "bicicleta") {
            var selected = [];
            for (var option of document.getElementById('marcaBici').options) {
                if (option.selected) {
                    selected.push(option.value);
                }
            }
            return selected;
        }
        if (campo.name == "coche") {
            return document.getElementById("marcaCoche").value;
        }
    }
    return "";
}

function validarFormulario(idform) {
    let elementosForm = document.getElementById(idform).elements
    let Valores = ""
    for (let i = 0; i < elementosForm.length; i++) {
        Valores += retornarValor(elementosForm[i]) + " "
    }

    let p = document.createElement("p");

    let txt = document.createTextNode(Valores);

    p.appendChild(txt)

    document.getElementsByTagName("form")[0].after(p)
    console.log(document.getElementsByTagName("form")[0])

}