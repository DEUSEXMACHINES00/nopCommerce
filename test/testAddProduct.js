import intro from '../pages/addproduct';
import producto from '../pages/specificProduct';
import Hdd from '../pages/specificHdd';
import stw from '../pages/specificSoftware';
import btn from '../pages/specificButton';
import cfm from '../pages/confirmation';

const URL = "https://demo.nopcommerce.com/";
const productName = "Build your own computer";
const NumRam = "2 GB";
const agregado= "The product has been added to your shopping cart";


fixture`Test agregar producto en carrito`

/**
 * DESCRIPCION ESSCENARIO DE PRUEBA:
 * USUARIO SELECCIONA UN PRODUCTO Y SE VALIDA EL TITULO DEL PRODUCTO
 *
 */
test
    .page(URL)
    ('validar titulo producto seleccionado', async t => {
        await intro.goTocomputersDesktop();
        await intro.addProductButton(intro.add_1);// seleccionar producto
        await t.expect(producto.product.innerText).eql(productName); // validar titulo producto
    });

/**
 * DESCRIPCION ESSCENARIO DE PRUEBA:
 * USUARIO SELECCIONA PRODUCTO Y SE AGREGAN CARACTERISTICAS Y SE AÑADE AL CARRITO
 * VALIDANDO CON MENSAJE DE CONFIRMACION
 */
test
    .page(URL)
    ('validar mensaje de producto agregado al carrito', async t => {
        await intro.goTocomputersDesktop();
        await intro.addProductButton(intro.add_1);// seleccionar boton add producto
        await intro.selectRam(NumRam);// llenado de campos 
        await intro.selectInput(Hdd.hddinput);
        await intro.selectInput(stw.sotfInput);
        await intro.pressButton(btn.AddCarritoButton);//presionar boton carrito
        await t
        .expect(cfm.confirmationMessage.innerText).eql(agregado)
        .wait(2000);

    });