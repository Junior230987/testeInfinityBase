const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    testIsolation: false,
    baseUrl: "https://magento.softwaretestingboard.com/",
    viewportWidth: 1400,
    viewportHeight: 900,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
    },
    chromeWebSecurity: false
  },
});
