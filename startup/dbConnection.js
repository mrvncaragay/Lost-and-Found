const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false); //remove the deprecated warning
mongoose.set('useCreateIndex', true); //index deprecated warning
mongoose.set('useNewUrlParser', true); //URL deprecated warning

mongoose
  .connect(process.env.LOCALDB)
  .then(() => console.log(`Connected to ${process.env.LOCALDB}...`))
  .catch(err => console.error(`Cannot connecto to ${process.env.LOCALDB}...`, err));

module.exports = mongoose;
