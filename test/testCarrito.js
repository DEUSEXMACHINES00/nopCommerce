import CarritoPage from "../pages/CarritoPage";
import intro from '../pages/addproduct';
import Hdd from '../pages/specificHdd';
import stw from '../pages/specificSoftware';
import btn from '../pages/specificButton';
import info from '../pages/ConfirmationInfocar';


const productInfo =
    "Processor: 2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\n" +
    "RAM: 2 GB\n" + "HDD: 320 GB\n" +
    "OS: Vista Home [+$50.00]\n" +
    "Software: Microsoft Office [+$50.00]\n" +
    "Software: Total Commander [+$5.00]";
const precio = '$1,320.00';
const total = '$1,320.00';
const NumRam = "2 GB";

fixture`Carrito Compras`
    .page`https://demo.nopcommerce.com/build-your-own-computer`

/**
 * DESCRIPCION ESSCENARIO DE PRUEBA:
 * USUARIO AÑADE PRODUCTO AL CARRITO Y SE DEBE VERIFICAR QUE SEA EL PRODUCTO AÑADIDO
 * EN INFORMACION,PRECIO Y TOTAL
 */

test
    ('Validar producto agregado al carrito, informacion,precio y total', async t => {

        await intro.selectRam(NumRam);// llenado de campos 
        await intro.selectInput(Hdd.hddinput);
        await intro.selectInput(stw.sotfInput);
        await CarritoPage.pressButton(btn.AddCarritoButton)
        await CarritoPage.hoverEnCarrito();
        await CarritoPage.clickEnCarrito();
        await t.expect(info.data.innerText).eql(productInfo)
            .expect(info.price.innerText).eql(precio)
            .expect(info.total.innerText).eql(total);
    });





