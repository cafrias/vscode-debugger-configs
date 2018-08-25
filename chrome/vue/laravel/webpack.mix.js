let mix = require("laravel-mix");

mix
  .js("resources/assets/js/app.js", "public/js")
  .sourceMaps(false, "source-map")
  .sass("resources/assets/sass/app.scss", "public/css");
