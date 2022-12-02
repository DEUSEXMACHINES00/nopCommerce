import { Selector, t } from 'testcafe';

/**
 * clase que define las funciones relacionadas a ingresar al carrito
 * 
 */
class CarritoPage{

    constructor(){
        this.carrito = Selector('.ico-cart');     
    }

    async pressButton(valor) {
        await t
            .click(Selector(valor));
    }


    async hoverEnCarrito(){
        await t
        .hover(this.carrito)
        .wait(1000)
    }

    async clickEnCarrito(){
        await t
        .click(this.carrito)
        .wait(1000)
    }


}
export default new CarritoPage();