/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: "./*_test.js",
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'https://www.mercadolibre.com/',
      show: true,
     keepBrowserState: true,   
      keepCookies: true,
      locale: "es-MX"
    }
  },
  include: {
    I: './steps_file.js',
     mercadolibre_page: "./pages/mercadolibre_page.js"
  },
  plugins: {
    allure: {
      enabled: true, // activar el plugin
      require: '@codeceptjs/allure-legacy',
      outputDir: './output/allure-results'
    }
  },
   gherkin: {
    features: "./features/*.feature",
    steps: [
      "./steps/MercadolibreSteps.js",
    ]
  },
  name: 'RepoTestingMahili'
}