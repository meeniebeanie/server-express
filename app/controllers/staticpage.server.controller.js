//Controller of static pages, exported to be used by routes

module.exports.renderHome = function(req, res) {
  //each routes are linked to appropriate views and privdes the title for each page
  res.render('static_pages/index', {
    title: 'Menu'
  });
};

module.exports.renderAbout = function(req, res) {
  res.render('static_pages/about', {
    title: 'About'
  });
};

module.exports.renderContact = function(req, res) {
  res.render('static_pages/contact', {
    title: 'Contact'
  });
};
