const bodyParser = require('body-parser');
const homepage = require('../routes/homepage');
const auth = require('../routes/auth');
const user = require('../routes/users');
const organization = require('../routes/organizations');
const pageError = require('../routes/pageError');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  app.use(homepage);
  app.use('/api/auth', auth);
  app.use('/api/users', user);
  app.use('/api/organizations', organization);
  app.use(pageError);
};
