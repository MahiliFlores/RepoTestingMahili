# Automatización de pruebas - Mercado Libre

Este proyecto contiene la prueba automatizada del flujo de búsqueda de productos en Mercado Libre utilizando CodeceptJS con Playwright.


# Requisitos
- Node.js v18+  
- NPM  
- Navegador Chromium (se descarga con Playwright automaticamente)  

# Instala dependencias:

*```bash*
npm install

# Ejecutar todas las pruebas
npx codeceptjs run

# Ejecutar el feature especifico
npx codeceptjs run --features features/Mercadolibre.feature

# Metodos principales
Home() -> Carga la pagina principal de Mercado Libre
SelectCountry() -> Selecciona el país y maneja banners de cookies o pop-ups.
Search() -> Ingresa texto en la barra de búsqueda y presiona Enter.
Filter()-> Filtra por condición (“Nuevo”).
FilterCDMX() -> Filtra por ubicacion (“Local”).
Order() -> Filtra del precio mayor al menor.
Obtain() -> Obtiene los primeros 5 productos de la búsqueda con su nombre y precio.
Print() -> Muestra en consola los productos obtenidos.
