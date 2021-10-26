function CalculSalari() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let edad = parseInt(document.getElementById("edad").value);
    let salario = parseFloat(document.getElementById("salario").value);

    if(salario >= 1000 && salario <2000){
        if(edad > 45){
            salario += (salario*3)/100;             
        }else if(edad <= 45){
            salario += (salario*10)/100;             
        }

    }else if(salario < 1000){
        if(edad < 30){
            salario = 1100;             
        }else if(edad >= 30 && edad <= 45){
            salario += (salario*3)/100;             
        }else if(edad > 45){
            salario += (salario*15)/100;            
        }

    }

    document.write(nombre,"<br>",apellidos,"<br>",edad,"<br>",salario);
}