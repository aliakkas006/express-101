const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// global middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());
app.use(require('./routes'));
app.use(globalMiddleware);

app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found!</h1>');
});

app.use((error, req, res, next) => {
  console.log('Error', error);

  if (error.status) {
    return res.status(error.status).send(error.message);
  }

  res.status(500).send('Something went wrong!');
});

app.listen(4000, () => {
  console.log('Server is listening on PORT 4000');
});

/**
 * If everything seems ok Controller will call response methods
 * If everything seems ok Middleware will call next function
 */

function globalMiddleware(_req, _res, next) {
  console.log('This is Global Middleware');
  next();
}

/**
 * Responsibilities of a middleware
 * - handle common tasks
 * - request logs
 * - filter request
 * - modify or reshape request
 * - validate request body
 * - authenticate or authorize request
 * - add additional details to request body
 * - response bad requests
 * - passs requests to next middleware or response handler.
 */
