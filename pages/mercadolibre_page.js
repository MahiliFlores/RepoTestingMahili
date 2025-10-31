const { I } = inject();

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
  }

  Search() {

    I.waitForElement(this.fields.BarraBusqueda, 10);
    I.fillField(this.fields.BarraBusqueda, 'playstation 5');
    I.pressKey('Enter');

  }


  Filter() {
    I.waitForElement(this.fields.Condicion, 10);
    I.scrollTo(this.fields.Condicion);
    I.wait(1);
    I.click(this.fields.CondicionNuevo);
  }


  FilterCDMX() {
    I.waitForElement(this.fields.FiltroLocal, 10);
    I.click(this.fields.FiltroLocal);

  }


  Order() {
    I.waitForElement(this.fields.OrdenarPor, 15);
    I.scrollTo(this.fields.OrdenarPor);
    I.wait(1);
    I.click(this.fields.OrdenarPor);
    I.click(this.fields.MayorPrecio);
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

    return first5;


  }
  async Print() {
    const first5 = await this.Obtain();
    console.log(" Estos son los primeros 5 productos encontrados:");
    //Recorrer el arreglor de productos y mostrarlos en consola 
    first5.forEach((p, i) => console.log(`${i + 1}. ${p.title} - $${p.price}`));

  }
}
module.exports = new mercadolibre_page(); 