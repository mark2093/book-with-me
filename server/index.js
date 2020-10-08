const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dev');

// routes
const rentalRoutes = require('./routes/rentals');
const usersRoutes = require('./routes/users');

// models
require('./models/rental');
require('./models/user');

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
}, () => {
  console.log('Connected to DB!')
});


// Middleware
app.use(bodyParser.json())

//API Router
app.use('/api/v1/rentals', rentalRoutes);
app.use('/api/v1/users', usersRoutes);



app.listen(PORT, () => {
  console.log('Server is listening on port: ', PORT);
})