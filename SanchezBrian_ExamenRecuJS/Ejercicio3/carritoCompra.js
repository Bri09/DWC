function CarritoCompra() {
    this.carrito = new Array();

    this.localizarItemCarrito = function (producto) {
        for (let i = 0; i < this.carrito.length; i++) {
            if (this.carrito[i][0] == producto) {
                return i;
            }
        }
    }

    this.introducirItemCarrito = function (producto, cantidad) {
        this.carrito.push(new Array(producto, cantidad));
    }


    this.borrarItemCarrito = function (producto, cantidad) {
        let posicionItemCarrito = this.localizarItemCarrito(producto);
        if (this.carrito[posicionItemCarrito][1] == cantidad) {

            this.carrito.splice(this.carrito[posicionItemCarrito]);
        } else if (this.carrito[posicionItemCarrito][1] > cantidad) {

            this.carrito[posicionItemCarrito][1] = this.carrito[posicionItemCarrito][1] - cantidad;
        } else {

            console.log('Error');
        }
    }
}
let carrito = new CarritoCompra;
carrito.introducirItemCarrito('comida de perros', 5);
carrito.introducirItemCarrito('perfume', 2);
carrito.introducirItemCarrito('mesa', 2);
carrito.introducirItemCarrito('sillas', 4);
carrito.borrarItemCarrito('comida de perros', 4);
carrito.borrarItemCarrito('perfume', 1);
carrito.borrarItemCarrito('mesa', 1);
carrito.borrarItemCarrito('sillas', 2);