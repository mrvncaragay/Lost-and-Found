const bodyParser = require('body-parser');
const homepage = require('../routes/homepage');
const auth = require('../routes/auth');
const user = require('../routes/users');
const lost = require('../routes/lost');
const found = require('../routes/found');
const inquiry = require('../routes/inquiry');
const property = require('../routes/properties');
const organization = require('../routes/organizations');
const data = require('../routes/datas');
const pageError = require('../routes/pageError');

module.exports = app => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  //app.use(homepage);
  app.use('/api/auth', auth);
  app.use('/api/users', user);
  app.use('/api/lost', lost);
  app.use('/api/found', found);
  app.use('/api/inquiry', inquiry);
  app.use('/api/properties', property);
  app.use('/api/organizations', organization);
  app.use('/api/data', data);
  app.use(pageError);
};
