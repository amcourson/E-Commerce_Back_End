const express = require('express');
const routes = require('./routes');
const Sequelize = require('./config/connection');
const Sequelize = require('sequelize');






// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server *

// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });





// turn on connection to db and server *
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});