var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var fileUpload = require('express-fileupload');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var filesUploadOptions = {
    limits: { fileSize: 50 * 1024 * 1024 },
};

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload(filesUploadOptions));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
