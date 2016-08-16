var express = require('./config/express'); //we need to create this file with all the neccessary configuraitons
var app = express(); //express is now a... function? so we are calling it.

app.set('port', (process.env.PORT || 9000)); // set port to be production port or 9000 on localhost

app.listen(app.get('port'), function(){
  console.log('express server for server-express is running at localhost', app.get('port')); //console logs the port number to tell us that the app is running.
});

module.exports = app; //exports to the app.spec.js- requiring this app file for testing.
