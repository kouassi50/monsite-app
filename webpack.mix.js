const mix = require('laravel-mix');








mix.js('ressources/js/app.js','public/js')
    .postcss('ressources/css/app.css','public/css',[]);