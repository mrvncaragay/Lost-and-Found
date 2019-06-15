const bodyParser = require('body-parser');
const homepage = require('../routes/homepage');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(homepage);
};
