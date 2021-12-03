function Paciente(numeroRegistro, nombreCompleto, numeroSS, dirección) {
    this.numeroRegistro = numeroRegistro;
    this.nombreCompleto = nombreCompleto;
    this.numeroSS = numeroSS;
    this.dirección = dirección;

    this.modificarNumeroRegistro = (nuevoNumeroRegistro) => {
        if (this.comprobarPatrones(nuevoNumeroRegistro, 'numeroRegistro')) {
            this.numeroRegistro = nuevoNumeroRegistro
        }
    }
    this.modificarNombreCompleto = (nuevonombreCompleto) => {
        if (this.comprobarPatrones(nuevonombreCompleto, 'nombre')) {
            this.nombreCompleto = nuevonombreCompleto
        }
    }
    this.modificarNumeroSS = (nuevoNumeroSS) => {
        if (this.comprobarPatrones(nuevoNumeroSS, 'numeroSS')) {
            this.numeroSS = nuevoNumeroSS
        }
    }
    this.modificarDireccion = (nuevaDireccion) => {
        if (this.comprobarPatrones(nuevaDireccion, 'direccion')) {
            this.dirección = nuevaDireccion
        }
    }

    this.imprimirNumeroRegistro = () => "Número Registro: " + this.numeroRegistro;

    this.imprimirNombreCompleto = () => "Nombre Completo: " + this.nombreCompleto;

    this.imprimirNumeroSS = () => "Número Seguridad Social: " + this.numeroSS;

    this.imprimirDirección = () => "Dirección: " + this.dirección;

    this.comprobarPatrones = function (elementoAComprobar, tipoComprobacion) {
        let patronNumeroRegistro = `^([A-Z]){3,3}([0-9]){3,3}`;
        let patronNombreCompleto = `^([A-Z])([a-z])+ ([A-Z]){1,2}.`;
        let patronNumeroSS = `^([0-9]){1,9}`;
        let patronDireccion = `^(C/|Av.)([A-Z])([a-z])+ ([a-z])*, ([0-9])+`;

        let patrones = new Map([
            ['numeroRegistro', patronNumeroRegistro],
            ['nombre', patronNombreCompleto],
            ['numeroSS', patronNumeroSS],
            ['direccion', patronDireccion]
        ]);
        let comprobación = patrones.get(tipoComprobacion);

        var patron = new RegExp(comprobación);

        return patron.test(elementoAComprobar);
    }

}

let persona = new Paciente();
persona.modificarNumeroRegistro('FFF999');
console.log(persona.imprimirNumeroRegistro());