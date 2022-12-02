//*[@id="bar-notification"]/div/p
import XPathSelector from '../functions/xpath_selector';

/*
CLASE PARA OCNFIRMAR LA ADICION DLE PRODUCTO AL CARRITO

*/
class confirmation {
    constructor() {
        this.confirmationMessage= XPathSelector('//*[@id="bar-notification"]/div/p');

    }
}
export default new confirmation();