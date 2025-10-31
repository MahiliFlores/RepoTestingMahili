const { I } = inject();
const fs = require('fs');
const allure = codeceptjs.container.plugins('allure');

class mercadolibre_page {
  fields = {
    Pais: locate('a.ml-site-link').withText('México'),
    Banner: '.andes-tooltip__content',
    Mastarde: '[data-js="onboarding-cp-close"]',
    CookiesBanner: 'div.cookie-consent-banner-opt-out[role="region"]',
    Cookies: '[data-testid="action:understood-button"]',
    BarraBusqueda: "#cb1-edit",
    Condicion: 'h3.ui-search-filter-dt-title[aria-level="3"]',
    CondicionNuevo: '//span[@class="ui-search-filter-name" and normalize-space()="Nuevo"]',
    FiltroLocal: locate('span.ui-search-filter-name').withText('Local'),
    OrdenarPor: locate('span.andes-dropdown__display-values').withText('Más relevantes'),
    MayorPrecio: locate('span.andes-list__item-primary').withText('Mayor precio'),
    TarjetaProducto: '.poly-card',
    NombreProducto: '.poly-component__title',
    PrecioProducto: '.andes-money-amount__fraction'


  };

  Home() {
    I.amOnPage('/');
    I.saveScreenshot('01-Page.png', true);
    const img = fs.readFileSync('output/01-Page.png');
    allure.addAttachment('01-Page', img, 'image/png');

  }

  async SelectCountry() {


    await I.waitForElement(this.fields.Pais, 10);
    await I.click(this.fields.Pais);
    try {
      await I.waitForElement(this.fields.Banner, 3);
      await I.click(this.fields.Mastarde);
    } catch (err) {

    }


    try {
      await I.waitForElement(this.fields.CookiesBanner, 3);
      await I.click(this.fields.Cookies);
    } catch (err) {

    }
    await I.saveScreenshot('02-Country.png', true);
    const img = fs.readFileSync('output/02-Country.png');
    allure.addAttachment('02-Country', img, 'image/png');
  }

  Search() {

    I.waitForElement(this.fields.BarraBusqueda, 10);
    I.fillField(this.fields.BarraBusqueda, 'playstation 5');
    I.pressKey('Enter');
    I.saveScreenshot('03-Search.png', true);
    const img = fs.readFileSync('output/03-Search.png');
    allure.addAttachment('03-Search', img, 'image/png');

  }


  Filter() {
    I.waitForElement(this.fields.Condicion, 10);
    I.scrollTo(this.fields.Condicion);
    I.wait(1);
    I.click(this.fields.CondicionNuevo);
    I.saveScreenshot('04-Filter.png', true);
    const img = fs.readFileSync('output/04-Filter.png');
    allure.addAttachment('04-Filter', img, 'image/png');

  }


  FilterCDMX() {
    I.waitForElement(this.fields.FiltroLocal, 10);
    I.click(this.fields.FiltroLocal);
    I.saveScreenshot('05-FilterCDMX.png', true);
    const img = fs.readFileSync('output/05-FilterCDMX.png');
    allure.addAttachment('05-FilterCDMX', img, 'image/png');


  }


  Order() {
    I.waitForElement(this.fields.OrdenarPor, 15);
    I.scrollTo(this.fields.OrdenarPor);
    I.wait(1);
    I.click(this.fields.OrdenarPor);
    I.click(this.fields.MayorPrecio);
    I.saveScreenshot('06-Order.png', true);
    const img = fs.readFileSync('output/06-Order.png');
    allure.addAttachment('06-Order', img, 'image/png');

  }


  async Obtain() {

    I.waitForElement(this.fields.TarjetaProducto, 5);
    I.waitForElement(this.fields.NombreProducto, 5);
    I.wait(2);

    const titles = await I.grabTextFromAll(this.fields.NombreProducto);
    const prices = await I.grabTextFromAll(this.fields.PrecioProducto);

    //Creación de arreglo para guardar los primeros 5 productos 
    const first5 = [];
    for (let i = 0; i < 5 && i < titles.length; i++) { //recorre 5 productos 
      first5.push({
        title: titles[i], //cada iteracion toma el nombre y precio 
        price: prices[i]
      });
    }
    await I.saveScreenshot('07-Obtain.png', true);
    const img = fs.readFileSync('output/07-Obtain.png');
    allure.addAttachment('07-Obtain', img, 'image/png');

    return first5;


  }
  async Print() {
    const first5 = await this.Obtain();
    console.log("Estos son los primeros 5 productos encontrados:");

    // Recorrer el arreglo de productos y mostrarlos en consola 
    first5.forEach((p, i) => console.log('${i + 1}. ${p.title} - $${p.price}'));

    await I.saveScreenshot('08-Print.png', true);
    const img = fs.readFileSync('output/08-Print.png');
    allure.addAttachment('08-Print', img, 'image/png');
  }

}

module.exports = new mercadolibre_page();