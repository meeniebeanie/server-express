module.exports = function(app) {

  //Require the controller of static pages- they are already exported by the controllers
  var staticPageController = require ('../controllers/staticpage.server.controller');
  var informationController = require('../controllers/information.server.controller');
  var projectsController =
  require('../controllers/projects.server.controller');

  // add in permissions for people to use the API, i think?
  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
    next();
  });

  //Start routing- calling the controller and the required function.. i think?
  // app.get('/', staticPageController.renderHome);
  // app.get('/about', staticPageController.renderAbout);
  // app.get('/contact', staticPageController.renderContact);
  app.get('/', informationController.index);
  // app.get('/projects', projectsController.index);

};
