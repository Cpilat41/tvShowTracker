const tvShowController = require("../controllers/tvshow.controller"); //Import the code from Code Block 1
module.exports = (app) => {
  app.get("/api", tvShowController.index);
};
