import { Selector } from "testcafe";
import XPathSelector from '../functions/xpath_selector';

class specificHdd {
    constructor() {
        this.hddinput = Selector('#product_attribute_3_6');

    }
}
export default new specificHdd();