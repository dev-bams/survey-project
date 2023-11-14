/**
 * Centennial College
 * Web Application Development - COMP229 / Section 004
 * 
 * Group Project - Survey Website
 * 
 * Team:
 *  - Carlos Gama    (301257092) / Project Manager
 *  - Idris Mustapha (301207535) / Back-end Developer
 *  - Jinsung Park   (301241866) / Front-end Developer
 *  - Nabin Dotel    (301281044) / Front-end Developer
 *  - Shristi Prasai (301310100) / Front-end Developer
 */

// 3rd party packages
let createError = require('http-errors');
let express = require('express');
var session = require('express-session');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');


let DB = require('./db');

// Connecting Database
let mongoose = require('mongoose');

let serverSeLectionTimeoutMS = 500;
mongoose.connect(DB.URI, { serverSeLectionTimeoutMS });

let mongodb = mongoose.connection;
mongodb.on('error', console.error.bind(console, `Failed to connect to ${DB.URI}`));
mongodb.once('open', () => { console.log('Database connected!'); });

// Routes
let indexRouter = require('../routes/index');
let loginRouter = require('../routes/login');
let surveyRouter = require('../routes/survey');

// Express initialization
let app = express();

// Configuring express-session
app.use(session({
  secret: 'centennial123',
  resave: false,
  saveUninitialized: false
}));

// Moving the session parameter core session parameters to locals
app.use((req, res, next) => {
  res.locals.loggedin = req.session.loggedin;

  // Temporary parameter
  res.locals.message = req.session.message;
  delete req.session.message;
  next();
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs'); // express -e

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../public')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);
app.use('/home', indexRouter);
app.use('/index', indexRouter);
app.use('/login', loginRouter);
app.use('/survey', surveyRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
