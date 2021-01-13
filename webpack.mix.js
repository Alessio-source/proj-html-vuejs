let mix = require('laravel-mix');

mix.sass('src/style.scss', 'css').options({
    processCssUrls: false // questa opzione fa in modo da non modificare i percorsi delle immagini
});
