module.exports = {
  index: function(req, res) {
    res.json(
      {
        name: 'Jen',
        age: '24',
        email: 'jen@gmail.com'
      }
    );
  }
};
