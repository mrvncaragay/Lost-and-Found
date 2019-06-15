require('dotenv').config();
const express = require('express');
const app = express();

require('./startup/routes')(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}`);
});
