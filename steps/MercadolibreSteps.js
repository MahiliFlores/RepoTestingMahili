const { mercadolibre_page } = inject();

Given(/^I am on the mercado libre home page$/, () => {
 mercadolibre_page.Home();

});

When(/^Select Mexico as the country$/, async() => {
 await mercadolibre_page.SelectCountry();

});

When(/^Search for the term "playstation 5"$/, () => {
 mercadolibre_page.Search();

});

When(/^Filter by New status$/, () => {
 mercadolibre_page.Filter();

});

When(/^Filter by location CDMX$/, () => {
 mercadolibre_page.FilterCDMX();

});


When(/^Sort by highest to lowest price$/, () => {
 mercadolibre_page.Order();

});

Then(/^I get the name and price of the first 5 products$/, async() => {
 await mercadolibre_page.Obtain();

});

Then(/^Print these products on the console$/, async() => {
 await mercadolibre_page.Print();
});