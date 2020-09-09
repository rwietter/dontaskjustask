const withImages = require('next-images');
const withFonts = require('next-fonts');
const withPWA = require('next-pwa');

module.exports = withFonts(
  withImages(
    withPWA({
      pwa: {
        dest: 'public',
      },
    })
  )
);
