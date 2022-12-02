import { Selector, t } from 'testcafe';
import XPathSelector from '../functions/xpath_selector';
import RAM from '../pages/specifictRAM';

/**
 * clase que define todo lo relacionado a los productos a seleccionar en el taller
 * 
 */
class addProduct {
    constructor() {
        this.computers = XPathSelector('/html/body/div[6]/div[2]/ul[1]/li[1]/a');
        this.desktops = XPathSelector('/html/body/div[6]/div[2]/ul[1]/li[1]/ul/li[1]/a');
        this.add_1=XPathSelector('/html/body/div[6]/div[3]/div/div[3]/div/div[2]/div[2]/div[2]/div/div/div[1]/div/div[2]/div[3]/div[2]/button[1]');
        this.add_2=XPathSelector('/html/body/div[6]/div[3]/div/div[3]/div/div[2]/div[2]/div[2]/div/div/div[2]/div/div[2]/div[3]/div[2]/button[1]');
    }

    async goTocomputersDesktop() {
        await t
            .hover(this.computers)
            .hover(this.desktops)
            .click(this.desktops);
    }

    async addProductButton(valor) {
        await t
            .scrollIntoView(valor)
            .click(valor);
    }

    async pressButton(valor) {
        await t
            .click(Selector(valor));
    }
    
    async selectRam(valor) {
        await t
            .click(RAM.ram)
            .click(RAM.ramOption.withText(valor));
    }

    async selectInput(valor){
        await t.click(valor);
    }



}
export default new addProduct();