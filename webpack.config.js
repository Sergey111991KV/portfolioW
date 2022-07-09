const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
        swiper: './src/analytics.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true
    },
};