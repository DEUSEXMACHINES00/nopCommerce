import { Selector } from "testcafe";


class specificRAM {
    constructor() {
        this.ram  = Selector('#product_attribute_2');
        this.ramOption  = this.ram.find('option');

    }
}
export default new specificRAM();