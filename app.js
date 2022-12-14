require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const engine = require('ejs-mate');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport')
const User = require('./models/user');
const session = require('express-session');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
// const seedPosts = require('./seeds');
// seedPosts();


const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const reviewsRouter = require('./routes/reviews');
//const { db } = require('./models/user');

const app = express();

// Connecting to the database
mongoose.connect('mongodb://localhost:27017/surf-shop');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('We\'re connected')
});

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//Setting up public access directory
app.use(express.static('public'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));


// Configure passport and sessions
app.use(session({
  secret: 'F8ful-Dabiko-Sadler',
  resave: false,
  saveUninitialized: true
})) 
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//Setting the title/success messages of each page with middlware
app.use((req, res, next) => {
  req.user = {
    '_id'      : '62751c4f0a0b1439352419dd',
    'username' : 'dabiko'
  }
  res.locals.currentUser = req.user;
  //set page tittle
  res.locals.title = 'Surf Shop';
  //set success flash messages
  res.locals.success = req.session.success || '';
  delete req.session.success;
  //set error flash messages
  res.locals.error = req.session.error || '';
  delete req.session.error;
  // continue on to the next function in middleware chain.
  next();
})

// Mount route 
app.use('/', indexRouter);
app.use('/posts', postsRouter);
app.use('/posts/:id/reviews', reviewsRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  console.log(err);
  req.session.error = err.message;
  res.redirect('back');
  // // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get('env') === 'development' ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
