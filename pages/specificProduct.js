// import { Selector, t } from 'testcafe';
import XPathSelector from '../functions/xpath_selector';

class specificProduct {
    constructor() {
        // this.product = Selector('#product-details-form').nth().child(2).child(1).child(2).child(1).child('h1');
        this.product = XPathSelector('//*[@id="product-details-form"]/div[2]/div[1]/div[2]/div[1]/h1')
    }
}
export default new specificProduct();