const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  env:{
    URL:'https://uatbi.bajajallianzlife.com/SIS/ProductList.aspx?ChannelID=PSF'
  }
});
