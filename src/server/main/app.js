var express = require('express');
var app = express();
var path = require('path');
// var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var cors = require('cors')

// var corsOptions = {
//   origin: 'http://example.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

// app.use('/api/1/assignment/quotes', cors(corsOptions), function (req, res, next) {
//   res.json({msg: 'This is CORS-enabled for only example.com.'})
// })
var indexRouter = require('./routes')





app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "../..", "build")));
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter)
app.use(cors({
  origin: '​https://okapi-staging-3.sproutt.com'
}))
const port = 5000


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.listen(port, () => {
  console.log(`Sproutt app listening at http://localhost:${port}`)
})


module.exports = app;
