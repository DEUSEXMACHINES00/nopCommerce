import CarritoPage from "../pages/CarritoPage";
import ContinueShopping from '../pages/ContinuarShopping';
import intro from '../pages/addproduct';
import Hdd from '../pages/specificHdd';
import stw from '../pages/specificSoftware';
import btn from '../pages/specificButton';
import info from '../pages/ConfirmationInfocar';
import cfm from '../pages/confirmation';


const URL = `https://demo.nopcommerce.com/build-your-own-computer`;
const NumRam = "2 GB";
const agregado= "The product has been added to your shopping cart";
const ProductTwo="Digital Storm VANQUISH 3 Custom Performance PC";
const precio = '$1,259.00';
const total = '$1,259.00';
const productInfoProductOne =
    "Processor: 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\n" +
    "RAM: 2 GB\n" + "HDD: 320 GB\n" +
    "OS: Vista Home [+$50.00]\n" +
    "Software: Microsoft Office [+$50.00]\n" +
    "Software: Total Commander [+$5.00]";

fixture`Continuar compra`
.page(URL)

/**
 * DESCRIPCION ESCENARIO DE PRUEBA:
 * USUARIO AÑADE PRODUCTO AL CARRITO Y SE DEBE VERIFICAR QUE SEA EL PRODUCTO AÑADIDO
 * EN INFORMACION,PRECIO Y TOTAL, DESPUES SE DIRIGE A AÑADIR UN SEGUNDO PRODUCTO Y SE VALIDA
 * ESTE PRODUCTO EN EL CARRITO EN EN INFORMACION,PRECIO Y TOTAL EN CONJUNTO DEL PRIMER PRODUCTO
 */

test
    
    ('validar la adicion de nuevo producto a carrito', async t => {
        await intro.selectRam(NumRam);// llenado de campos 
        await intro.selectInput(Hdd.hddinput);
        await intro.selectInput(stw.sotfInput);
        await CarritoPage.pressButton(btn.AddCarritoButton);
        await t.expect(cfm.confirmationMessage.innerText).eql(agregado);// VALIDAR AÑADIR PRODUCTO UNO
        await CarritoPage.hoverEnCarrito();
        await CarritoPage.clickEnCarrito();
        await t.expect(info.data.innerText).eql(productInfoProductOne);//VALIDAR INFO PRODUCTO UNO CARRITO
        await ContinueShopping.ClickContinueShoppingbtn();
        await intro.goTocomputersDesktop();
        await intro.addProductButton(intro.add_2);
        await t.expect(cfm.confirmationMessage.innerText).eql(agregado);//VALIDAR AÑADIR PRODUCTO 2
        await CarritoPage.hoverEnCarrito();
        await CarritoPage.clickEnCarrito();
        await t.expect(info.data2.innerText).eql(ProductTwo) // VALIDAR INFO PRODUCTO 2 CARRITO
        .expect(info.price2.innerText).eql(precio)
        .expect(info.total2.innerText).eql(total);


    });
