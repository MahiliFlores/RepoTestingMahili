@MercadoLibre
Feature: Validar flujo en Mercado Libre 

   Scenario: Busqueda de PS5
   Given I am on the mercado libre home page
   When Select Mexico as the country
   And Search for the term "playstation 5"
   And Filter by New status
   And Filter by location CDMX
   #And Get products from Mexico City
   And Sort by highest to lowest price
   Then I get the name and price of the first 5 products
   And Print these products on the console
