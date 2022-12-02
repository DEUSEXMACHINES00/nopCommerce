import { Selector, t } from 'testcafe';
import XPathSelector from '../functions/xpath_selector';

/**
 * CONTINUAR COMPRANDO CLASE
 */
class ContinuarShopping{
    constructor(){
        this.ContinueShoppingbtn= XPathSelector('//*[@id="shopping-cart-form"]/div[2]/div[1]/button[2]');

    }
    async ClickContinueShoppingbtn(){
        await t
        .click(this.ContinueShoppingbtn)
    }
}export default new ContinuarShopping();

    