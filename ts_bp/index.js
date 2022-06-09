(function () {
    function rando() {
        return (Math.random().toString(36).slice(2));
    }
    var Invoice = /** @class */ (function () {
        function Invoice() {
            this.producto = [];
            this.total = 0;
            this.subtotal = 0;
        }
        Invoice.prototype.calculateTax = function () {
            var _this = this;
            this.producto.forEach(function (element) {
                _this.calculateSubtotal(element.price, element.amount);
                _this.calculateTotal(element.price, element.amount);
            });
            return this.printInvoice();
        };
        Invoice.prototype.addProduct = function (product) {
            if (this.verifyProduct(product)) {
                this.changeAmount(product.uid, product.amount);
            }
            else {
                this.producto.push(product);
            }
            console.log("Producto agregado: ".concat(product.name, " - Cantidad = ").concat(product.amount));
        };
        Invoice.prototype.changeAmount = function (uid, amount) {
            this.producto.forEach(function (element) {
                if (element.uid == uid)
                    element.amount += amount;
            });
        };
        Invoice.prototype.calculateTotal = function (cant, n) {
            this.total += (cant * 0.12 + cant) * n;
        };
        Invoice.prototype.calculateSubtotal = function (cant, n) {
            this.subtotal += cant * n;
        };
        Invoice.prototype.verifyProduct = function (product) {
            var aux = false;
            this.producto.forEach(function (element) {
                if (element.uid.localeCompare(product.uid) == 0)
                    aux = true;
            });
            return aux;
        };
        Invoice.prototype.printInvoice = function () {
            var str = "";
            this.producto.forEach(function (element) {
                str += "Producto: ".concat(element.name, " Cantidad: ").concat(element.amount, " \n");
            });
            str += "Subtotal = ".concat(this.subtotal, " \n");
            str += "Total = ".concat(this.total, " \n");
            return str;
        };
        return Invoice;
    }());
    var producto = { uid: rando(), name: "Leche", price: 1.50, amount: 1 };
    var producto1 = { uid: rando(), name: "Queso", price: 1.50, amount: 1 };
    var producto2 = { uid: rando(), name: "Mantequilla", price: 2.50, amount: 1 };
    var producto3 = { uid: rando(), name: "Hierbas", price: 0.50, amount: 1 };
    var factura = new Invoice();
    factura.addProduct(producto);
    factura.addProduct(producto1);
    factura.addProduct(producto2);
    factura.addProduct(producto3);
    factura.addProduct(producto2);
    console.log("*********************");
    console.log("DETALLE DE LA FACTURA");
    console.log("*********************");
    console.log(factura.producto);
    console.log(factura.calculateTax());
})();
