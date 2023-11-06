const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
  env:{
    URL:'https://uatbi.bajajallianzlife.com/SIS/ProductList.aspx?ChannelID=PSF'
  }
});
