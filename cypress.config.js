// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
// });

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // baseUrl: "https://example.cypress.io",
    screenshotsFolder: "cypress/screenshots",
    videosFolder: "cypress/videos",
    screenshotOnRunFailure: true,   // capture screenshot on failure
    video: true,                    // enable video recording
    videoCompression: 32,           // compress video size
    retries: 1,                      // retry failed tests
    trashAssetsBeforeRuns : true, // Whether Cypress will trash assets within the downloadsFolder, screenshotsFolder, and videosFolder before tests run with cypress run.
    reporter: 'mochawesome'
 
 
  }
});
