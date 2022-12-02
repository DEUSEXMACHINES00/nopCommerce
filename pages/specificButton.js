import { Selector } from "testcafe";

/**
 * PRESIONAR BUTON CLASE
 */
class specificButton {
    constructor() {
        this.AddCarritoButton= Selector('#add-to-cart-button-1');

    }
}
export default new specificButton();