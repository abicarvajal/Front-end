(()=>{

    function rando():string{
        return (Math.random().toString(36).slice(2));
    }

    interface Product{
        uid:string;
        name:string;
        price:number;
        amount:number;
    }
    
    class Invoice{
        public producto: Product[];
        private total:number;
        private subtotal:number;
        
        constructor(){
            this.producto = [];
            this.total = 0;
            this.subtotal = 0;
        }

        calculateTax(): string{
            this.producto.forEach(element => {
                this.calculateSubtotal(element.price, element.amount);
                this.calculateTotal(element.price, element.amount);
            });
            return this.printInvoice();
        }

        addProduct(product: Product): void{
            if(this.verifyProduct(product)){
                this.changeAmount(product.uid,product.amount);
            }else{
                this.producto.push(product);
            }
            console.log(`Producto agregado: ${product.name} - Cantidad = ${product.amount}`);
        }

        changeAmount(uid:string, amount:number){
            this.producto.forEach(element => {
                if(element.uid == uid) element.amount += amount;
            });
        }

        calculateTotal(cant:number, n:number): void{
            this.total += (cant * 0.12 + cant) * n;
        }

        calculateSubtotal(cant:number, n:number): void{
            this.subtotal += cant * n;
        }

        verifyProduct(product:Product): boolean{
            let aux = false;
            this.producto.forEach(element => {
                if(element.uid.localeCompare(product.uid)==0) aux = true;
            });
            return aux;
        }

        printInvoice(): string{
            var str = "";
            this.producto.forEach(element => {
                str += `Producto: ${element.name} Cantidad: ${element.amount} \n`
            });
            str += `Subtotal = ${this.subtotal} \n`;
            str += `Total = ${this.total} \n`;
            return str;
        }
    }

    var producto:Product = {uid:rando(), name:"Leche", price:1.50, amount:1};
    var producto1:Product = {uid:rando(), name: "Queso",price:1.50,amount:1};
    var producto2:Product = {uid:rando(), name: "Mantequilla", price:2.50,amount:1};
    var producto3:Product = {uid:rando(), name: "Hierbas", price:0.50, amount:1};

    var factura:Invoice = new Invoice();
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
    
    
})()


