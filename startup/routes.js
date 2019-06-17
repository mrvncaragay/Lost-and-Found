const bodyParser = require('body-parser');
const homepage = require('../routes/homepage');
const auth = require('../routes/auth');
const admin = require('../routes/admins');
const property = require('../routes/properties');
const organization = require('../routes/organizations');
const pageError = require('../routes/pageError');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  //app.use(homepage);
  app.use('/api/auth', auth);
  app.use('/api/admins', admin);
  app.use('/api/properties', property);
  app.use('/api/organizations', organization);
  app.use(pageError);
};
