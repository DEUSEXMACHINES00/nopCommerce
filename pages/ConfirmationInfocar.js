
import XPathSelector from '../functions/xpath_selector';

/**
 * CLASE CON LA INFORMACIOND ELOS PRODUCTOS DE SELECCIONADOS AL CARRITO
 * 
 */

class ConfirmationInfocar{
    constructor() {        
        this.data = XPathSelector('//*[@id="shopping-cart-form"]/div[1]/table/tbody/tr/td[3]/div[1]');
        this.price= XPathSelector('//*[@id="shopping-cart-form"]/div[1]/table/tbody/tr/td[4]/span');
        this.total= XPathSelector('//*[@id="shopping-cart-form"]/div[1]/table/tbody/tr/td[6]/span');
        this.data2 = XPathSelector('//*[@id="shopping-cart-form"]/div[1]/table/tbody/tr[2]/td[3]/a');
        this.price2= XPathSelector('//*[@id="shopping-cart-form"]/div[1]/table/tbody/tr[2]/td[4]/span');
        this.total2= XPathSelector('//*[@id="shopping-cart-form"]/div[1]/table/tbody/tr[2]/td[6]/span');
    }
}
export default new ConfirmationInfocar();