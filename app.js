const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const knex = require('./db/connection');
const queries = require('./db/queries');

//routing
const micro = require('./routes/micro');
const macro = require('./routes/macro');
const food_log = require('./routes/food_log');
const users = require('./routes/users');
const oauth = require('./routes/oauth')

const app = express();

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

if (process.env.NODE_ENV !== 'test') {
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/auth/facebook', oauth);

app.use('/users', users)

app.use('/api/micro', micro);
app.use('/api/macro', macro);

app.use('/api/users', users);
app.use('/api/food_log', food_log);
app.use('/test', (req, res) => {
    res.send('route working!')
});

app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

/* eslint-disable no-unused-vars */
app.use((err, req, res, next) => {
  const message = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json({
   	eugene_was_here: 'woot',
	status: 'error',
    err,
  });
});
/* eslint-enable no-unused-vars */

module.exports = app;
