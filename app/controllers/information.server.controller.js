module.exports = {
  index: function(req, res) {
    res.json(
      {
        name: "Jen",
        age: "24",
        email: "jen@gmail.com",
        github: "https://github.com/meeniebeanie",
        about_me: "Listicle squid cornhole, PBR&B authentic synth selfies kickstarter artisan bespoke pabst aesthetic letterpress messenger bag whatever. 8-bit tattooed chambray, marfa authentic kale chips meggings ethical banh mi. Drinking vinegar chambray brunch thundercats, freegan disrupt butcher pabst. Umami fingerstache truffaut you probably haven't heard of them, health goth pinterest semiotics. Messenger bag ethical celiac selvage bitters. Authentic literally jean shorts retro, fanny pack umami fingerstache bicycle rights next level butcher mustache waistcoat four dollar toast kickstarter. Quinoa mustache gochujang kinfolk viral."
      }
    );
  }
};
