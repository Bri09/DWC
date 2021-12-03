// Obtención de la URL a comprobar
//var url = prompt('Indica la URL que quieres comprobar');

url = 'http://usuario:contraseña@jarroba.com:80/articulos/unarticulo/?id=123&busqueda=java#comment-12345';

// Partes del patrón de la expresión regular
patronProtocolo = `^(ftp|http|https):\\/{0,3}`;
patronUsuarioPassword = `(([A-Za-z0-9\\-_\\.]*:.+|[A-Za-z0-9\\-_\\.]*)@+)*`;
patronNombreMaquina = `([A-Za-z0-9\\-_]*\.[A-Za-z0-9\\-_]+(\.[A-Za-z0-9\\-_]+)*)`;
patronPuerto = `(:[0-9]{1,5})?`;
patronRuta = `(\\/([A-Za-z\\.]+\\/?)*)?`;
patronBusqueda = `(\\?.+)?`;

// Patrón completo de la URL
var patronURL = new RegExp(patronProtocolo +
    patronUsuarioPassword +
    patronNombreMaquina +
    patronPuerto +
    patronRuta +
    patronBusqueda);

// Comprobación de la URL de entrada con el patrón indicado
console.log(patronURL.test(url));