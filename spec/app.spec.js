var app = require('../app.js');
var supertest = require('supertest');

describe('Express Server API', function(){
  it("returns status code 200", function(done){
    supertest(app)
    .get('/')
    .expect('Content-Type',/json/)
    .expect(200, done);
    done();
  });
});
