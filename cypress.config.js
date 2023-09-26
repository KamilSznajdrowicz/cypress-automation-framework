const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "", // wyklucz dany folder
    //baseUrl: "https://webdriveruniversity.com/",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    videoUploadOnPasses: false,
    experimentalSessionAndOrigin: false,
    chromeWebSecurity: false,
    testIsolation: false, // blank page on second test via before function
    viewportHeight: 1080,
    viewportHeight: 1920,
    reporter: "cypress-multi-reporters",
    reporterOptions: {
      configFile: "reporter-config.json",
    },
    retries: {
      runmode: 0,
      openMode: 1, // add retry test when fail
    },
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "https://webdriveruniversity.com/",
      autostore_homepage: "https://automationteststore.com/",
    },
  },
});
