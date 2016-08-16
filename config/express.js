//Initialize the express application

//1. Require the neccessary modules:
var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    expressLayouts = require('express-ejs-layouts');

module.exports = function() {
  var app = express();

  if (process.env.NODE_ENV === 'development')
  {
    app.use(morgan('dev')); // use morgan in dev.
  } else if (process.env.NODE_ENV === 'production') {
    app.use(compress()); // use compress in production.
  }
  app.use(bodyParser.urlencoded({extended: true}));
  //use bodyParser in urlencoded format.
  app.use(bodyParser.json());
  //use bodyparser in json format
  app.use(methodOverride());// use method override
  app.set('views', './app/views'); // set views to be in app/views folder.
  app.set('view engine', 'ejs'); //set views to use ejs
  app.use(expressLayouts);

  require('../app/routes/index.server.routes')(app);
  //require the routes indicated by index.server.routes for the app to function as the next flow.

  app.use(express.static('./public')); // links public folder with assets.

  return app; //app returns with the above specifications and runs. is this a recursive function? 
};
