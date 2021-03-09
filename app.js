var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var ransomwaresRouter = require('./routes/ransomwares');
var victimsRouter = require('./routes/victims');
var ransomsRouter = require('./routes/ransoms');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'blade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ransomware', ransomwaresRouter);
app.use('/victim', victimsRouter);
app.use('/ransom', ransomsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  res.sendStatus(err.status || 500);
});

module.exports = app;