const express = require('express');

const mongoose = require('mongoose');
const routes = require('./controllers/booksController');
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooksearch',
//   { useNewUrlParser: true }
// );

// Tony Helped
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooksearch', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.once('open', (_) => {
  console.log('Database connected:');
});

db.on('error', (err) => {
  console.error('connection error:', err);
});
// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
