var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

let dev_db_url = 'mongodb+srv://Convergytics_api:Convergytics_api@convergytics-3on0e.mongodb.net/Kaleyra?retryWrites=true';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;

var indexRouter = require('./routes/index');
var userRouter = require('./routes/user');
var smsRouter = require('./routes/sms');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/sms', smsRouter);

module.exports = app;
